
'use server';

import { Resend } from 'resend';

// Define InputProps for email data
interface EmailInputProps {
  name: string;
  email: string;
  message: string;
}

async function sendEmail(data: EmailInputProps) {
  if (!process.env.RESEND_API_KEY) {
    console.error('Resend API key is not set in environment variables.');
    // This error should be handled in a way that informs the user or logs appropriately for production.
    return { error: 'Email service is not configured properly. API key missing.' };
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const response = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', 
      to: ['aishwaryakm526@gmail.com'], // Target email address
      subject: 'New Portfolio Contact Form Submission',
      html: `<h3>New Contact Form Submission</h3>
             <p><strong>Name:</strong> ${data.name}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p><strong>Message:</strong></p>
             <p>${data.message}</p>`,
    });
    // On success, Resend returns an object like { id: '...' }
    // On some API errors (e.g., validation), Resend returns an error object like { name: '...', message: '...' }
    return response;
  } catch (error) {
    console.error("Error sending email via Resend (exception caught):", error);
    return { error: (error instanceof Error ? error.message : 'An unknown error occurred while sending the email.') };
  }
}

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    console.error("Form validation failed: All fields (name, email, message) are required.");
    return { success: false, error: "Please fill in all fields." };
  }

  const data = { name, email, message };
  const resendResponse = await sendEmail(data);

  if (resendResponse && 'id' in resendResponse && typeof resendResponse.id === 'string') {
    console.log("Message sent successfully! Response ID:", resendResponse.id);
    return { success: true, message: "Your message has been sent successfully!" };
  } else {
    let errorMessage = "Failed to send message. Please try again or check server logs.";
    // Attempt to extract a more specific error message from Resend's response
    if (resendResponse && typeof resendResponse === 'object') {
      if ('error' in resendResponse && typeof resendResponse.error === 'string') {
        // This covers errors from our sendEmail's catch block or API key check
        errorMessage = resendResponse.error;
      } else if ('message' in resendResponse && typeof resendResponse.message === 'string') {
        // This covers error objects directly returned by Resend API (e.g., validation errors)
        errorMessage = resendResponse.message;
        if ('name' in resendResponse && typeof resendResponse.name === 'string') {
          errorMessage = `Resend Error (${resendResponse.name}): ${errorMessage}`;
        }
      }
    }
    console.error("Failed to send message. Error Details:", errorMessage, "Full Resend Response:", JSON.stringify(resendResponse));
    return { success: false, error: errorMessage };
  }
}


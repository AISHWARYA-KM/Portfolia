
// Removed 'use server'; directive as this is a UI component.
// The actual server action 'submitContactForm' is imported from 'actions.ts'.

import { Button } from "../../components/ui/button";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

import { submitContactForm } from "../action";

export interface InputProps {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  // The handleFormSubmit logic is now encapsulated in `submitContactForm` in `actions.ts`
  // The form's action prop will directly reference the imported server action.

  return (
    <footer id="contact" className="bg-muted py-12 md:py-16 lg:py-20 mt-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground mb-10">
          I&apos;m currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        {/* Contact Form */}
        <div className="mx-auto max-w-md">
          {/* The action prop now directly uses the imported server action */}
          <form action={submitContactForm} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <Input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <Input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <Textarea id="message" name="message" placeholder="Type your message here." className="min-h-[100px]" required />
            </div>
            <Button type="submit" className="w-full rounded-full">Send Message</Button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-4 mt-10">
          <a href="mailto:kmaishwaryaa@gmail.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
            <Mail className="h-5 w-5" />
            <span>kmaishwaryaa@gmail.com</span>
          </a>
          <a href="tel:+919686498135" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
            <Phone className="h-5 w-5" />
            <span>+91 9686498135</span>
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.linkedin.com/in/aishwarya-k-m-187059299/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="https://github.com/AISHWARYA-KM" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}

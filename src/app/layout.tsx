import type { Metadata } from "next";
import { Ubuntu } from "next/font/google"; // Changed from Inter to Ubuntu
import "./globals.css";

import { Toaster } from "../components/ui/toaster";
import { ThemeProvider } from "./providers";

// Configure Ubuntu font
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'], // Specified weights
  style: ['normal', 'italic'], // Specified styles
  variable: '--font-ubuntu', // CSS variable for Ubuntu font
});

export const metadata: Metadata = {
  title: "Aishwarya K M | Digital Showcase",
  description: "Personal portfolio website for Aishwarya K M, showcasing skills, experience, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.variable} font-sans antialiased`}> {/* Apply Ubuntu font variable */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

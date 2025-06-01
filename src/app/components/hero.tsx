
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="flex flex-col text-left">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="text-[#ffffff]">Aishwarya K M</span>
      </h1>
      <h2 className="mt-2 text-xl font-semibold text-primary sm:text-2xl lg:text-3xl">
        Software Developer
      </h2>
      <p className="mt-4 max-w-md text-lg text-muted-foreground lg:text-xl">
        I build accessible, pixel-perfect digital experiences for the web, focusing on robust engineering and thoughtful design.
      </p>
      <div className="mt-8 flex flex-row items-center gap-4"> {/* Container for button and icons */}
        <Link
            href="/Aishwarya_K_M_Resume.pdf" // Updated link
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary bg-background hover:bg-secondary hover:text-secondary-foreground h-11 px-8"
          >
            Download Resume
        </Link>
        <div className="flex items-center space-x-4"> {/* Social icons container */}
          <Link href="https://github.com/AISHWARYA-KM" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/aishwarya-k-m-187059299/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="mailto:kmaishwaryaa@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
}

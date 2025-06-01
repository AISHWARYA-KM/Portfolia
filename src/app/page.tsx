
'use client';

import { useState, useEffect, useRef } from 'react';
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Education } from "./components/education";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Certifications } from "./components/certifications";
import { Extracurricular } from "./components/extracurricular";
import { Contact } from "./components/contact";
import ParticleJSBackground from "./components/ParticleJSBackground";
import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import { ScrollToTopButton } from './components/ScrollToTopButton';

const desktopNavLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "EDUCATION", href: "#education" },
  { name: "SKILLS", href: "#skills" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CERTIFICATIONS", href: "#certifications" },
  { name: "HOBBIES", href: "#extracurricular" },
];

const allScrollableSectionIds = [
  'about',
  'education',
  'skills',
  'experience',
  'projects',
  'certifications',
  'extracurricular',
];

const mobileNavLinksConfig = [
  { name: "ABOUT", href: "#about" },
  { name: "EDUCATION", href: "#education" },
  { name: "SKILLS", href: "#skills" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CERTIFICATIONS", href: "#certifications" },
  { name: "HOBBIES", href: "#extracurricular" },
];


export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const mainScrollRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mainEl = mainScrollRef.current;
    if (!mainEl) return;

    const handleScroll = () => {
      const scrollPosition = mainEl.scrollTop;
      const containerHeight = mainEl.clientHeight;
      let currentActive = '';

      for (const sectionId of allScrollableSectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          // Adjust scrollThreshold to make highlighting more responsive/accurate
          const scrollThreshold = containerHeight * 0.3; 

          if (elementTop <= scrollPosition + scrollThreshold) {
            currentActive = sectionId;
          } else if (scrollPosition + containerHeight >= mainEl.scrollHeight - 20 && sectionId === allScrollableSectionIds[allScrollableSectionIds.length -1]) {
            // Ensure last section is highlighted if scrolled to the very bottom
            currentActive = sectionId;
          }
           else {
            // Break early if the current section is found and others are below the threshold
            if (currentActive) break;
          }
        }
      }
      
      // Default to first section if no other section is active (e.g., at the very top)
      if (!currentActive && scrollPosition < 50) { // Use a small buffer for initial load
        currentActive = allScrollableSectionIds[0];
      }

      setActiveSection(currentActive || allScrollableSectionIds[0]);
    };

    // Initial call to set active section based on current view
    handleScroll();

    mainEl.addEventListener('scroll', handleScroll);
    return () => {
      mainEl.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount and cleans up on unmount

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ParticleJSBackground />
      <div className="flex flex-col md:flex-row flex-grow relative z-0">
        <header className="w-full md:w-1/2 lg:w-1/2 md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:h-screen md:sticky md:top-0 flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
          <div>
            <Hero />
            <nav className="hidden md:block mt-10 lg:mt-12">
              <ul className="space-y-2">
                {desktopNavLinks.map((link) => {
                  const isLinkActive = activeSection === link.href.substring(1);
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center py-1 transition-all duration-300 ease-in-out"
                        onClick={(e) => {
                          e.preventDefault();
                          const targetElement = document.getElementById(link.href.substring(1));
                          if (targetElement && mainScrollRef.current) {
                            mainScrollRef.current.scrollTo({
                              top: targetElement.offsetTop, // No additional offset needed
                              behavior: 'smooth',
                            });
                          } else if (targetElement) {
                            // Fallback for environments where mainScrollRef might not be available
                            // or if the target is outside the main scroll container.
                            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                      >
                        <span
                          className={`mr-3 h-px transition-all duration-300 ease-in-out group-focus:w-10 group-focus:bg-primary ${
                            isLinkActive
                              ? 'w-10 bg-primary' // Active link line
                              : 'w-5 bg-muted-foreground group-hover:w-10 group-hover:bg-primary' // Inactive link line
                          }`}
                        ></span>
                        <span
                          className={`font-semibold uppercase tracking-wider text-xs transition-all duration-300 ease-in-out group-focus:text-primary ${
                            isLinkActive
                              ? 'text-primary' // Active link text
                              : 'text-muted-foreground group-hover:text-primary' // Inactive link text
                          }`}
                        >
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            {/* Desktop Social Icons are now in Hero.tsx */}
            <div className="hidden md:block mt-8">
              {/* Content from Hero.tsx social links, or leave empty if handled in Hero */}
            </div>
          </div>
          
          {/* This div was previously for desktop social icons, now handled above or in Hero */}
          <div className="hidden md:block">
             {/* Social icons are now part of the Hero component or placed directly after nav */}
          </div>

          {/* Mobile Navigation and Social Links */}
          <div className="md:hidden mt-10 p-6 flex flex-col items-start">
            <nav className="mb-8">
              <ul className="space-y-3">
                {mobileNavLinksConfig.map((link) => {
                  const isLinkActive = activeSection === link.href.substring(1);
                  return (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className={`font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors ${
                        isLinkActive ? 'text-primary' : 'text-muted-foreground'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                         const targetElement = document.getElementById(link.href.substring(1));
                          if (targetElement && mainScrollRef.current) {
                             // For mobile, scrolling the main element to the section top is usually fine.
                             // No complex offset calculations needed as sticky header isn't a factor here.
                             targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

                          } else if (targetElement) {
                            // Fallback if mainScrollRef isn't available
                            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex items-center space-x-5 mb-6">
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
        </header>

        <main 
          ref={mainScrollRef} 
          className="w-full md:w-1/2 lg:w-1/2 md:h-screen md:overflow-y-auto p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 space-y-16 md:space-y-20 hide-scrollbar"
        >
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Extracurricular />
        </main>
      </div>
      <Contact />
      <ScrollToTopButton /> {/* Moved button here, no prop needed */}
    </div>
  );
}

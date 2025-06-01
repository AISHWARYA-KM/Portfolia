
import { Section } from "./section";
import { Badge } from "../../components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Blood Bank Management System",
    description: "A browser-based system designed to store, process, retrieve, and analyse blood-related information. Implemented CRUD operations and utilized triggers, assertions, and procedures.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "CRUD", "SQL Triggers"],
    githubLink: "https://github.com/AISHWARYA-KM/BLood-Bank-Management-System",
    liveLink: null,
    imageSrc: "/bloodbank.png",
    imageAlt: "Blood Bank Management System Screenshot",
    dataAiHint: "medical database",
  },
  {
    title: "Emotion Based Music Player",
    description: "Developed a music player that detects user emotions through facial recognition using CNN and Viola-Jones algorithm, personalizing playlists based on mood.",
    technologies: ["Python", "OpenCV", "CNN", "Viola-Jones", "Machine Learning"],
    githubLink: "https://github.com/AISHWARYA-KM/Emotion-Based-Music-Player",
    liveLink: null,
    imageSrc: "/emotionbasedmusic.png",
    imageAlt: "Emotion Based Music Player Screenshot",
    dataAiHint: "music interface",
  },
  {
    title: "AI-Agricultural Chatbot",
    description: "An AI-based chatbot using Naive Bayes and VGG-19 models for crop recommendation and plant disease detection, integrated with NLP for interactive agricultural assistance.",
    technologies: ["Python", "Naive Bayes", "VGG-19", "NLP", "Machine Learning", "Chatbot"],
    githubLink: "https://github.com/AISHWARYA-KM/AI-Agricultural-Chatbot",
    liveLink: null,
    imageSrc: "/ai-agricultural.png", // Updated image source
    imageAlt: "AI-Agricultural Chatbot",
    dataAiHint: "agriculture technology",
  },
    {
    title: "Pac-Man Game",
    description: "A Python-based implementation of the classic Pac-Man game developed during the InternPe internship. This is part of a larger collection of Python projects.",
    technologies: ["Python", "Pygame"],
    githubLink: "https://github.com/AISHWARYA-KM/PythonProjects",
    liveLink: null,
    imageSrc: "/pacman.png",
    imageAlt: "Pac-Man Game",
    dataAiHint: "retro gaming",
  },
];

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="group/list space-y-10 md:space-y-12">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/25 dark:lg:group-hover:bg-accent/5 lg:group-hover:shadow-lg"></div>
            
            <div className="z-10 sm:col-span-2 mb-4 sm:mb-0">
              <Link
                href={project.githubLink || "#!"}
                target={project.githubLink ? "_blank" : "_self"}
                rel={project.githubLink ? "noopener noreferrer" : ""}
                aria-label={`View project ${project.title} on GitHub`}
                className="block rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  width={200}
                  height={120}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.dataAiHint}
                />
              </Link>
            </div>
            
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <div>
                  <Link
                    href={project.githubLink || "#!"} 
                    target={project.githubLink ? "_blank" : "_self"}
                    rel={project.githubLink ? "noopener noreferrer" : ""}
                    className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                    aria-label={`${project.title}${project.githubLink ? ' (opens in new tab)' : ''}`}
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {project.title}
                      {project.githubLink && (
                        <ExternalLink className="inline-block h-3.5 w-3.5 ml-1 mb-0.5 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none text-primary/70 group-hover/link:text-primary" />
                      )}
                    </span>
                  </Link>
                </div>
              </h3>
              <p className="mt-2.5 text-sm leading-normal text-muted-foreground">
                {project.description}
              </p>
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Live Demo <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </Link>
              )}
              {project.technologies && project.technologies.length > 0 && (
                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="mr-1.5 mt-2">
                      <Badge 
                        variant="secondary" 
                        className="flex items-center rounded-full bg-primary/10 hover:bg-primary/20 px-3 py-1 text-xs font-medium leading-5 text-primary"
                      >
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

    

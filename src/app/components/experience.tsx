


import { Section } from "./section";

import { Badge } from "../../components/ui/badge";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const experienceData = [
  {
    title: "Intern",
    company: "WizzyBox Pvt.Ltd",
    date: "Feb 2025 - Present",
    description: [
      "Working as a Python Developer, contributing to backend development and automation tasks.",
      "Collaborating with the team to enhance system performance and implement new features.",
      "Utilizing technologies such as Python, Django, SQL.",
    ],
    skills: ["Python", "Django", "SQL", "Backend Development", "Automation"],
    link: null, 
  },
  {
    title: "Intern",
    company: "InternPe",
    date: "Aug 2024 - Sep 2024",
    description: [
      "Developed various Python-based applications including a Pac-Man game, Snake game, and Connect 4 game.",
      "Gained valuable hands-on experience with Python, Pygame, and tkinter, focusing on game mechanics, GUI design, and problem-solving.",
    ],
    skills: ["Python", "Pygame", "Tkinter", "Game Development", "GUI Design"],
    link: "https://github.com/AISHWARYA-KM/PythonProjects",
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="group/list space-y-10 md:space-y-12"> 
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/25 dark:lg:group-hover:bg-accent/5 lg:group-hover:shadow-lg"></div>
            
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:col-span-2 pt-1">
              {exp.date}
            </header>
            
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <div>
                  <Link
                    href={exp.link || "#!"} 
                    target={exp.link ? "_blank" : "_self"}
                    rel={exp.link ? "noopener noreferrer" : ""}
                    className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                    aria-label={`${exp.title} at ${exp.company}${exp.link ? ' (opens in new tab)' : ''}`}
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {exp.title} ·{' '}
                      <span className="inline-block font-semibold">
                        {exp.company}
                        {exp.link && (
                          <ExternalLink className="inline-block h-3.5 w-3.5 ml-1 mb-0.5 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none text-primary/70 group-hover/link:text-primary" />
                        )}
                      </span>
                    </span>
                  </Link>
                </div>
              </h3>
              <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-sm leading-normal text-muted-foreground">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {exp.skills && exp.skills.length > 0 && (
                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                  {exp.skills.map((skill) => (
                    <li key={skill} className="mr-1.5 mt-2">
                      <Badge 
                        variant="secondary" 
                        className="flex items-center rounded-full bg-primary/10 hover:bg-primary/20 px-3 py-1 text-xs font-medium leading-5 text-primary "
                      >
                        {skill}
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

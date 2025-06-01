
import { Section } from "./section";
import { Database, Atom, Braces, Server } from "lucide-react"; 
import Link from "next/link";
import type { SVGProps } from "react";

// Updated PythonIcon to accept props, especially className, for consistent styling.
const PythonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props} // Spread props to allow className and other SVG attributes to be passed
  >
    <title>Python</title>
    <path d="M12.079 2.444c-2.755 0-4.989 2.233-4.989 4.988v2.422H4.668V4.866C4.668 2.18.001 0 .001 0L0 7.377v2.488H4.988V7.31c0-1.308 1.058-2.367 2.367-2.367h4.731c1.308 0 2.367 1.058 2.367 2.367v2.488H19V7.377l-.001-7.377s-4.667 2.18-4.667 4.866v2.489h-2.423v-2.42c0-2.756-2.233-4.99-4.989-4.99zm0 19.112c2.755 0 4.989-2.233 4.989-4.988v-2.422h2.422v4.988c0 2.686 4.667 4.866 4.667 4.866l.001-7.377v-2.488H14.09v2.488c0 1.308-1.058 2.367-2.367 2.367h-4.73c-1.309 0-2.368-1.058-2.368-2.367v-2.488H0v2.488l.001 7.377s4.667-2.18 4.667-4.866v-4.988h2.422v2.422c0 2.755 2.233 4.988 4.989 4.988zM7.096 9.799h9.808v4.404H7.096V9.799z" />
  </svg>
);

const skillsToDisplay = [
  { name: "Python", Icon: PythonIcon, websiteUrl: "https://www.python.org/" },
  { name: "Django", Icon: Server, websiteUrl: "https://www.djangoproject.com/" },
  { name: "JavaScript", Icon: Braces, websiteUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React", Icon: Atom, websiteUrl: "https://react.dev/" },
  { name: "Node.js", Icon: Server, websiteUrl: "https://nodejs.org/" },
  { name: "SQL", Icon: Database, websiteUrl: "https://en.wikipedia.org/wiki/SQL" },
];

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-stretch">
        {skillsToDisplay.map((skill) => (
          <Link
            key={skill.name}
            href={skill.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-lg border bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 aspect-square group"
            aria-label={`Learn more about ${skill.name}`}
          >
            {/* Apply common styling classes to all icons here */}
            <skill.Icon className="h-12 w-12 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
            <span className="text-md font-semibold text-center text-foreground">{skill.name}</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}


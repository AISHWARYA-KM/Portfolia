import type { HTMLAttributes } from 'react';
import { cn } from "../../lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  title: string;
}

export function Section({ id, title, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-12 md:py-16 lg:py-20", className)} // Removed scroll-mt-24 md:scroll-mt-28
      {...props}
    >
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:mb-12">
        <span className="text-primary">{title}</span>
      </h2>
      {children}
    </section>
  );
}

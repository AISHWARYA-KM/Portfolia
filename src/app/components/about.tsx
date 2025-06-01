import { Section } from "./section";

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Hello! I&apos;m Aishwarya, an aspiring software developer with a passion for building innovative solutions and tackling complex problems. I am currently pursuing my Bachelor of Information Science and Engineering at Maharaja Institute of Technology Mysore, expecting to graduate in 2025.
          </p>
          <p className="text-lg leading-relaxed">
            Beyond academics and coding, I enjoy reading novels, nurturing my garden, and exploring new places through travel. I believe these hobbies foster creativity and a well-rounded perspective, which I bring to my work. I&apos;m excited about the opportunity to contribute to meaningful projects and grow within the tech industry.
          </p>
        </div>
    </Section>
  );
}

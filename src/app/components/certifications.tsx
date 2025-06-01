
import { Section } from "../components/section";
import { Card } from "../../components/ui/card";
import { Award } from "lucide-react";
import Link from "next/link";

const certificationsData = [
  {
    name: "Python Programming",
    issuer: "Simplilearn | Skill Up",
    certificateLink: "/certificates/python_programming_certificate.png", // Replace with actual path in /public
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Coursera",
    certificateLink: "/aws.png", // Replace with actual path in /public
  },
  {
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    certificateLink: "/certificates/generative_ai_certificate.png", // Replace with actual path in /public
  },
  {
    name: "Advanced Web Development",
    issuer: "She Codes",
    certificateLink: "/shecodes.png", // Replace with actual path in /public
  },
];

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificationsData.map((cert, index) => (
          <Link key={index} href={cert.certificateLink} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="flex flex-col h-full transition-shadow duration-300 hover:shadow-lg hover:border-primary/50 overflow-hidden">
              {/* Image section removed from here */}
              <div className="flex items-start p-4 flex-grow"> {/* Content below image */}
                <Award className="h-8 w-8 text-primary mr-4 flex-shrink-0 mt-1" aria-hidden="true"/>
                <div>
                  <h3 className="text-md font-semibold text-foreground">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}

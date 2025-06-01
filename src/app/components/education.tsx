import { Section } from "./section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";

const educationData = [
  {
    degree: "Information Science and Engineering",
    institution: "Maharaja Institute of Technology Mysore, Mandya",
    years: "2021 - 2025",
    details: "CGPA: 9.04/10",
  },
  {
    degree: "PUC (PCMB)",
    institution: "JSS PU College for Women, Mysore",
    years: "2019 - 2021",
    details: "Percentage: 88.83%",
  },
  {
    degree: "X CBSE",
    institution: "M C S Public School, Chamarajnagar",
    years: "2018 - 2019",
    details: "Percentage: 78.83%",
  },
];

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {educationData.map((edu, index) => (
          <Card key={index} className="flex flex-col transition-shadow duration-300 hover:shadow-lg hover:border-primary/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">{edu.degree}</CardTitle>
              <CardDescription className="text-muted-foreground">{edu.institution}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground">{edu.years}</p>
              <p className="mt-2 text-sm text-muted-foreground">{edu.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}


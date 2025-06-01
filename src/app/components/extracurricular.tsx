import { Section } from "./section";
import { ListChecks, Code, Users, Activity } from "lucide-react"; // Using appropriate icons

const activitiesData = [
  {
    icon: Code,
    title: "Open Source Contribution",
    description: "Active in GirlScript Summer of Code (GSSOC) with contributions to open-source projects.",
  },
  {
    icon: Users,
    title: "Coding Workshop",
    description: "Participated in a SheCodes workshop, developing foundational skills in HTML, CSS, and JavaScript through hands-on front-end projects.",
  },
  {
    icon: Activity,
    title: "College Sports Representative",
    description: "Represented my college in inter-college Sprint events (100m and 200m races) and helped organize team practice sessions.",
  },
   {
    icon: ListChecks, // Added icon for Hobbies
    title: "Hobbies",
    description: "Reading novels, Gardening, Traveling.",
  },
];

export function Extracurricular() {
  return (
    <Section id="extracurricular" title="Extra-Curricular & Hobbies">
      <div className="grid gap-8 md:grid-cols-2">
        {activitiesData.map((activity, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border bg-card transition-shadow duration-300 hover:shadow-md hover:border-primary/30">
            <activity.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{activity.title}</h3>
              <p className="text-muted-foreground">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

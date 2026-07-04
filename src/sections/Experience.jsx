import { GraduationCap, Code2, Rocket } from "lucide-react";

const journey = [
  {
    icon: GraduationCap,
    date: "Where I Started",
    title: "Learning the Fundamentals",
    description:
      "Began with HTML, CSS, and JavaScript on my own — no bootcamp, no course, just documentation, tutorials, and a lot of trial and error.",
  },
  {
    icon: Code2,
    date: "Where I Grew",
    title: "Moved to React & Beyond",
    description:
      "Picked up React and started building real projects instead of just following tutorials — a weather app, a movie search app, a music player — to actually understand how state, effects, and APIs work together.",
  },
  {
    icon: Rocket,
    date: "Where I Am Now",
    title: "Looking for My First Role",
    description:
      "Currently deepening my skills in TypeScript and Next.js while applying to frontend internships and entry-level roles. Early in my career, but I show up, ship things, and learn fast.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Experience
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 animate-fade-in animation-delay-100 text-secondary-foreground">
            No job title yet,
            <span className="font-serif italic font-normal text-white">
              {" "}
              just a lot of shipped work.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {journey.map((item, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 glow-border animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              <span className="text-xs font-medium tracking-wider uppercase text-secondary-foreground">
                {item.date}
              </span>

              <h3 className="text-lg font-semibold mt-2 mb-2 text-foreground">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

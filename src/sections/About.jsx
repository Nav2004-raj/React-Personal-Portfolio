import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that sounds the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Hi, I'm Navneet Raj — a 21-year-old self-taught Frontend
                Developer based in Delhi, India. I'm currently pursuing my BCA,
                but a lot of my real learning has happened outside the
                classroom: late nights with documentation, tutorials, and
                countless bugs that taught me more than any textbook could. What
                started as curiosity about how websites work has grown into a
                genuine passion for building clean, functional, and
                user-friendly web experiences.
              </p>
              <p>
                My core toolkit includes HTML, CSS, and JavaScript, and I build
                most of my projects using React and Next.js, often styled with
                Tailwind CSS for fast, responsive design. I work with TypeScript
                to write more reliable code, and I use Zustand and Redux for
                state management depending on the complexity of the project. I
                also rely on TanStack for handling data efficiently in my
                applications. Alongside development, I use Git/GitHub for
                version control and deploy my projects on platforms like Vercel
                and Netlify — so I'm comfortable taking a project from an idea
                all the way to a live, shareable product.
              </p>
              <p>
                As a self-taught developer, I've learned to be resourceful,
                patient, and persistent — skills that go hand-in-hand with
                writing good code. I'm always looking to sharpen my craft, take
                on new challenges, and collaborate on projects that push me to
                grow. If you're looking for a frontend developer who's genuinely
                excited about building things and eager to bring value to a
                team, let's connect.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                I believe good frontend development isn't about knowing every
                framework — it's about understanding the problem well enough to
                build something people can actually use without thinking twice
                about it. I'm still early in my journey, and I don't pretend to
                have it all figured out, but I show up, I build, I break things,
                and I fix them — and that process is how I get better every
                single day. My goal isn't to just add another project to my
                portfolio; it's to keep building things that are genuinely
                useful, write code I won't cringe at a year from now, and
                eventually work with a team where I can learn faster than I
                could on my own.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

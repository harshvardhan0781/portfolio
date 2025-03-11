
import { Server, FileCode, Monitor, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  {
    name: "HTML",
    icon: FileCode,
    color: "bg-orange-500/10",
    iconColor: "text-orange-500",
    description: "Semantic markup for structured content"
  },
  {
    name: "CSS",
    icon: Monitor,
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
    description: "Styling and responsive design"
  },
  {
    name: "JavaScript",
    icon: Terminal,
    color: "bg-yellow-500/10",
    iconColor: "text-yellow-500",
    description: "Interactive and dynamic functionality"
  },
  {
    name: "Node.js",
    icon: Server,
    color: "bg-green-500/10",
    iconColor: "text-green-500",
    description: "Server-side JavaScript runtime"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight">My Skills</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I specialize in
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={cn(
                "rounded-lg p-6 transition-all duration-300 border border-border/50",
                "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
                "animate-fade-in glass"
              )}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className={cn(
                "rounded-full w-12 h-12 flex items-center justify-center mb-4",
                skill.color
              )}>
                <skill.icon className={cn("w-6 h-6", skill.iconColor)} />
              </div>
              <h3 className="text-xl font-medium mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scrollUtils";

const projects = [{
  id: 1,
  title: "Minimal Portfolio",
  description: "A clean and minimal portfolio website designed for photographers and visual artists.",
  tags: ["UI/UX", "Web Design", "Development"],
  image: "/placeholder.svg",
  link: "/projects"
}, {
  id: 2,
  title: "E-commerce Dashboard",
  description: "An intuitive dashboard for managing products, orders, and customer data.",
  tags: ["Dashboard", "Analytics", "React"],
  image: "/placeholder.svg",
  link: "/projects"
}, {
  id: 3,
  title: "Mobile Banking App",
  description: "A secure and user-friendly mobile banking application with elegant interactions.",
  tags: ["Mobile", "UI Design", "FinTech"],
  image: "/placeholder.svg",
  link: "/projects"
}];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my recent work across product design, branding, and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className={cn("group relative bg-background rounded-lg overflow-hidden border border-border/50 transition-all duration-300", "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1", "animate-fade-in")} style={{
              animationDelay: `${index * 150}ms`
            }}>
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-full">
                      {tag}
                    </span>)}
                </div>
              </div>
              <Link to={project.link} className="absolute inset-0 w-full h-full focus:outline-none" aria-label={`View ${project.title} project details`}>
                <span className="sr-only">View project</span>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="group">
            <Link to="/projects">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

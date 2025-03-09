
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Minimal Portfolio",
    category: "Web Design",
    description: "A clean and minimal portfolio website designed for photographers and visual artists.",
    tags: ["UI/UX", "Web Design", "Development"],
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    category: "Dashboard",
    description: "An intuitive dashboard for managing products, orders, and customer data.",
    tags: ["Dashboard", "Analytics", "React"],
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile App",
    description: "A secure and user-friendly mobile banking application with elegant interactions.",
    tags: ["Mobile", "UI Design", "FinTech"],
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Health Tracker",
    category: "Mobile App",
    description: "A comprehensive health tracking application with beautiful data visualizations.",
    tags: ["Mobile", "UI/UX", "Health"],
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Corporate Website",
    category: "Web Design",
    description: "Modern website for a corporate client with a focus on brand storytelling.",
    tags: ["Web Design", "Branding", "Development"],
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Travel Planner",
    category: "Web App",
    description: "Interactive travel planning application with maps integration and itinerary builder.",
    tags: ["Web App", "UI Design", "Maps"],
    image: "/placeholder.svg",
  }
];

const categories = ["All", "Web Design", "Mobile App", "Dashboard", "Web App"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Layout>
      <div className="page-wrapper">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my work across various industries and platforms.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-up">
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full",
                filter === category ? "bg-primary text-primary-foreground" : ""
              )}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group bg-background rounded-lg overflow-hidden border border-border/50 transition-all duration-300",
                "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
                "animate-fade-in"
              )}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-secondary rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="mt-4 w-full justify-center group-hover:bg-primary/5 transition-colors duration-300"
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Projects;

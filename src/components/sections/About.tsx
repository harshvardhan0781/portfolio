import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export function AboutSection() {
  return <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative">
              
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/5 -z-10"></div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5 animate-slide-up">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                I'm a multidisciplinary designer and developer with over 5 years of experience creating digital products that are both beautiful and functional.
              </p>
              <p>
                My approach combines minimalist aesthetics with user-centered design principles to create experiences that feel intuitive and elegant.
              </p>
              <p>
                When I'm not designing or coding, you'll find me exploring new technologies, practicing photography, or hiking in the mountains.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild className="group" variant="ghost">
                
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
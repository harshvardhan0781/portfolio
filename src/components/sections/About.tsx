
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="mt-6 space-y-4 text-muted-foreground max-w-2xl mx-auto">
            <p className="text-lg">
              I'm a multidisciplinary designer and developer with over 5 years of experience creating digital products that are both beautiful and functional.
            </p>
            <p className="text-lg">
              My approach combines minimalist aesthetics with user-centered design principles to create experiences that feel intuitive and elegant.
            </p>
            <p className="text-lg">
              When I'm not designing or coding, you'll find me exploring new technologies, practicing photography, or hiking in the mountains.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild className="group" variant="ghost">
              
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

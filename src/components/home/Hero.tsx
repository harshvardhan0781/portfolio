
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/scrollUtils";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      observer.observe(titleRef.current);
    }

    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = "0";
      setTimeout(() => {
        if (subtitleRef.current) observer.observe(subtitleRef.current);
      }, 200);
    }

    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      setTimeout(() => {
        if (ctaRef.current) observer.observe(ctaRef.current);
      }, 400);
    }

    return () => observer.disconnect();
  }, []);

  const handleScrollToProjects = () => {
    scrollToSection("projects");
  };

  const handleScrollToContact = () => {
    scrollToSection("contact");
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-40"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight"
        >
          Creating digital experiences with precision and purpose
        </h1>
        
        <p 
          ref={subtitleRef}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          I'm a designer and developer focused on crafting clean & user-friendly experiences that seamlessly blend form and function.
        </p>
        
        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="rounded-full px-8"
            onClick={handleScrollToProjects}
          >
            View my work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8"
            onClick={handleScrollToContact}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}

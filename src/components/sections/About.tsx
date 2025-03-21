
import { Button } from "@/components/ui/button";


export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="mt-6 space-y-4 text-muted-foreground max-w-2xl mx-auto">
            <p className="text-lg">
            I am a passionate Software Engineer with expertise in full-stack development, AI integration, and scalable system design.
            </p>
            <p className="text-lg">
            I specialize in building efficient, user-friendly applications using modern technologies.
            </p>
            <p className="text-lg">
            With a strong problem-solving mindset, I continuously explore new innovations to create impactful solutions that enhance productivity and user experience.
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


import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="page-wrapper">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight animate-fade-in">About Me</h1>
          
          <div className="mt-8 rounded-xl overflow-hidden animate-slide-up">
            <div className="aspect-[16/9] bg-muted relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            </div>
          </div>
          
          <div className="mt-12 space-y-6 animate-slide-up">
            <p>
              Hello! I'm John Doe, a designer and developer with a passion for creating beautiful, functional digital experiences. With over 5 years of experience in the industry, I've had the opportunity to work on a diverse range of projects from branding and web design to mobile applications and digital products.
            </p>
            
            <p>
              My approach to design is minimalist and purpose-driven. I believe that good design should be invisible — it should enhance the user experience without drawing unnecessary attention to itself. I'm deeply inspired by the design principles of Dieter Rams and the philosophy that "less is more."
            </p>
            
            <h2 className="text-2xl font-bold mt-10">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {["UI/UX Design", "Web Development", "Mobile Design", "Branding", "Design Systems", "Frontend Development"].map((skill) => (
                <div key={skill} className="bg-secondary/50 px-4 py-3 rounded-lg text-center">
                  {skill}
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mt-10">Experience</h2>
            <div className="space-y-6 mt-6">
              <div className="border-l-2 border-primary/30 pl-6 py-2">
                <h3 className="text-xl font-medium">Senior Product Designer</h3>
                <p className="text-muted-foreground">Design Studio Inc. • 2020 - Present</p>
                <p className="mt-2">Leading the design of digital products and experiences for various clients across tech, finance, and healthcare industries.</p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 py-2">
                <h3 className="text-xl font-medium">UI/UX Designer</h3>
                <p className="text-muted-foreground">Tech Innovations • 2018 - 2020</p>
                <p className="mt-2">Designed user interfaces and experiences for mobile and web applications, focusing on usability and accessibility.</p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 py-2">
                <h3 className="text-xl font-medium">Freelance Designer</h3>
                <p className="text-muted-foreground">Self-employed • 2016 - 2018</p>
                <p className="mt-2">Worked with startups and small businesses to create branding, websites, and digital marketing materials.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-10">Education</h2>
            <div className="space-y-4 mt-6">
              <div>
                <h3 className="text-xl font-medium">B.A. in Graphic Design</h3>
                <p className="text-muted-foreground">Design University • 2012 - 2016</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium">UX Design Certification</h3>
                <p className="text-muted-foreground">Design Academy • 2017</p>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-border/50">
              <Button asChild className="group">
                <Link to="/contact">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

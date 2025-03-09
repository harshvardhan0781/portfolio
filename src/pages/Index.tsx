
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/sections/About";
import { ProjectsSection } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";

const Index = () => {
  return (
    <Layout>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </Layout>
  );
};

export default Index;

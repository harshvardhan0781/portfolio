
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/sections/About";
import { ProjectsSection } from "@/components/sections/Projects";
import { BlogSection } from "@/components/sections/Blog";
import { ContactSection } from "@/components/sections/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;

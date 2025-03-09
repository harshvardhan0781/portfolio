
import { Layout } from "@/components/layout/Layout";
import { ContactSection } from "@/components/sections/Contact";

const Contact = () => {
  return (
    <Layout>
      <div className="page-wrapper">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and see how we can work together.
          </p>
        </div>
        
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Contact;

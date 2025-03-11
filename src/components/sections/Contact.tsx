import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-primary/10 p-2 rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="mt-1 text-muted-foreground">hello@johndoe.com</p>
                <a href="mailto:hello@johndoe.com" className="mt-2 inline-flex items-center text-sm text-primary hover:underline">
                  Send an email
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-primary/10 p-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Social Media</h3>
                <p className="mt-1 text-muted-foreground">Connect with me on social platforms</p>
                <div className="mt-3 flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Twitter
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    LinkedIn
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <div>
                <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required className="w-full" />
              </div>
              <div>
                <Input name="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required className="w-full" />
              </div>
              <div>
                <Textarea name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required className="w-full min-h-[120px]" />
              </div>
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>;
}
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scrollUtils";

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Find which section is currently in view
      const sections = navItems.map(item => item.id).concat("hero");
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-4 glass shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
        <button 
          onClick={() => handleNavClick("hero")}
          className="text-lg md:text-xl font-medium tracking-tight transition-opacity duration-300 hover:opacity-80"
        >
          <span className="sr-only">Back to top</span>
          John Doe
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "text-sm font-medium relative transition-colors duration-300",
                "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5",
                "after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300",
                "hover:after:scale-x-100 hover:after:origin-bottom-left",
                activeSection === item.id 
                  ? "text-primary after:bg-primary after:scale-x-100" 
                  : "text-muted-foreground hover:text-foreground after:bg-primary/80"
              )}
            >
              {item.name}
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] glass md:hidden z-40 transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="p-6 space-y-4 flex flex-col">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "py-3 px-4 text-base font-medium rounded-md transition-colors duration-300 text-left",
                activeSection === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

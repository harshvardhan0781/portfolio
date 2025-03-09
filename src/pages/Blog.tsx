
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const posts = [
  {
    id: 1,
    title: "Designing for Accessibility",
    excerpt: "How to create inclusive designs that work for everyone, regardless of ability or circumstance.",
    content: "Accessibility is not just a technical requirement but a fundamental aspect of good design...",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Design"
  },
  {
    id: 2,
    title: "The Art of Minimal UI",
    excerpt: "Exploring the principles of minimalist user interface design and why less is often more.",
    content: "Minimalism in UI design is about removing unnecessary elements and focusing on what truly matters...",
    date: "April 22, 2023",
    readTime: "4 min read",
    category: "UI/UX"
  },
  {
    id: 3,
    title: "Typography in Digital Design",
    excerpt: "Best practices for using typography effectively in web and app design for better readability and hierarchy.",
    content: "Typography is one of the most important elements of digital design, affecting readability, user experience, and brand perception...",
    date: "March 10, 2023",
    readTime: "6 min read",
    category: "Typography"
  },
  {
    id: 4,
    title: "Color Theory for Digital Designers",
    excerpt: "Understanding how to use color effectively in your digital products to create meaning and evoke emotion.",
    content: "Color is a powerful tool in a designer's arsenal, capable of influencing mood, directing attention, and conveying information...",
    date: "February 18, 2023",
    readTime: "7 min read",
    category: "Design"
  },
  {
    id: 5,
    title: "Responsive Design in 2023",
    excerpt: "Modern approaches to building responsive websites that work beautifully across all devices.",
    content: "As device diversity continues to grow, responsive design remains more important than ever...",
    date: "January 5, 2023",
    readTime: "5 min read",
    category: "Development"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="page-wrapper">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Thoughts and insights on design, development, and the creative process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12 animate-slide-up">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search articles..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-10">
          {filteredPosts.map((post, index) => (
            <article 
              key={post.id}
              className={cn(
                "animate-slide-up",
                "border-b border-border/50 pb-10 last:border-0"
              )}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                <span className="bg-secondary/80 px-2 py-1 rounded-full text-xs">
                  {post.category}
                </span>
                <span>•</span>
                <time dateTime={post.date}>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold hover:text-primary transition-colors duration-300">
                <a href="#">{post.title}</a>
              </h2>
              
              <p className="mt-4 text-muted-foreground">
                {post.excerpt}
              </p>
              
              <a 
                href="#" 
                className="mt-4 inline-block text-primary font-medium hover:underline"
              >
                Read more
              </a>
            </article>
          ))}
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

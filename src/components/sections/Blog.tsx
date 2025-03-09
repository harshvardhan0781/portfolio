
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const posts = [
  {
    id: 1,
    title: "Designing for Accessibility",
    excerpt: "How to create inclusive designs that work for everyone.",
    date: "May 15, 2023",
    readTime: "5 min read",
    link: "/blog"
  },
  {
    id: 2,
    title: "The Art of Minimal UI",
    excerpt: "Exploring the principles of minimalist user interface design.",
    date: "April 22, 2023",
    readTime: "4 min read",
    link: "/blog"
  },
  {
    id: 3,
    title: "Typography in Digital Design",
    excerpt: "Best practices for using typography effectively in web and app design.",
    date: "March 10, 2023",
    readTime: "6 min read",
    link: "/blog"
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight">From the Blog</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and perspectives on design, technology, and creative process.
          </p>
        </div>
        
        <div className="space-y-8">
          {posts.map((post, index) => (
            <Link 
              key={post.id}
              to={post.link}
              className={cn(
                "block group",
                "animate-fade-in"
              )}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <article className="p-6 rounded-lg border border-border/50 transition-all duration-300 hover:bg-secondary/30 hover:border-primary/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center md:flex-col md:items-end space-x-4 md:space-x-0 text-sm text-muted-foreground">
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="hidden md:inline">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="group">
            <Link to="/blog">
              Read all articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

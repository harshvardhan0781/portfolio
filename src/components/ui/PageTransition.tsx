
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
      // Scroll to top on page change
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      className={cn(
        "transition-opacity duration-300 ease-in-out min-h-screen",
        {
          "opacity-0": transitionStage === "fadeOut",
          "opacity-100": transitionStage === "fadeIn"
        }
      )}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
}

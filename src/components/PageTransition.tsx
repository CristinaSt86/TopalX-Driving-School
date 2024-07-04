// ./src/components/PageTransition.tsx
import React, { useEffect, useState, ReactNode } from "react";
import "../index.css";

interface PageTransitionProps {
  children: ReactNode;
  duration?: number;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, duration = 500 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);

    return () => {
      clearTimeout(timer);
      setIsVisible(false);
    };
  }, []);

  return (
    <div
      className={`opacity-0 transition-opacity ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default PageTransition;

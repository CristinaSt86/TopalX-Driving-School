import React, { useState, useEffect } from "react";

const AnimatedIcon: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Stop the animation after 2 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className={isAnimating ? "animate-bounce" : ""}>
      {/* Replace with your icon */}
      <svg
        className="w-8 h-8 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5l7 7-7 7"
        ></path>
      </svg>
    </div>
  );
};

export default AnimatedIcon;

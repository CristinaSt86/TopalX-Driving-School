import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-2 z-[10000]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-black/50 text-white rounded-full shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition duration-300"
        >
          <FaChevronUp  size={20} />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;

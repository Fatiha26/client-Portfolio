"use client";
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi"; // Using an arrow-up icon from react-icons

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary-400 text-white shadow-md hover:bg-primary-600 transition-all"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTop;

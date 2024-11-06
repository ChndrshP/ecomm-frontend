import { useState, useEffect } from 'react';
import { ArrowUp } from 'react-feather';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle button visibility on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    )
  );
};

export default ScrollToTop;

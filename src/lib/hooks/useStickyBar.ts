import { useEffect, useState } from 'react';

interface UseStickyBarOptions {
  threshold?: number;
  hideNearFooter?: boolean;
  footerSelector?: string;
}

export const useStickyBar = ({
  threshold = 20,
  hideNearFooter = true,
  footerSelector = '.footer-section'
}: UseStickyBarOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > threshold;

      if (hideNearFooter) {
        const footer = document.querySelector(footerSelector);
        if (footer) {
          const footerTop = footer.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (footerTop <= windowHeight) {
            setIsVisible(false);
            return;
          }
        }
      }

      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, hideNearFooter, footerSelector]);

  return isVisible;
};

export default useStickyBar; 
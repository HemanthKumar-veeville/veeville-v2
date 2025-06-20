import { useEffect, useState, useRef } from 'react';

interface UseCarouselProps {
  items: any[];
  scrollInterval?: number;
  scrollStep?: number;
}

export const useCarousel = ({
  items,
  scrollInterval = 3000,
  scrollStep = 1,
}: UseCarouselProps) => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const originalItemCount = items.length;

  const getCardWidth = () => {
    if (!trackRef.current) return 0;
    const firstCard = trackRef.current.children[0] as HTMLElement;
    if (!firstCard) return 0;
    
    const style = window.getComputedStyle(firstCard);
    const marginRight = parseFloat(style.marginRight) || 0;
    return firstCard.offsetWidth + marginRight;
  };

  const scrollNext = () => {
    const cardWidth = getCardWidth();
    setIndex(prevIndex => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= originalItemCount) {
        return 0;
      }
      return nextIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(scrollNext, scrollInterval);
    return () => clearInterval(interval);
  }, [scrollInterval]);

  const trackStyle = {
    transform: `translateX(-${index * (getCardWidth())}px)`,
    transition: 'transform 0.5s ease',
  };

  return {
    trackRef,
    trackStyle,
    clonedItems: [...items, ...items.map(item => ({ ...item, isClone: true }))],
  };
}; 
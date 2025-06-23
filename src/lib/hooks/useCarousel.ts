import { useEffect, useRef, useState } from 'react';

interface UseCarouselOptions {
  items: Array<any>;  // Update this type based on your items structure
  scrollInterval?: number;
  scrollStep?: number;
}

interface CarouselReturn {
  trackRef: React.RefObject<HTMLDivElement>;
  trackStyle: React.CSSProperties;
  clonedItems: Array<any>;  // Update this type based on your items structure
}

export const useCarousel = ({
  items,
  scrollInterval = 3000,
  scrollStep = 1
}: UseCarouselOptions): CarouselReturn => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackStyle, setTrackStyle] = useState<React.CSSProperties>({});
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const [clonedItems, setClonedItems] = useState<Array<any>>([]);

  useEffect(() => {
    // Create cloned items array for infinite scroll
    const clonedArray = [...items, ...items];
    setClonedItems(clonedArray);

    if (!trackRef.current) return;

    const track = trackRef.current;
    let index = 0;

    const getCardWidth = () => {
      if (!track.children[0]) return 0;
      const firstCard = track.children[0] as HTMLElement;
      const style = window.getComputedStyle(firstCard);
      const marginRight = parseFloat(style.marginRight) || 0;
      return firstCard.offsetWidth + marginRight;
    };

    const scrollNext = () => {
      const cardWidth = getCardWidth();
      if (cardWidth === 0) return;

      index++;
      const newTransform = `translateX(-${index * cardWidth}px)`;
      setTrackStyle({ transform: newTransform, transition: 'transform 0.5s ease' });

      if (index >= items.length) {
        setTimeout(() => {
          index = 0;
          setTrackStyle({ transform: 'translateX(0)', transition: 'none' });
        }, 500);
      }
    };

    progressInterval.current = setInterval(scrollNext, scrollInterval);

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [items, scrollInterval, scrollStep]);

  return { trackRef, trackStyle, clonedItems };
};

export default useCarousel; 
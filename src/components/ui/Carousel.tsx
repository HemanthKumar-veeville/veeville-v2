import React from "react";
import styles from "../../pages/Work/Work.module.css";
import { Slide } from "../../pages/Work/types";

interface CarouselProps {
  slides: Slide[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  currentSlide,
  onSlideChange,
}) => {
  return (
    <section className={styles.designCarousel}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.dcSlide} ${
            index === currentSlide ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
      <div className={styles.dcText}>
        Design
        <br />
        <span>for life.</span>
      </div>
      <div className={styles.dcDots}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dcDot} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => onSlideChange(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;

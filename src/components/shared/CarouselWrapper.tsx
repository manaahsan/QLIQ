import Slider from "react-slick";
import type { ReactNode } from "react";

interface CarouselWrapperProps {
  children: ReactNode;
  slidesToShow?: number;
  arrows?: boolean;
  dots?: boolean;
  autoplay?: boolean;
  nextArrow?: ReactNode;
  prevArrow?: ReactNode;
  className?: string;
  ref?: React.Ref<Slider>;
}

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({
  children,
  slidesToShow = 2,
  arrows = true,
  dots = false,
  autoplay = false,
  nextArrow,
  prevArrow,
  className = "",
  ref
}) => {
  const settings = {
    dots,
    infinite: true,
    autoplay,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow,
    slidesToScroll: 1,
    arrows,
    nextArrow,
    prevArrow,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={`w-full mx-auto ${className}`}>
      <Slider ref={ref} {...settings as import("react-slick").Settings}>{children}</Slider>
    </section>
  );
};

export default CarouselWrapper;

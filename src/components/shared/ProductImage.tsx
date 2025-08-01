import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";

const images = [
  "/assets/images/shoe.png",
  "/assets/images/shoe.png",
  "/assets/images/shoe.png",
  "/assets/images/shoe.png",
  "/assets/images/shoe.png",
];

export default function ProductImage() {
  const {getImageByProduct} = useAppContext();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { id } = useParams();

  const goToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (slider && slider.children.length > 0) {
      const slideWidth = slider.children[0].clientWidth;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    const handleResize = () => goToSlide(currentSlide);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       nextSlide();
  //     }, 3000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="flex items-center border rounded-xl">
      <button
        onClick={prevSlide}
        className="md:p-2 p-1 md:mr-6 mr-2"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div className="w-full max-w-3xl overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          ref={sliderRef}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src={getImageByProduct(id)} // replace with real URLs
              className="w-full flex-shrink-0"
              alt={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="md:p-2 p-1 md:ml-6 ml-2"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}

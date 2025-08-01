import { useRef } from "react";
import Slider from "react-slick";

// components
import CarouselWrapper from "./CarouselWrapper";

// helper
import { Blog } from "@/lib/helper";

export const Blogs = () => {
  const newStoreRef = useRef<Slider | null>(null)
  return (
    <div className="px-0 md:px-16 lg:px-6 xl:16 mt-14 mx-auto">
      <h1 className="text-[24px] md:text-[40px] font-semibold text-center">
        Blogs
      </h1>

      <CarouselWrapper
        slidesToShow={3}
        className="mt-10"
        ref={newStoreRef}
        dots={true}
      >
        {Blog?.map((categories) => (
          <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
            <img src={categories.image} alt="image" />
            <p className="mt-1 text-[32px] font-semibold">{categories.name}</p>
          </div>
        ))}
      </CarouselWrapper>
    </div>
  );
};

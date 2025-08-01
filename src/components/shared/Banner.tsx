
// components
import CarouselWrapper from "./CarouselWrapper";
import { NextArrow, PrevArrow } from "./SlideButton";

// helper
import { banners } from "@/lib/helper";


export const Banner = () => {
  return (
    <CarouselWrapper
      slidesToShow={2}
      autoplay
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
    >
      {banners.map((banner, index) => (
        <div key={index} className="px-6 mt-14">
          <div className="relative overflow-hidden rounded-xl">
            <img src={banner.image} className="w-full rounded-xl" />
            <div className="absolute left-6 bottom-6 text-white">
              <h2 className="text-2xl font-bold">{banner.title}</h2>
              <p className="text-sm">{banner.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </CarouselWrapper>
  );
};

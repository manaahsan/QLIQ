import { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

import CarouselWrapper from "./CarouselWrapper";
import { otherCategory } from "@/lib/helper";
import { Card } from "@/components/shared/Card";

export const OtherCategory = () => {
  const OtherCategorySliderRef = useRef<Slider | null>(null);

  const goNext = () => OtherCategorySliderRef.current?.slickNext();
  const goPrev = () => OtherCategorySliderRef.current?.slickPrev();
  return (
    <div className="px-0 md:px-16 lg:px-6 xl:16 mt-14 mx-auto">
      <div className="flex justify-between">
        <h1 className="text-[24px] md:text-[40px] font-semibold">
         Other Category
        </h1>
        <div className="flex gap-4 px-6">
          <button onClick={goPrev} className="p-2 bg-white rounded-full h-fit">
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={goNext}
            className="p-2 bg-[#0082FF3D] text-primary rounded-full  h-fit"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <CarouselWrapper
        slidesToShow={6}
        className="mt-10"
        ref={OtherCategorySliderRef}
      >
        {otherCategory?.map((categories) => (
          <Card data={categories} />
        ))}
      </CarouselWrapper>
    </div>
  );
};

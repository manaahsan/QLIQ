import { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// components

// ui
import { Button } from "@/components/ui/button";

import CarouselWrapper from "./CarouselWrapper";
// import { influencers } from "@/lib/helper";

// import { InfluencerCard } from "./InfluencerCard";

export const Influencer = () => {
  const influencerRef = useRef<Slider | null>(null);

  const goNext = () => influencerRef.current?.slickNext();
  const goPrev = () => influencerRef.current?.slickPrev();
  return (
    <div className="mt-14">
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] md:text-[40px] font-semibold px-6">
          New Influencers on QLIQ
        </h1>
        <div className="flex gap-4 px-6">
          <Button className="bg-white rounded-full border border-primary text-black">
            Upgrade
          </Button>
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
        slidesToShow={4}
        className="mt-10 space-x-4"
        ref={influencerRef}
      >
        ''
        {/* {influencers?.map((influencer) => (
          <InfluencerCard />
        ))} */}
      </CarouselWrapper>
    </div>
  );
};

import { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

import CarouselWrapper from "./CarouselWrapper";
import { products } from "@/lib/helper";
import { Product } from "./Product";
import { Button } from "../ui/button";

type Props = {
  title?: string;
  upgrade?: boolean;
  image?: string;
  redirectTo?: string;
};

export const BestSeller = ({
  title,
  upgrade = false,
  image,
  redirectTo,
}: Props) => {
  const sliderRef = useRef<Slider | null>(null);

  const goNext = () => sliderRef.current?.slickNext();
  const goPrev = () => sliderRef.current?.slickPrev();
  return (
    <div className="px-0 md:px-16 lg:px-6 xl:16 mt-14 mx-auto">
      <div className="flex justify-between">
        <h1 className="text-[24px] md:text-[40px] font-semibold">
          {title || "Our Bestsellers"}
        </h1>
        <div className="flex gap-4 px-6">
          {upgrade && (
            <Button className="bg-white rounded-full border border-primary text-black">
              Upgrade
            </Button>
          )}

          <button onClick={goPrev} className="p-2 bg-[#0082FF3D]/50 rounded-full h-fit">
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

      <CarouselWrapper slidesToShow={4} className="mt-6" ref={sliderRef}>
        {products?.map((product) => (
          <Product
            product={product}
            image={image || "/assets/images/product.svg"}
            redirectTo={redirectTo}
          />
        ))}
      </CarouselWrapper>
    </div>
  );
};

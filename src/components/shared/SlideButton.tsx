import { ChevronLeft, ChevronRight } from "lucide-react";
export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      onClick={onClick}
    >
      <ChevronRight className="text-black w-5 h-5 text-primary" />
    </div>
  );
};

export const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      onClick={onClick}
    >
      <ChevronLeft className="text-black w-5 h-5 text-primary" />
    </div>
  );
};

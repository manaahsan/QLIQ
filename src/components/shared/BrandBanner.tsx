import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export const BrandBanner = () => {
  const navigate = useNavigate();
  return (
    <section className="px-6 md:px-16 lg:px-6 xl:16 mx-auto">
      <div className="relative">
        <img
          src="/assets/images/brand-banner.jpg"
          alt="brand-banner"
          className=" h-80 w-full rounded-xl"
        />
        <div className="absolute left-4 top-4 text-white">
          <Button
            onClick={() => navigate(-1)}
            className="bg-white text-primary rounded-full hover:!bg-white"
          >
            Back
          </Button>
        </div>
        <div className="absolute left-6 bottom-24 space-y-6 md:bottom-6">
          <h1 className="text-white text-[32px] font-semibold">NIKE</h1>
          <p className="max-w-md text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="absolute right-6 bottom-6">
          <Button className="bg-white text-black rounded-full hover:!bg-white">
            Follow
          </Button>
        </div>
      </div>
    </section>
  );
};

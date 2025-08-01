import { products } from "@/lib/helper";
import { Product } from "./Product";
import { useNavigate } from "react-router-dom";

type Props = {
  title?: string;
  image?: string;
  redirectTo?: string;
};

export const ProductFilter = ({ title, image, redirectTo }: Props) => {
  const navigate = useNavigate();


  const handleClick = () => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={"my-14 px-0 md:px-16 lg:px-6 xl:16 mt-14 mx-auto"}
    >
      <div className="flex justify-between">
        <h1 className="text-[24px] md:text-[40px] font-semibold">
          {title || "Restaurent"}
        </h1>
        <div className="flex gap-4 px-6">
          <button className="px-6 py-2 rounded-full h-fit bg-[#0082FF3D] text-primary">
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 text-sm mt-4 md:grid-cols-4">
        {products?.map((product) => (
          <Product
            product={product}
            image={image || "/assets/images/restaurant.svg"}
            redirectTo="/product-details/restaurant"
          />
        ))}
      </div>
    </div>
  );
};

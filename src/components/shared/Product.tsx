import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  product: any;
  image?: string;
  redirectTo?: string;
  onClick?: () => void;
};

export const Product = ({ product, image, redirectTo, onClick }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (redirectTo) {
      navigate(redirectTo);
      window.scrollTo(0,0);
    }
  };
  return (
    product && (
      <div onClick={handleClick} key={product.id} className="px-4 mt-4">
        <div className="relative">
          <img
            src={image || "/assets/images/product.svg"}
            className="w-full rounded-xl mb-2"
            alt="product-img"
          />
          <div className="absolute left-3 top-3 text-white bg-primary py-1 px-3 rounded-full text-sm">
            -$500 on your first order
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm mt-4">
          <div className="font-medium col-span-2">{product.title}</div>

          <div className="text-right   flex justify-end">
            <div className="bg-[#0082FF3D] text-primary px-2 py-1 rounded h-fit">
              {product.time}
            </div>
          </div>
          <div className="font-semibold col-span-2">{product.price}</div>

          <div className="flex  justify-end gap-1">
            <Star className="w-4 h-4" fill="#0082FF" color="#0082FF" />
            <span className="text-primary">{product.rating}</span>
          </div>
        </div>
      </div>
    )
  );
};

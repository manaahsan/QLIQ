import { useParams } from "react-router-dom";

import ProductImage from "@/components/shared/ProductImage";
import ProductDetails from "@/components/shared/ProductDetails";
import { BestSeller } from "@/components/shared/BestSeller";
import { ProductFaq } from "@/components/shared/ProductFaq";
import { ProductDescription } from "@/components/shared/ProductDescription";
import { ProductBanner } from "@/components/shared/ProductBanner";
import { useAppContext } from "@/context/AppContext";

export const ProductDetailsPage = () => {
  const { getImageByProduct } = useAppContext();
  const { id } = useParams();
  return (
    <section className="px-6 md:px-16 lg:px-6 xl:16 mt-14 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <ProductImage />
        <ProductDetails />
      </div>
      <BestSeller
        title="Related Products"
        redirectTo={`/product-details/${id}`}
        image={getImageByProduct(id)}
      />
      <ProductFaq />
      <ProductDescription />
      <ProductBanner />
      <div className="mb-14">
        <BestSeller
          title="Customer Also Liked These Products"
          redirectTo={`/product-details/${id}`}
          image={getImageByProduct(id)}
        />
      </div>
    </section>
  );
};

import CategorySection from "@/components/shared/Category";
import { ProductFilter } from "@/components/shared/ProductFilter";
import { BestSeller } from "@/components/shared/BestSeller";

export const Stores = () => {
  return (
    <div className="overflow-x-clip px-6 md:px-16 lg:px-6 xl:16 mt-14 mx-auto">
      <CategorySection />
      <BestSeller title="Fastest Delivery" image="/assets/images/nike.svg"  redirectTo="/product-details/nike" />
      <ProductFilter title="stores"  image="/assets/images/nike.svg" redirectTo="/store/1" />
    </div>
  );
};

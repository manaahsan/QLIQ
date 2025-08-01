// components
import { BestSeller } from "@/components/shared/BestSeller";
import CategorySection from "@/components/shared/Category";
import { ProductFilter } from "@/components/shared/ProductFilter";
import { TopBrand } from "@/components/shared/TopBrand";

export const ECommerce = () => {
  return (
    <section className="px-6 md:px-16 lg:px-6 xl:16 mt-14 mx-auto">
      <CategorySection />
      <BestSeller redirectTo="/product-details/smartphones" />
      <BestSeller
        title="New Arrivals"
        redirectTo="/product-details/restaurant"
      />
      <TopBrand />
      <ProductFilter
        title="SmartPhones"
        image="/assets/images/product.svg"
        redirectTo="/product-details/smartphones"
      />
    </section>
  );
};

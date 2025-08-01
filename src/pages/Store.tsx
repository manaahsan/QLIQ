import { BestSeller } from "@/components/shared/BestSeller";
import { BrandBanner } from "@/components/shared/BrandBanner";
import { InfoBanner } from "@/components/shared/InfoBanner";
import { PlanSelection } from "@/components/shared/PlanSelection";

export const Store = () => {
  return (
    <div className="overflow-x-clip">
      <BrandBanner />
      <InfoBanner />
      <PlanSelection />
      <div className="px-6 md:px-16 lg:px-6 xl:16 mt-14 mx-auto">
        <BestSeller image="/assets/images/shoe.png" redirectTo="/product-details/nike" />
        <BestSeller title="Offers For You" image="/assets/images/shoe.png" redirectTo="/product-details/nike" />
        <div className="mb-14">
          <BestSeller title="New Arrivals" image="/assets/images/shoe.png"  redirectTo="/product-details/nike"/>
        </div>
      </div>
    </div>
  );
};

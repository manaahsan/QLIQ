import { Banner } from "@/components/shared/Banner";
import CategorySection from "@/components/shared/Category";
import { BestSeller } from "@/components/shared/BestSeller";
import { OtherCategory } from "@/components/shared/OtherCategory";
import { AdBanner } from "@/components/shared/AdBanner";
import { TopBrand } from "@/components/shared/TopBrand";
import { Blogs } from "@/components/shared/Blogs";
import { Faq } from "@/components/shared/Faq";

export const Home = () => {
  return (
    <div className="overflow-x-clip px-6 md:px-16 lg:px-6 xl:16 mt-14 mx-auto">
      <CategorySection />
      <Banner />
      <BestSeller redirectTo="/product-details/smartphones" />
      <OtherCategory />
      <AdBanner image={"/assets/images/ad-banner/1.svg"} />
      <BestSeller title="Offer For You"  redirectTo="/product-details/smartphones"/>
      <BestSeller title="Special Deals For QLIQ+" upgrade={true} redirectTo="/product-details/smartphones" />
      <AdBanner image={"/assets/images/ad-banner/2.svg"} />
      <TopBrand />
      {/* <FeaturedOffer /> */}
      <TopBrand title="Top Stores" />
      <AdBanner image={"/assets/images/ad-banner/3.svg"} />
      <TopBrand title="New Stores on QLIQ" />

      <AdBanner image={"/assets/images/ad-banner/3.svg"} />
      <Faq />
      <Blogs />
      <AdBanner image={"/assets/images/ad-banner/4.svg"} />
    </div>
  );
};

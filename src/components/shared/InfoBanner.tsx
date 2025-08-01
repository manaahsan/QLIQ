export const InfoBanner = () => {
  return (
    <section className="bg-[#0082FF3D] mt-6 p-3">
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-center">
        <BannerItem>Choose Location</BannerItem>
        <Separator />
        <BannerItem>Open Until 18.00</BannerItem>
        <Separator />
        <BannerItem>Min. Order $10,000</BannerItem>
        <Separator />
        <BannerItem>4.0 Rating</BannerItem>
      </div>
    </section>
  );
};

const BannerItem = ({ children }: { children: React.ReactNode }) => (
  <p className="text-primary font-semibold text-xs sm:text-base whitespace-nowrap">
    {children}
  </p>
);

const Separator = () => (
  <p className="text-primary font-semibold text-xs sm:text-base select-none">|</p>
);

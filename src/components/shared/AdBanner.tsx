
export const AdBanner = ({image}: any) => {
  return (
    <section className="px-6 md:px-16 lg:px-6 xl:16 mt-14 mx-auto">
      <img src={image} alt="ad-banner" className="w-full" />
    </section>
  );
};

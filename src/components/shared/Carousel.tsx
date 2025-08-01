import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./SlideButton";

const banners = [
  {
    image: "/assets/images/carousel/ps5-banner.svg",
    title: "PS5 Pro",
    subtitle: "WITNESS PLAY UNLEASHED",
  },
  {
    image: "/assets/images/carousel/galaxy-banner.svg",
    title: "Galaxy S25 Series",
    subtitle: "Galaxy AI",
  },
];

const BannerCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full mx-auto px-6 mt-14">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="px-6">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute left-6 bottom-6 text-white">
                <h2 className="text-2xl font-bold">{banner.title}</h2>
                <p className="text-sm">{banner.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BannerCarousel;

  import ColorSelector from "@/components/shared/ColorSelector";
  import SizeSelector from "@/components/shared/SizeSelector";
  import QuantitySelector from "@/components/shared/QuantitySelector";
  import { Star } from "lucide-react";
  import { useAppContext } from "@/context/AppContext";
  import { useParams } from "react-router-dom";

  export default function ProductDetails() {
    const { count, setCount } = useAppContext();
    const { addToCart, toast } = useAppContext();
    const { id } = useParams();
    const shoe = {
      id: "airforce-01",
      name: "Airforce 01",
      brand: "Nike",
      originalPrice: 1600,
      price: 1200,
      image: "/assets/images/product.svg",
      quantity: count,
    };
    const smartphones = {
      id: "samsung-s24",
      name: "Samsung Galaxy S24",
      brand: "Samsung",
      originalPrice: 3500,
      price: 2999,
      image: "/assets/images/product.svg",
      quantity: count,
    };

    const restaurant = {
      id: "kfc-bucket",
      name: "KFC Family Bucket",
      brand: "KFC",
      originalPrice: 920,
      price: 799,
      image: "/assets/images/restaurant.svg",
      quantity: count,
    };

    const itemsByCategory: Record<string, typeof shoe> = {
      shoe,
      smartphones,
      restaurant,
    };

    const handleAddToCart = (category: string) => {
      const item = itemsByCategory[category];
      if (!item) {
        toast.error(`No item found for category "${category}"`);
        return;
      }
      addToCart(item as any);
      setCount(1);
    };
    return (
      <div className="space-y-4">
        <div className="space-y-2 md:space-y-0">
          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold tex-black">Nike</p>
            <p className="text-sm font-semibold text-primary">
              1000+ Bought in past month
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-[20px]  font-semibold text-black md:text-[40px]">
              Airforce 01
            </h1>
            <p className="text-sm font-semibold text-primary">
              Available in 30 Minutes
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-base font-semibold text-black">In Stock</p>
            <div className=" flex items-center gap-4 max-w-sm">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="#0082FF" color="#0082FF" size={16} />
              ))}
            </div>
          </div>
        </div>
        <hr />

        <div className="flex items-center gap-3">
          <span className="line-through text-gray-400 text-sm">AED 1,600</span>
          <span className="text-xl font-semibold text-black">AED 1,200</span>
          <span className="text-green-500 text-sm font-medium">25% Off</span>
        </div>

        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
          molestie.
        </p>
        <hr />

        <ColorSelector />
        {id === "nike" && <SizeSelector />}

        <QuantitySelector />

        <div className="grid grid-cols-2 justify-between gap-4">
          <button
            type="button"
            className="bg-blue-200 text-primary px-6 py-3 rounded-full font-medium"
            onClick={() => handleAddToCart(id as string)}
          >
            Add To Cart
          </button>
          <button className="border border-primary px-6 py-3 rounded-full">
            Add To Favourite
          </button>
        </div>

        <div className="mt-6 space-y-2 text-sm text-gray-700">
          <p className="flex gap-2 items-center">
            <img src={"/assets/images/social/faq.svg"} alt="ask" /> Ask a question
          </p>
          <p className="flex gap-2 items-center">
            <img src={"/assets/images/social/return.svg"} alt="return" /> Delivery
            Return
          </p>
          <p className="flex gap-2 items-center">
            {" "}
            <img src={"/assets/images/social/star.svg"} alt="star" /> 1 Year
            Warranty
          </p>
        </div>
      </div>
    );
  }

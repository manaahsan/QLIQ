import { useAppContext } from "@/context/AppContext";

export default function SizeSelector() {
  const sizes = ["04", "05", "06", "07", "08"];
  const { selectedSize, setSelectedSize } = useAppContext();

  return (
    <div className="flex items-center gap-2 mt-2 flex-wrap">
      <span className="text-base font-semibold">Size:</span>
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`px-3 py-1 rounded-full text-sm border transition-all duration-200 ${
            selectedSize === size
              ? "bg-blue-500 text-white border-blue-500"
              : "border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

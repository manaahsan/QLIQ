import { useAppContext } from "@/context/AppContext";

export default function ColorSelector() {
  const { selectedColor, setSelectedColor } = useAppContext();

  const colors = [
    { name: "White", bg: "bg-primary", text: "text-white" },
    { name: "Black", bg: "bg-primary", text: "text-white" },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-base font-semibold">Color:</span>
      {colors.map((color) => {
        const isSelected = selectedColor === color.name;
        return (
          <button
            key={color.name}
            onClick={() => setSelectedColor(color.name)}
            className={`px-4 py-1 rounded-full text-sm transition-colors duration-200 border border-primary  ${
              isSelected ? color.bg + " " + color.text : "bg-white text-black"
            }`}
          >
            {color.name}
          </button>
        );
      })}
    </div>
  );
}

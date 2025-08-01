import { Plus, Minus } from "lucide-react";

// context
import { useAppContext } from "@/context/AppContext";

export default function QuantitySelector() {
  const { count, setCount } = useAppContext();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4 mt-4">
        <button
          className="p-1.5 rounded-full border text-xl"
          onClick={() => setCount((prev) => Math.max(1, prev - 1))}
        >
          <Minus size={16} />
        </button>
        <span className="text-lg">{count}</span>
        <button
          className="p-1.5 rounded-full border text-xl"
          onClick={() => setCount((prev) => prev + 1)}
        >
          <Plus size={16} />
        </button>
      </div>
      <div className="flex justify-between items-center gap-4">
        <p className="text-base font-semibold">Shares:</p>
        <img src="/assets/images/social/insta.svg" alt="insta" />
        <img src="/assets/images/social/facebook.svg" alt="face" />
        <img src="/assets/images/social/twitter.svg" alt="x" />
        <img src="/assets/images/social/whatsapp.svg" alt="whatsapp" />
      </div>
    </div>
  );
}

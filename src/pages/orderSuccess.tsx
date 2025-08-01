import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";

export default function OrderSuccess() {
  const {setCart} = useAppContext();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <CheckCircle2 className="mx-auto text-green-500 w-16 h-16 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Order Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <div className="bg-[#0082FF3D] rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-primary">Order ID</p>
          <p className="font-medium mb-2">#123456789</p>
          <p className="text-sm text-primary">Estimated Delivery</p>
          <p className="font-medium">Aug 10 - Aug 12, 2025</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            className="w-full bg-[#0082FF3D] text-primary hover:bg-[#0082FF3D]"
            onClick={() => {
              setCart([]);
              navigate("/");
            }}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}

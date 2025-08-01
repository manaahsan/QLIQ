import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Percent, Loader2 } from "lucide-react";

type OrderSummaryCardProps = {
  shippingCost?: number;
};

export const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({
  shippingCost = 0,
}) => {
  const navigate = useNavigate();
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const { cart, isLoading, setIsLoading, toast, formState, emirate } = useAppContext();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal - discountAmount + shippingCost;
  const onPlaceOrder = () => {
    if (cart.length === 0) {
      toast.error("Cart is empty");
      ("Cart is empty");
      return;
    }

    if (!formState) {
      toast.error("Please fill all the Address details");
      return;
    }
    if (emirate === undefined) {
      toast.error("Please select your location");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/order-success");
    }, 3500);
  };
  return (
    <div className="w-full max-w-xl bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 shadow">
      {cart.map((item) => (
        <>
          <div
            key={item.id + item.color + item.size}
            className="flex justify-between items-end"
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="">Nike</div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm">Qty: {item.quantity}</div>
                </div>
              </div>
            </div>

            <div className="font-semibold">
              AED {item.price * item.quantity}
            </div>
          </div>
          <Select onValueChange={(value) => setDiscountAmount(Number(value))}>
            <SelectTrigger className="w-full flex items-center justify-between rounded-xl border p-5">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-gray-100 rounded-md">
                  <Percent size={16} />
                </div>
                <SelectValue placeholder="Apply coupon" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Coupons</SelectLabel>
                <SelectItem value="500">OFF500</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </>
      ))}

      <div className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <div className="text-base text-black font-semibold">Subtotal</div>
          <div className="font-medium">AED {subtotal}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-base text-black font-semibold">Shipping</div>
          <div className="font-medium">
            {shippingCost === 0 ? "FREE" : `AED ${shippingCost}`}
          </div>
        </div>
        {discountAmount > 0 && (
          <div className="flex justify-between">
            <div className="text-primary text-base font-semibold">Discount</div>
            <div className="text-primary font-medium">
              − AED {discountAmount}
            </div>
          </div>
        )}
        <div className="flex justify-between font-semibold">
          <div className="text-base text-black font-semibold">Order Total</div>
          <div className="text-base text-black font-semibold">AED {total}</div>
        </div>
      </div>

      <Button
        onClick={onPlaceOrder}
        className="mt-4 w-full py-5 rounded-full bg-[#0082FF3D] font-medium text-primary hover:bg-[#0082FF3D] transition flex gap-2 items-center"
      >
        {isLoading && <Loader2 className="animate-spin" />}
        Place Order
      </Button>
    </div>
  );
};

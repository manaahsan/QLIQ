import React, { useState } from "react";
import { MapPin } from "lucide-react";
import PillButton from "./PillButton";
import { OrderSummaryCard } from "@/components/shared/OrdersumaryCard";
import { useNavigate } from "react-router-dom";

// ui
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UserInformation from "./UserInformation";
import { useAppContext } from "@/context/AppContext";

export const CheckoutSection: React.FC = () => {
  const { emirate, setEmirate } = useAppContext();
  const [mode, setMode] = useState<"delivery" | "pickup">("delivery");
  const [payment, setPayment] = useState<"cod" | "card" | "online">("cod");
  const naviagte = useNavigate();

  return (
    <section className="bg-white px-8 py-10">
      <div className="">
        <button
          onClick={() => naviagte(-1)}
          className="inline-flex items-center px-5 py-2 border border-blue-400 rounded-full text-sm mb-6"
        >
          Back
        </button>
        <h1 className="text-4xl font-bold mb-2">CHECKOUT</h1>
        <p className="text-gray-600 mb-8 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-10">
        <div className="flex-1 col-span-5 md:col-span-3">
          <div className="flex gap-4 mb-8">
            <PillButton
              active={mode === "delivery"}
              onClick={() => setMode("delivery")}
            >
              Delivery
            </PillButton>
            <PillButton
              active={mode === "pickup"}
              onClick={() => setMode("pickup")}
            >
              Pickup
            </PillButton>
          </div>

          <div className="mb-8 space-y-6">
            <h2 className="text-2xl font-semibold mb-4 ">Where?</h2>
            <Select onValueChange={(val) => setEmirate(val)} value={emirate}>
              <SelectTrigger className="w-full flex items-center justify-between rounded-xl border p-7">
                <div className="flex items-center gap-2">
                  <MapPin size={24} color="black" />
                  <SelectValue placeholder="Select Emirates" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Emirates</SelectLabel>
                  <SelectItem value="Abu Dhabi">Abu Dhabi</SelectItem>
                  <SelectItem value="Dubai">Dubai</SelectItem>
                  <SelectItem value="Sharjah">Sharjah</SelectItem>
                  <SelectItem value="Ajman">Ajman</SelectItem>
                  <SelectItem value="Umm Al Quwain">Umm Al Quwain</SelectItem>
                  <SelectItem value="Ras Al Khaimah">Ras Al Khaimah</SelectItem>
                  <SelectItem value="Fujairah">Fujairah</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <UserInformation />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">When?</h2>
            <div className="border border-blue-500 rounded-full px-6 py-3 flex justify-between items-center">
              <div className="font-medium">Standard</div>
              <div className="text-sm text-gray-600">30 - 40 Min</div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
            <div className="flex gap-4">
              <PillButton
                active={payment === "cod"}
                onClick={() => setPayment("cod")}
              >
                Cash on Delivery
              </PillButton>
              {/* <PillButton
                active={payment === "card"}
                onClick={() => setPayment("card")}
              >
                Credit/Debit Card
              </PillButton>
              <PillButton
                active={payment === "online"}
                onClick={() => setPayment("online")}
              >
                Online Payment
              </PillButton> */}
            </div>
          </div>
        </div>

        <div className="w-full col-span-5 md:col-span-2">
          <OrderSummaryCard />
        </div>
      </div>
    </section>
  );
};

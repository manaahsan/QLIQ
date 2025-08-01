import { useState } from "react";
import { Percent, Star } from "lucide-react";
import clsx from "clsx";

export const PlanSelection = () => {
  const [selected, setSelected] = useState<"discount" | "premium" | null>(
    "premium"
  );

  return (
    <section className="px-6">
      <div className="flex flex-col justify-start items-center gap-4 md:flex-row  mt-6 w">
        <div
          onClick={() => setSelected("discount")}
          className={clsx(
            "cursor-pointer flex gap-4 items-center border border-black rounded-xl p-4 border border-primary transition-colors duration-200 w-full md:w-sm",
            {
              "bg-primary text-white": selected === "discount",
              "text-black": selected !== "discount",
            }
          )}
        >
          <Percent
            size={32}
            className={selected === "discount" ? "white" : "black"}
            fill={selected === "discount" ? "white" : "black"}
          />
          <div></div>
          <div>
            <p>0 so'm delivery fees for 14 days</p>
            <p>Learn More</p>
          </div>
        </div>
        <div
          onClick={() => setSelected("premium")}
          className={clsx(
            "cursor-pointer flex gap-4 items-center border border-black rounded-xl p-4 border border-primary transition-colors duration-200 w-full md:w-sm",
            {
              "bg-primary text-white": selected === "premium",
              "text-black": selected !== "premium",
            }
          )}
        >
          <Star
            size={32}
            className={selected === "premium" ? "text-white" : "text-black"}
            color={selected === "premium" ? "white" : "black"}
            fill={selected === "premium" ? "white" : "black"}
          />
          <div>
            <p>Get 0 delivery fee & more!</p>
            <p>Try 30 Days for Free!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

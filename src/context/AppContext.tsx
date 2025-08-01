import type { AppContextValue, CartItem } from "@/lib/types";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext<AppContextValue | null>(null);

export const AppContextProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setISOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedColor, setSelectedColor] = useState("White");
  const [selectedSize, setSelectedSize] = useState("04");
    const [emirate, setEmirate] = useState<string | undefined>(undefined);
  const [formState, setFormState] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (ci) =>
          ci.id === item.id && ci.color === item.color && ci.size === item.size
      );

      if (existingIndex !== -1) {
        return prev.map((ci, idx) =>
          idx === existingIndex
            ? { ...ci, quantity: ci.quantity + item.quantity }
            : ci
        );
      }
      return [...prev, item];
    });

    toast.success("Added to cart");
  };

  const getImageByProduct = (productId: string | undefined) => {
    switch (productId) {
      case "nike":
        return "/assets/images/nike.svg";
      case "smartphones":
        return "/assets/images/product.svg";
      case "restaurant":
        return "/assets/images/restaurant.svg";
      default:
        return "/assets/images/product.svg";
    }
  };

  const value = {
    toast,
    isLoading,
    setIsLoading,
    cart,
    setCart,
    addToCart,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    isOpen,
    setISOpen,
    getImageByProduct,
    count,
    setCount,
    formState,
    setFormState,
    emirate,
    setEmirate
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextValue => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }
  return ctx;
};

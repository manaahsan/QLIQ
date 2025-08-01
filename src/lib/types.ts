import type toast from "react-hot-toast";

export interface ProductT {
  id: string;
  image: string;
  title: string;
  time: string;
  price: number;
  rating: number;
}
export interface OtherCategoryT {
  name: string;
  image: string;
}
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color?: string;
  size?: string;
  image?: string;
}
export interface AppContextValue {
  toast: typeof toast;
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  isOpen: boolean;
  setISOpen: (v: boolean) => void;
  getImageByProduct: (productId: string | undefined) => string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>
  formState: boolean;
  setFormState: React.Dispatch<React.SetStateAction<boolean>>
  emirate: string | undefined;
  setEmirate: React.Dispatch<React.SetStateAction<string | undefined>>
  // removeFromCart: (id: string, options?: { color?: string; size?: string }) => void;
  // clearCart: () => void;
}

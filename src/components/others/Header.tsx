import { NavLink, useNavigate } from "react-router-dom";
import { TableOfContents, MapPin, Search, ShoppingBag } from "lucide-react";

// ui
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// helper
import { menus } from "@/lib/helper";
import clsx from "clsx";
import { useAppContext } from "@/context/AppContext";
import { Sidebar } from "@/components/shared/Sidebar";

export const Header = () => {
  const navigate = useNavigate();
  const { cart, setISOpen } = useAppContext();

  return (
    <header className="flex items-center justify-between px-6 py-3 md:py-4 shadow w-full bg-white">
      <NavLink to="/">
        <img src={"/assets/images/logo.svg"} />
      </NavLink>
      <nav
        id="menu"
        className="max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full max-md:w-0 transition-[width] bg-white/50 backdrop-blur flex-col md:flex-row flex gap-8 text-sm font-normal"
      >
        {menus.map((menu, index) => {
          const Icon = menu.icon;
          const isActive = window.location.pathname === menu.path;
          return (
            <a
              className={clsx("text-black text-md font-semibold", {
                "text-white bg-[#0082FF] p-2.5 rounded-full": isActive,
              })}
              href={menu.path}
              key={index}
            >
              {Icon && <Icon className="w-4 h-4 inline-block mr-2" />}
              {menu.name}
            </a>
          );
        })}
      </nav>
      <div className="flex items-center space-x-4">
        <div className="bg-white rounded-full p-2 border border-primary">
          <MapPin size={16} />
        </div>
        <div className="bg-white rounded-full p-2 border border-primary">
          <Search size={16} />
        </div>
        <div
          className=" relative bg-white rounded-full p-2 border border-primary"
          onClick={() => navigate("/checkout")}
        >
          <ShoppingBag size={16} />
          {cart?.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {cart?.length}
            </span>
          )}
        </div>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <button
          className="md:hidden text-gray-600"
          onClick={() => setISOpen(true)}
        >
          <TableOfContents />
        </button>
      </div>
      <Sidebar />
    </header>
  );
};

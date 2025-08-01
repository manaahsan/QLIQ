import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useAppContext } from "@/context/AppContext";
import { menus } from "@/lib/helper";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const { isOpen, setISOpen } = useAppContext();
  return (
    <Sheet open={isOpen} onOpenChange={setISOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {" "}
            <NavLink to="/">
              <img src={"/assets/images/logo.svg"} />
            </NavLink>
          </SheetTitle>
          <div className="mt-6 flex flex-col gap-2 space-y-4">
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
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

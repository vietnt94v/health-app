import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@/assets/images/logo.png";
import IconMemo from "@/assets/icons/memo.png";
import IconChallenge from "@/assets/icons/challenge.png";
import IconInfo from "@/assets/icons/info.png";
import IconMenu from "@/assets/icons/menu.png";
import IconClose from "@/assets/icons/close.png";
import MenuDropdown from "./MenuDropdown";

const Header = () => {
  const [isShowMenuDropdown, setIsShowMenuDropdown] = useState(false);

  const menus = [
    { to: "/", label: "自分の記録", icon: IconMemo },
    { to: "/my-record", label: "チャレンジ", icon: IconChallenge },
    { to: "/column", label: "お知らせ", icon: IconInfo, count: 1 },
  ];

  return (
    <>
      <header className="bg-dark-500 fixed w-full z-50 shadow-md">
        <div className="container">
          <div className="flex justify-between py-3">
            <Link to="/" className="relative top-1">
              <img src={Logo} alt="Logo" className="h-10" />
            </Link>
            <div className="flex space-x-16">
              <div className="hidden lg:flex space-x-10 text-light">
                {menus.map(menu => (
                  <NavLink
                    to={menu.to}
                    key={menu.label}
                    className={({ isActive }) =>
                      isActive ? "text-primary-400" : ""
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <div className="relative size-8">
                        <img
                          src={menu.icon}
                          alt={menu.label}
                          className="w-full h-full object-contain"
                        />
                        {menu.count !== undefined && menu.count > 0 && (
                          <span className="absolute top-0 -right-2 size-4 rounded-full bg-primary-500 text-light text-[10px] flex items-center justify-center">
                            {menu.count}
                          </span>
                        )}
                      </div>
                      <span className="text-[16px]">{menu.label}</span>
                    </div>
                  </NavLink>
                ))}
              </div>
              <div className="relative flex items-center">
                <div className="size-8 cursor-pointer">
                  <img
                    src={isShowMenuDropdown ? IconClose : IconMenu}
                    alt={isShowMenuDropdown ? "Icon Close" : "Icon Menu"}
                    onClick={() => setIsShowMenuDropdown(!isShowMenuDropdown)}
                  />
                </div>
                <div className="absolute top-full right-0 z-40">
                  {isShowMenuDropdown && <MenuDropdown />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

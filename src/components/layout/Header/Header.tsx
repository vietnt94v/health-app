import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@/assets/images/logo.png";
import IconMemo from "@/assets/icons/memo.png";
import IconChallenge from "@/assets/icons/challenge.png";
import IconInfo from "@/assets/icons/info.png";
import IconMenu from "@/assets/icons/menu.png";
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
      <header className="bg-dark-500 text-light">
        <div className="container">
          <div className="flex justify-between py-3">
            <Link to="/" className="relative top-1">
              <img src={Logo} alt="Logo" className="h-10" />
            </Link>
            <div className="flex">
              <div className="flex">
                {menus.map(menu => (
                  <NavLink
                    to={menu.to}
                    key={menu.label}
                    className={({ isActive }) =>
                      isActive ? "text-primary-400" : ""
                    }
                  >
                    <div className="flex items-center">
                      <div className="relative size-8">
                        <img src={menu.icon} alt={menu.label} />
                        {menu.count && menu.count > 0 && (
                          <span className="absolute size-4 rounded-full bg-primary-500 top-0 right-0 text-xs flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                            {menu.count}
                          </span>
                        )}
                      </div>
                      <span>{menu.label}</span>
                    </div>
                  </NavLink>
                ))}
              </div>
              <div className="block">
                <div className="size-8">
                  <img
                    src={IconMenu}
                    alt="Icon Menu"
                    onClick={() => setIsShowMenuDropdown(!isShowMenuDropdown)}
                  />
                </div>
                {isShowMenuDropdown && <MenuDropdown />}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

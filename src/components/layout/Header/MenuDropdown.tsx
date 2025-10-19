import { Link } from "react-router-dom";

const MenuDropdown = () => {
  const menuDropdown = [
    { label: "自分の記録", to: "/" },
    { label: "体重グラフ", to: "/" },
    { label: "目標", to: "/" },
    { label: "選択中のコース", to: "/" },
    { label: "コラム一覧", to: "/column" },
    { label: "設定", to: "/" },
  ];

  return (
    <div className="w-70 bg-dark-500 text-light">
      {menuDropdown.map(item => (
        <Link
          key={item.label}
          to={item.to}
          className="block px-8 py-[23px] text-[18px]/[26px] border-t border-t-light/15 border-b border-b-dark-600/25"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default MenuDropdown;

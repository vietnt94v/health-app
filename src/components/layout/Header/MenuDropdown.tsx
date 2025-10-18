import { Link } from "react-router-dom";

const MenuDropdown = () => {
  const menuDropdown = [
    { label: "自分の記録", to: "/" },
    { label: "体重グラフ", to: "/" },
    { label: "目標", to: "/" },
    { label: "選択中のコース", to: "/" },
    { label: "コラム一覧", to: "/" },
    { label: "設定", to: "/" },
  ];

  return (
    <div className="absolute right-0 z-10 mt-2 w-48 bg-dark-500 text-light">
      {menuDropdown.map(item => (
        <Link key={item.label} to={item.to} className="block px-4 py-2 text-sm">
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default MenuDropdown;

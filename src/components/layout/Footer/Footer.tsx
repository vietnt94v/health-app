import { Link } from "react-router-dom";

const Footer = () => {
  const menuFooter = [
    { label: "会員登録", to: "/" },
    { label: "運営会社", to: "/" },
    { label: "利用規約", to: "/" },
    { label: "個人情報の取扱について", to: "/" },
    { label: "特定商取引法に基づく表記", to: "/" },
    { label: "お問い合わせ", to: "/" },
  ];

  return (
    <footer className="bg-dark-500 text-light py-14">
      <div className="container">
        <div className="flex flex-wrap space-x-[30px] lg:space-x-[45px] space-y-4 lg:space-y-0">
          {menuFooter.map(item => (
            <Link
              key={item.label}
              to={item.to}
              className="text-dark-300 hover:text-primary-400 text-[11px] text-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

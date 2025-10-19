const NavRecommend = () => {
  const navRecommend = [
    { title: "RECOMMENDED COLUMN", subTitle: "オススメ" },
    { title: "RECOMMENDED DIET", subTitle: "ダイエット" },
    { title: "RECOMMENDED BEAUTY", subTitle: "美容" },
    { title: "RECOMMENDED HEALTH", subTitle: "健康" },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-8 pt-14">
        {navRecommend.map(item => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center px-2 py-6 text-center clip-hex bg-dark-600"
          >
            <span className="text-primary-300 text-[22px]/[27px] flex-1">
              {item.title}
            </span>
            <hr className="w-14 border-light my-[10px]" />
            <span className="text-light text-[18px]">{item.subTitle}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavRecommend;

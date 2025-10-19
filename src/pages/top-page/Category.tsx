import { Button, HeroCard } from "@/components/ui";
import Polygon from "@/components/ui/Polygon";
import M01 from "@/assets/images/m01.jpg";
import L01 from "@/assets/images/l01.jpg";
import L02 from "@/assets/images/l02.jpg";
import L03 from "@/assets/images/l03.jpg";
import D01 from "@/assets/images/d01.jpg";
import D02 from "@/assets/images/d02.jpg";
import S01 from "@/assets/images/s01.jpg";
import Knife from "@/assets/icons/knife.png";
import Cup from "@/assets/icons/cup.png";

const Category = () => {
  const categories = Array.from({ length: 8 }, (_, i) => ({
    imgUrl: [M01, L01, L02, L03, D01, D02, S01][i % 7],
    time: `${8 + Math.floor(i / 3)}:00 ${i % 2 === 0 ? "AM" : "PM"}`,
    type: ["Morning", "Lunch", "Dinner", "Snack"][i % 4] as
      | "Morning"
      | "Lunch"
      | "Dinner"
      | "Snack",
  }));

  const categoryTabs = [
    { label: "Morning", iconUrl: Knife },
    { label: "Lunch", iconUrl: Knife },
    { label: "Dinner", iconUrl: Knife },
    { label: "Snack", iconUrl: Cup },
  ];

  return (
    <>
      <div className="flex justify-center py-6 space-x-21">
        {categoryTabs.map(tab => (
          <Polygon
            key={tab.label}
            label={tab.label}
            iconUrl={tab.iconUrl}
            onClick={() => {}}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 mb-7">
        {categories.map(category => (
          <HeroCard
            key={category.time}
            imgUrl={category.imgUrl}
            time={category.time}
            type={category.type}
          />
        ))}
      </div>
      <div className="text-center mb-16">
        <Button>記録をもっと見る</Button>
      </div>
    </>
  );
};

export default Category;

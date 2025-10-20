import { useState, useEffect } from "react";
import { Button, HeroCard } from "@/components/ui";
import Hexagon from "@/components/ui/Hexagon";
import api from "@/services/api";
import { API } from "@/constants";
import Knife from "@/assets/icons/knife.png";
import Cup from "@/assets/icons/cup.png";

interface MealHistoryItem {
  id: number;
  img: string;
  time: string;
  type: "morning" | "lunch" | "dinner" | "snack";
}

const Category = () => {
  const [mealHistory, setMealHistory] = useState<MealHistoryItem[]>([]);
  const [filterMeal, setFilterMeal] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);

  const categoryTabs = [
    { type: "morning", iconUrl: Knife },
    { type: "lunch", iconUrl: Knife },
    { type: "dinner", iconUrl: Knife },
    { type: "snack", iconUrl: Cup },
  ];

  const handleGetMealHistory = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `${API.MEAL}?_page=${page}&_limit=8&type=${filterMeal}`,
      );
      setMealHistory(response.data);
    } catch (error: unknown) {
      throw new Error("Failed to fetch data", { cause: error });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetMealHistory();
  }, [filterMeal, page]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 py-6 gap-x-5 lg:gap-x-21 gap-y-10 lg:gap-y-0 lg:px-30">
        {categoryTabs.map(tab => (
          <div key={tab.type} className="flex justify-center">
            <Hexagon
              label={tab.type}
              iconUrl={tab.iconUrl}
              onClick={() => {
                setFilterMeal(tab.type);
              }}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 mb-7">
        {isLoading && <div>Loading...</div>}
        {mealHistory.map(item => (
          <HeroCard
            key={item.time}
            imgUrl={item.img}
            time={item.time}
            type={item.type}
          />
        ))}
      </div>
      <div className="text-center mb-16">
        <Button onClick={() => setPage(page + 1)}>記録をもっと見る</Button>
      </div>
    </>
  );
};

export default Category;

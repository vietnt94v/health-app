import { LineChart } from "@/components/ui";
import { API } from "@/constants/api";
import api from "@/services/api";
import { useEffect, useState } from "react";

interface DataChart {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const BodyRecord = () => {
  const [selectedTab, setSelectedTab] = useState<string>("年");
  const [dataChart, setDataChart] = useState<DataChart | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const tabs = ["日", "週", "月", "年"];

  const handleGetDataChart = async (tab: string) => {
    try {
      setIsLoading(true);
      const response = await api.get(`${API.BODYRECORDS}/${tab}`);
      setDataChart(response.data);
    } catch (error: unknown) {
      throw new Error("Failed to fetch data", { cause: error });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetDataChart(selectedTab);
  }, [selectedTab]);

  return (
    <>
      <div className="bg-dark-500 py-4">
        <div className="flex text-light font-normal px-6 mb-2">
          <h2 className="text-[15px]/[18px] tracking-[0.15px] w-24 text-wrap">
            BODY RECORD
          </h2>
          <span className="text-[22px]/[27px] tracking-[0.11px]">
            2021.05.21
          </span>
        </div>
        <div className="block">
          <div className="h-50 px-13 mb-2">
            {isLoading && <div>Loading...</div>}
            {dataChart && <LineChart data={dataChart} />}
          </div>
          <div className="flex space-x-4 px-8">
            {tabs.map(tab => (
              <div
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`text-[11px]/[22px] rounded-full px-[22.5px] py-[1px] cursor-pointer ${
                  selectedTab === tab
                    ? "bg-primary-300 text-light"
                    : "bg-light text-primary-300"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyRecord;

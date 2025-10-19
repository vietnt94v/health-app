import { LineChart } from "@/components/ui";

const BodyRecord = () => {
  const data = {
    labels: [
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
    ],
    datasets: [
      {
        label: "Weight",
        data: [7, 6, 6, 6, 6, 5, 4, 1, 1, 3, 1, 1],
        borderColor: "#8fe9d0",
        backgroundColor: "#8fe9d0",
      },
      {
        label: "Weight",
        data: [2, 5, 8, 4, 2, 6, 8, 4, 4, 4, 4, 4],
        borderColor: "#ffcc21",
        backgroundColor: "#ffcc21",
      },
    ],
  };

  const tabs = ["日", "週", "月", "年"];

  return (
    <>
      <div className="bg-dark-500 py-4">
        <div className="flex text-light px-6 mb-2">
          <h2 className="text-[15px]/[18px] tracking-[0.15px] w-24 text-wrap">
            BODY RECORD
          </h2>
          <span className="text-[22px]/[27px] tracking-[0.11px]">
            2021.05.21
          </span>
        </div>
        <div className="block">
          <div className="h-50 px-13 mb-2">
            <LineChart data={data} />
          </div>
          <div className="flex space-x-4 px-8">
            {tabs.map(tab => (
              <div
                key={tab}
                className="bg-light text-primary-300 text-[11px]/[22px] rounded-full px-[22.5px] py-[1px] cursor-pointer"
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

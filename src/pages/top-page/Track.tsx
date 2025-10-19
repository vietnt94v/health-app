import { LineChart } from "@/components/ui";

const Track = () => {
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

  return (
    <>
      <div className="h-full">
        <LineChart data={data} />
      </div>
    </>
  );
};

export default Track;

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

// eslint-disable-next-line react-refresh/only-export-components
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#fff",
      },
      grid: {
        color: "#777777",
      },
    },
    y: {
      display: false,
    },
  },
};

interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: (number | string)[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChart;

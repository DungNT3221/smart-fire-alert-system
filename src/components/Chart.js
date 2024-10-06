import React from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const data = {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"],
    datasets: [
      {
        label: "Số lượng cảnh báo",
        data: [3, 5, 2, 6, 4],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <div>
      <h3>Biểu đồ lịch sử cảnh báo</h3>
      <Line data={data} />
    </div>
  );
};

export default Chart;

import { Chart, ChartDataset } from "chart.js"
import { useEffect } from "react"

export const LineChart = ({ id, labels, datasets }: { id: string, labels: any[], datasets: ChartDataset[] }) => {
  useEffect(() => {
    const data = {
      labels,
      datasets,
    };

    const config = {
      type: 'line',
      data: data,
      options: {}
    };

    const chart = new Chart(document.getElementById(id) as any, config as any)
  }, []);

  return (
    <>
      <canvas className="w-full h-full" id={id}></canvas>
    </>
  );
}
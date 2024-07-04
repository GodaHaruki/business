"use client"

import { Grid, Grid1, Grid2, Grid4 } from "@/components/Grid";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart, Line } from "react-chartjs-2";

const Page = () => {
  ChartJS.register(...registerables);

  const views = [...Array(12)].map(_ => Math.floor(1000 + 1000 * Math.random()));
  const viewsData = {
    labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
    datasets: [
      {
        label: "view",
        data: views,
      }
    ]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <Grid className="h-screen">
      <Grid1 className="grid">
        <div className="max-h-[50vh]">
          <h1 className="text-center">Views</h1>
          <Line
            data={viewsData}
            options={options}
          />
        </div>
        <Grid>
          <Grid2>
            <div className="max-h-[50vh]">
              <h1 className="text-center">Views</h1>
              <Line
                data={viewsData}
                options={options}
              />
            </div>
          </Grid2>
          <Grid2>
            <div className="max-h-[50vh]">
              <h1 className="text-center">Views</h1>
              <Line
                data={viewsData}
                options={options}
              />
            </div>
          </Grid2>
        </Grid>
      </Grid1>
    </Grid>
  )
}

export default Page;
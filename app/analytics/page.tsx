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
  }
  return (
    <Grid>
      <Grid1>
        <Line
          data={viewsData}
          className="w-screen h-[50vh]"
        />
      </Grid1>
    </Grid>
  )
}

export default Page;
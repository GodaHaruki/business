"use client"

import { Grid, Grid1, Grid2, Grid3, Grid4 } from "@/components/Grid";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Page = () => {
  const sampleData = [...Array(12)].map((_, i) => {
    return {
      name: i + 1,
      num: Math.floor(10000 * Math.random())
    }
  });


  return (
    <Grid>
      <Grid1 className="h-[40vh]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={500} data={sampleData}>
            <Line type="monotone" dataKey="num" />
            <XAxis dataKey="name" />
            <YAxis />

            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </Grid1>
      {
        [...Array(3)].map((_, i) => {
          return (
            <Grid3 className="h-[40vh]" key={i}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart width={500} height={500} data={sampleData}>
                  <Line type="monotone" dataKey="num" />
                  <XAxis dataKey="name" />
                  <YAxis />

                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </Grid3>
          )
        })
      }
    </Grid>
  )
}

export default Page;
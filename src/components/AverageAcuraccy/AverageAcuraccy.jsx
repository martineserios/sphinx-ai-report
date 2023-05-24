import { ContainerDiv } from "../index";

import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "30-34",
    uv: 20,
    pv: 1398,
    fill: "#9CAE6E",
  },
  {
    name: "25-29",
    uv: 19,
    pv: 4567,
    fill: "#F17897",
  },
  {
    name: "18-24",
    uv: 90,
    pv: 2400,
    fill: "#5FE0E4",
  },
];

const style = {
  bottom: 0,
  left: 0,
  lineHeight: "24px",
};

export const AverageAcuraccy = () => {
  return (
    <ContainerDiv>
      <RadialBarChart
        width={400}
        height={300}
        cx={150}
        cy={150}
        innerRadius={50}
        outerRadius={100}
        range={[100]}
        barSize={20}
        data={data}
        label={(entry) => entry.name}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "bottom", fill: "#fff" }}
          clockWise
          dataKey="uv"
        />
        <Legend iconSize={10} width={200} height={40} wrapperStyle={style} />
      </RadialBarChart>
    </ContainerDiv>
  );
};

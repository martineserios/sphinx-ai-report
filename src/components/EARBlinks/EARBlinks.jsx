import { ContainerDiv } from "../index/";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "nulo", value: 5 },
  { name: "bajo", value: 5 },
  { name: "medio", value: 5 },
  { name: "alto", value: 5 },
];

const COLORS = ["#E93950", "#FC6993", "#F99AC8", "#F6C7EE"];

export const EARBlinks = () => {

  return (
    <ContainerDiv>
      <PieChart width={450} height={206}>
        <Pie
          data={data}
          cx={120}
          cy={100}
          startAngle={90}
          endAngle={-270}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke={"transparent"}
            />
          ))}
        </Pie>
      </PieChart>
    </ContainerDiv>
  );
};

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { ContainerDiv } from "../Container/ContainerDiv";

const data = [
  { name: "Defecto excesivo", value: 30 },
  { name: "Defecto moderado", value: 30 },
  { name: "ÓPTIMO", value: 10 },
  { name: "", value: 18 },
  { name: "Exceso", value: 12 },
];
const COLORS = ["#FF7694", "#FFC662", "#C8E265", "#FFC662"];

export const BajoPresion = ({ needleData }) => {
  const [needleValue, setNeedleValue] = useState(0);

  const handleNeedle = (needleData) => {
    let valueNeedle = 200 - needleData;
    setNeedleValue(valueNeedle);
  };

  useEffect(() => {
    handleNeedle(needleData);
  }, [needleData]);

  const renderNeedle = () => {
    const needleAngle = 180 - (needleValue / 100) * 180;
    const needleLength = 120 - (120 - 15) * 0.5;
    const needleX =
      242 + needleLength * Math.cos((needleAngle * Math.PI) / 180);
    const needleY =
      170 + needleLength * Math.sin((needleAngle * Math.PI) / 180);

    return (
      <line
        x1={242}
        y1={170}
        x2={needleX}
        y2={needleY}
        stroke="#000"
        strokeWidth={2}
      />
      
    );
  };

  return (
    <ContainerDiv title="TOMA DE DECISIÓN BAJO PRESIÓN" titleDirection="right">
      <p
        style={{
          color: "#fff",
          width: "100%",
          textAlign: "right",
          fontSize: "13px",
          marginTop: "-6px",
        }}
      >
        (Hemisfero natural)
      </p>
      <PieChart width={450} height={206}>
        <Pie
          data={data}
          cx={242}
          cy={170}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label={(entry) => entry.name}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke={"transparent"}
            />
          ))}
        </Pie>
        {renderNeedle()}
      </PieChart>
    </ContainerDiv>
  );
};

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { ContainerDiv } from "../Container/ContainerDiv";
import { styled } from "styled-components";
import { drop } from "../../assets";

const data = [
  { name: "Defecto excesivo", value: 30 },
  { name: "Defecto moderado", value: 30 },
  { name: "ÓPTIMO", value: 10 },
  { name: "", value: 18 },
  { name: "Exceso", value: 12 },
];
const COLORS = ["#FF7694", "#FFC662", "#C8E265", "#FFC662"];

const RotatedImage = styled.img`
  transform-origin: bottom center;
  transform: rotate(${(props) => props.rotation || "0"}deg);
  position: absolute;
  width: 30px;
  margin-right: -50px;
  margin-top: 110px;
`;

export const BajoPresion = ({ needleData }) => {
  const [needleValue, setNeedleValue] = useState(0);

  const handleNeedle = (needleData) => {
    const degree = needleData * 1.8 - 90;
    setNeedleValue(Math.round(degree));
  };

  useEffect(() => {
    handleNeedle(needleData);
  }, [needleData]);

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
      </PieChart>
      <RotatedImage src={drop} rotation={needleValue} alt="Image" />
    </ContainerDiv>
  );
};

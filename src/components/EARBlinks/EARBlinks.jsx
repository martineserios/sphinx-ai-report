import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { ContainerDiv } from "../Container/ContainerDiv";
import { styled } from "styled-components";

import data from "../../data/data";

const dataA = [
  {
    name: "Group D",
    value: data.resistenciaOcular.earBlinks.first,
    color: "#F5C7EC",
  },
  {
    name: "Group A",
    value: data.resistenciaOcular.earBlinks.second,
    color: "#EC3655",
  },
  {
    name: "Group B",
    value: data.resistenciaOcular.earBlinks.third,
    color: "#FA6997",
  },
  {
    name: "Group C",
    value: data.resistenciaOcular.earBlinks.fourth,
    color: "#F99AC8",
  },
];

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: -18px;
  margin-bottom: 10px;
`;

export const DotLabel = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const LabelText = styled.span`
  color: ${({ color }) => color || "#fff"};
  font-size: 12px;
  font-weight: ${({ labelweigth }) => labelweigth || "500"};
  display: flex;
  gap: 4px;
  align-items: center;
`;

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={"#fff"}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={"#FFF"} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#fff"
      >{` ${value}`}</text>
    </g>
  );
};

export const EARBlinks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <ContainerDiv title="E.A.R BLINKS">
      <PieChart width={212} height={230}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={dataA}
          cx={100}
          cy={80}
          startAngle={180}
          endAngle={-180}
          innerRadius={40}
          outerRadius={60}
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {dataA.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
          ))}
        </Pie>
      </PieChart>
      <LabelContainer>
        <LabelText>
          <DotLabel color="#EC3655" />
          nulo
        </LabelText>
        <LabelText>
          <DotLabel color="#FA6997" />
          bajo
        </LabelText>
        <LabelText>
          <DotLabel color="#F99AC8" />
          medio
        </LabelText>
        <LabelText>
          <DotLabel color="#F5C7EC" />
          alto
        </LabelText>
      </LabelContainer>
    </ContainerDiv>
  );
};

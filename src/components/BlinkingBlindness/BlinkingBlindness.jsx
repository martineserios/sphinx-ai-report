import { PieChart, Pie, Cell } from "recharts";
import { ContainerDiv } from "../Container/ContainerDiv";
import { styled } from "styled-components";

const SubtitleHolder = styled.div`
  text-align: center;
  color: #fff;
  position: absolute;
  margin-top: 56px;
  & > h3 {
    font-size: 38px;
    font-weight: 500;
    border-bottom: 2px solid #ffc65f;
  }

  & > h4 {
    margin: 4px;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const BlinkingBlindness = ({}) => {
  const data = [
    { name: "completed", value: 4 },
    { name: "toComplete", value: 10 },
  ];
  const COLORS = ["#C8E263", "#6F737E"];
  return (
    <ContainerDiv title="BLINKING BLINDNESS" titleDirection="right">
      <PieChart width={295} height={120}>
        <Pie
          data={data}
          cx={145}
          cy={90}
          startAngle={180}
          endAngle={0}
          innerRadius={65}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
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
      <SubtitleHolder>
        <h3>4/10</h3>
        <h4>SEC</h4>
      </SubtitleHolder>
    </ContainerDiv>
  );
};

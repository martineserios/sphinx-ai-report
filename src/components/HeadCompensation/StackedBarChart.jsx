import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 18px;
`;

const Bar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ color }) => color || "white"};
  margin: 1px;
`;

const StackedBarChart = ({ value, color }) => {
  const bars = Array.from({ length: 20 }).map((_, index) => {
    const barColor = index < 20 - Math.ceil(value / 5) ? color : "white";
    return <Bar key={index} color={barColor} />;
  });

  return <Container>{bars}</Container>;
};

export default StackedBarChart;

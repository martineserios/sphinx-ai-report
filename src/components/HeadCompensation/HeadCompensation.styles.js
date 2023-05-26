import { styled } from "styled-components";

export const CompensationContainer = styled.div`
  background: #504c67;
  padding: 16px;
  border-radius: 16px;
`;

export const StackBarContainer = styled.div`
  display: flex;
  gap: 6px;
`;

export const StackBarHolder = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
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

export const Hexagon = styled.div`
  width: 50px;
  height: 60px;
  position: relative;
  background-color: ${({ hexcolor }) => hexcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transform: rotate(${({ rotate }) => rotate || "90deg"});
`;

export const HexagonContent = styled.div`
  width: 46px;
  height: 55px;
  background-color: #504c67;
  display: flex;
  justify-content: center;
  flex-direction: column;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

export const HexagonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  margin-top: 12px;
`;

export const SubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 6px;
  color: grey;
  margin-bottom: 12px;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

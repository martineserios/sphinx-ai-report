import { styled } from "styled-components";

export const ProgressBarWrapper = styled.div`
  height: 18px;
  width: 235px;
  background-color: #6e737f;
  position: relative;
  margin-bottom: 16px;
  display: flex;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background-color: ${(props) => props.barcolor};
  width: ${(props) => `${props.progress}%`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ChartLine = styled.div`
  display: flex;
  border-bottom: 1px solid #989898d9;
  margin-top: 6px;
  height: 26px;

  & > span {
    color: #eee;
    width: 190px;
  }
`;

export const ChartHorizontalLine = styled.div`
  height: 282px;
  width: 1px;
  position: absolute;
  background-color: #989898d9;
  margin-top: 6px;
  margin-left: ${({ marginhl }) => marginhl};
`;

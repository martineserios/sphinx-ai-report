import { styled } from "styled-components";

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${({ notbordered }) =>
    notbordered ? "none" : "1px solid #8d8d9b"};
  padding: 10px;
`;

export const Subtitle = styled.span`
  margin-right: 10px;
  width: 160px;
  color: #fff;
`;

export const ProgressBarWrapper = styled.div`
  flex-grow: 1;
  height: 12px;
  width: 300px;
  background-color: #2b3340;
  position: relative;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background-color: #ffc661;
  width: ${(props) => `${props.progress}%`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;

export const ProgressText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 50;
  font-size: 14px;
`;

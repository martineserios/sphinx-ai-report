import { styled } from "styled-components";

const ProgressBarWrapper = styled.div`
  flex-grow: 1;
  height: 18px;
  width: 200px;
  background-color: #fff;
  position: relative;
  margin-bottom: 16px;
`;

const Subtitle = styled.span`
  margin-right: 10px;
  /* width: 160px; */
  color: #fff;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: #ffc661;
  width: ${(props) => `${props.progress}%`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;

const ProgressValue = styled.span`
  position: absolute;
  background-color: #ffc661;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  top: -4px;
  left: ${(props) => props.value}%;
  transform: translateX(-50%);
`;

const SubtitleContainer = styled.div`
  display: flex;
  /* width: 100%; */
  gap: 100px;
  justify-content: space-between;
  margin-bottom: 12px;
  color: #fff;
`;

export const SingleProgressBar = ({ subtitle, progress }) => {
  return (
    <>
      <SubtitleContainer>
        <Subtitle>{subtitle}</Subtitle>
        <p>{progress}%</p>
      </SubtitleContainer>
      <ProgressBarWrapper>
        <ProgressFill progress={progress}></ProgressFill>
        <ProgressValue value={progress} />
      </ProgressBarWrapper>
    </>
  );
};

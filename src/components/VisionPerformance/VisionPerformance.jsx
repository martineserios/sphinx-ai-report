import { ContainerDiv } from "../Container/ContainerDiv";
import {
  ProgressBarContainer,
  ProgressBarWrapper,
  ProgressFill,
  ProgressText,
  Subtitle,
} from "./VisionPerformance.styles";

export const VisionPerformance = ({ progress }) => {
  return (
    <ContainerDiv
      title="SPHINX VISION PERFORMANCE"
      titleDirection="right"
      rounded
      dPadding="2px 10px"
    >
      <ProgressBarContainer>
        <Subtitle>Visión periférica</Subtitle>
        <ProgressBarWrapper>
          <ProgressText>{progress.periferica}%</ProgressText>
          <ProgressFill progress={progress.periferica}></ProgressFill>
        </ProgressBarWrapper>
      </ProgressBarContainer>
      <ProgressBarContainer>
        <Subtitle>Resistencia ocular</Subtitle>
        <ProgressBarWrapper>
          <ProgressText>{progress.resistencia}%</ProgressText>
          <ProgressFill progress={progress.resistencia}></ProgressFill>
        </ProgressBarWrapper>
      </ProgressBarContainer>
      <ProgressBarContainer>
        <Subtitle>Head compensation</Subtitle>
        <ProgressBarWrapper>
          <ProgressText>{progress.compensation}%</ProgressText>
          <ProgressFill progress={progress.compensation}></ProgressFill>
        </ProgressBarWrapper>
      </ProgressBarContainer>
      <ProgressBarContainer notbordered="true">
        <Subtitle>Sacádicos</Subtitle>
        <ProgressBarWrapper>
          <ProgressText>{progress.sacadios}%</ProgressText>
          <ProgressFill progress={progress.sacadios}></ProgressFill>
        </ProgressBarWrapper>
      </ProgressBarContainer>
    </ContainerDiv>
  );
};

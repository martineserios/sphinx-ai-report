import { ContainerDiv, Ejes, NivelesDePrecision, SoftwareBBM } from "../index";
import { SingleProgressBar } from "../SingleProgressBar/SingleProgressBar";
import StackedBarChart from "./StackedBarChart";
import {
  CompensationContainer,
  DotLabel,
  Hexagon,
  HexagonContainer,
  HexagonContent,
  HorizontalContainer,
  LabelContainer,
  LabelText,
  StackBarContainer,
  StackBarHolder,
  SubtitleContainer,
  VerticalContainer,
} from "./HeadCompensation.styles";

export const HeadCompensation = ({
  progressNivel,
  progress,
  stackValue1,
  stackValue2,
  stackValue3,
  stackValue4,
  stackValue5,
  stackValue6,
  stackColor1,
  stackColor2,
  stackColor3,
  stackColor4,
  stackColor5,
  stackColor6,
}) => {
  const color = (label) => {
    if (label === "PRO") {
      return "#FFC65E";
    } else if (label === "AR") {
      return "#5EE2E7";
    } else if (label === "AM") {
      return "#F57699";
    } else if (label === "BEG") {
      return "#9044f7";
    }
  };

  return (
    <ContainerDiv textBox="true" title="HEAD COMPENSATION">
      <HorizontalContainer>
        <VerticalContainer>
          <CompensationContainer>
            <SingleProgressBar
              barColor={"#F97696"}
              subtitle={`NIVEL ${progressNivel}`}
              progress={progress}
            />
          </CompensationContainer>
          <CompensationContainer>
            <HexagonContainer>
              <Hexagon hexcolor="#41A44C" rotate="45deg">
                <HexagonContent></HexagonContent>
              </Hexagon>
              <Hexagon hexcolor="#ff7494">
                <HexagonContent></HexagonContent>
              </Hexagon>
              <Hexagon hexcolor="#9044f7" rotate="10deg">
                <HexagonContent></HexagonContent>
              </Hexagon>
            </HexagonContainer>
            <SubtitleContainer>
              <span>Yaw</span>
              <span>Pitch</span>
              <span>Roll</span>
            </SubtitleContainer>
            <StackBarHolder>
              <StackBarContainer>
                <StackedBarChart
                  value={100 - stackValue1}
                  color={color(stackColor1.toUpperCase())}
                />
                <StackedBarChart
                  value={100 - stackValue2}
                  color={color(stackColor2.toUpperCase())}
                />
              </StackBarContainer>
              <StackBarContainer>
                <StackedBarChart
                  value={100 - stackValue3}
                  color={color(stackColor3.toUpperCase())}
                />
                <StackedBarChart
                  value={100 - stackValue4}
                  color={color(stackColor4.toUpperCase())}
                />
              </StackBarContainer>
              <StackBarContainer>
                <StackedBarChart
                  value={100 - stackValue5}
                  color={color(stackColor5.toUpperCase())}
                />
                <StackedBarChart
                  value={100 - stackValue6}
                  color={color(stackColor6.toUpperCase())}
                />
              </StackBarContainer>
            </StackBarHolder>
            <LabelContainer>
              <LabelText>
                <DotLabel color="#FFC665" />
                PRO
              </LabelText>
              <LabelText>
                <DotLabel color="#5EE2E7" />
                AR
              </LabelText>
              <LabelText>
                <DotLabel color="#F57699" />
                AM
              </LabelText>
              <LabelText>
                <DotLabel color="#9044F7" />
                BEG
              </LabelText>
            </LabelContainer>
          </CompensationContainer>
        </VerticalContainer>
        <CompensationContainer>
          <SoftwareBBM />
        </CompensationContainer>
        <VerticalContainer>
          <CompensationContainer>
            <Ejes />
          </CompensationContainer>
          <CompensationContainer>
            <NivelesDePrecision />
          </CompensationContainer>
        </VerticalContainer>
      </HorizontalContainer>
    </ContainerDiv>
  );
};

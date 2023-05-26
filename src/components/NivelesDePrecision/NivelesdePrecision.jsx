import { whiteUp } from "../../assets";
import {
  DotLabel,
  LabelText,
} from "../HeadCompensation/HeadCompensation.styles";
import {
  FirstDiv,
  FourthDiv,
  LabelHolder,
  NDPContainer,
  SecondDiv,
  ThirdDiv,
} from "./NivelesdePrecision.styles";

export const NivelesDePrecision = () => {
  return (
    <NDPContainer>
      <h3>Niveles de precisión</h3>
      <img src={whiteUp} />
      <FirstDiv>
        <SecondDiv>
          <ThirdDiv>
            <FourthDiv></FourthDiv>
          </ThirdDiv>
        </SecondDiv>
      </FirstDiv>
      <LabelHolder>
        <LabelText labelweigth="600" color="#9044F7">
          <DotLabel color="#9044F7" />
          BEG
        </LabelText>
        <LabelText labelweigth="600" color="#5EE2E7">
          <DotLabel color="#5EE2E7" />
          AR
        </LabelText>
      </LabelHolder>
      <LabelHolder>
        <LabelText labelweigth="600" color="#F57699">
          <DotLabel color="#F57699" />
          AM
        </LabelText>
        <LabelText labelweigth="600" color="#FFC665">
          <DotLabel color="#FFC665" />
          PRO
        </LabelText>
      </LabelHolder>
    </NDPContainer>
  );
};

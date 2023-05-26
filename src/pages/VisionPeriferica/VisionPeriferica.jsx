import { lettersChart } from "../../assets";
import {
  AverageAcuraccy,
  BlinkingBlindness,
  ContainerDiv,
  HeadCompensation,
  Header,
  PageSection,
  SingleProgressBar,
  TextBox,
} from "../../components";
import data from "../../data/data";
import {
  DuoContainerVP,
  TextBoxImg,
  VPStyled,
  VerticalHolder,
} from "./VisionPeriferica.styles";

export const VisionPeriferica = () => {
  return (
    <PageSection>
      <VPStyled>
        <Header
          upTitle="SPHINX VISION PERFORMANCE"
          title="VISIÓN PERIFÉRICA"
          text="El software de EYE TRACKING analizó tu comportamiento visual y cuantificó los
        puntos en los cuales tuviste mayor dificultad para identificarlos (puntos ciegos).
        El resultado está expresado en números de acierto sobre un total de 32 puntos
        contemplando los movimientos de cabeza."
        />
        <DuoContainerVP>
          <AverageAcuraccy />
          <VerticalHolder>
            <ContainerDiv
              title="RESULTADO"
              contwidth="100px"
              titleDirection="right"
            >
              <SingleProgressBar subtitle="NIVEL 1" progress={data.resultado} />
            </ContainerDiv>
            <BlinkingBlindness />
          </VerticalHolder>
        </DuoContainerVP>
        <TextBox
          title="INTERPRETACIÓN DE RESULTADO"
          textL={`El software BBM indica que ${data.firstName} ${data.lastName} presentó 5 puntos con mayor grado de dificultad en los cuadrantes AI, BI, Cl y B2. También se identificó una leve ansiedad al momento de realizar el test de logical ya que hubo un excesivo movimiento de manos y cuerpo. En el tests de creative dijo primero la letra en lugar del color y esto se debe a que desvió 2 veces la vista del centro. Esto quiere decir que su visión periférica es buena, pero se aconseja trabajar el hemisferio recesivo junto con la ansiedad PESTE`}
        >
          <TextBoxImg src={lettersChart} />
        </TextBox>
        <HeadCompensation
          progress={data.firstHeadCompensation.percentage}
          progressNivel={data.firstHeadCompensation.nivel}
          stackValue1={data.firstHeadCompensation.stackValue1}
          stackColor1={data.firstHeadCompensation.stackColor1}
          stackValue2={data.firstHeadCompensation.stackValue2}
          stackColor2={data.firstHeadCompensation.stackColor2}
          stackValue3={data.firstHeadCompensation.stackValue3}
          stackColor3={data.firstHeadCompensation.stackColor3}
          stackValue4={data.firstHeadCompensation.stackValue4}
          stackColor4={data.firstHeadCompensation.stackColor4}
          stackValue5={data.firstHeadCompensation.stackValue5}
          stackColor5={data.firstHeadCompensation.stackColor5}
          stackValue6={data.firstHeadCompensation.stackValue6}
          stackColor6={data.firstHeadCompensation.stackColor6}
        />
        
      </VPStyled>
    </PageSection>
  );
};

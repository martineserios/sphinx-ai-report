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
              <SingleProgressBar
                subtitle="NIVEL 1"
                progress={data.visionPeriferica.resultado1}
              />
            </ContainerDiv>
            <BlinkingBlindness
              chartValue={data.visionPeriferica.blinkingBlindness}
            />
          </VerticalHolder>
        </DuoContainerVP>
        <TextBox
          title="INTERPRETACIÓN DE RESULTADO"
          textL={`El software BBM indica que ${data.firstName} ${data.lastName} presentó 5 puntos con mayor grado de dificultad en los cuadrantes AI, BI, Cl y B2. También se identificó una leve ansiedad al momento de realizar el test de logical ya que hubo un excesivo movimiento de manos y cuerpo. En el tests de creative dijo primero la letra en lugar del color y esto se debe a que desvió 2 veces la vista del centro. Esto quiere decir que su visión periférica es buena, pero se aconseja trabajar el hemisferio recesivo junto con la ansiedad PESTE`}
        >
          <TextBoxImg src={lettersChart} />
        </TextBox>
        <HeadCompensation
          progress={data.visionPeriferica.headCompensation.percentage}
          progressNivel={data.visionPeriferica.headCompensation.nivel}
          stackValue1={data.visionPeriferica.headCompensation.stackValue1}
          stackColor1={data.visionPeriferica.headCompensation.stackColor1}
          stackValue2={data.visionPeriferica.headCompensation.stackValue2}
          stackColor2={data.visionPeriferica.headCompensation.stackColor2}
          stackValue3={data.visionPeriferica.headCompensation.stackValue3}
          stackColor3={data.visionPeriferica.headCompensation.stackColor3}
          stackValue4={data.visionPeriferica.headCompensation.stackValue4}
          stackColor4={data.visionPeriferica.headCompensation.stackColor4}
          stackValue5={data.visionPeriferica.headCompensation.stackValue5}
          stackColor5={data.visionPeriferica.headCompensation.stackColor5}
          stackValue6={data.visionPeriferica.headCompensation.stackValue6}
          stackColor6={data.visionPeriferica.headCompensation.stackColor6}
        />
      </VPStyled>
    </PageSection>
  );
};

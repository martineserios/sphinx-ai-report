import {
  BlinkDuration,
  BlinkingBlindness,
  ContainerDiv,
  EARBlinks,
  HeadCompensation,
  Header,
  PageSection,
  SingleProgressBar,
  TextBox,
} from "../../components";
import data from "../../data/data";
import {
  HorizontalContainerRO,
  ROStyled,
  VerticalContainerRO,
} from "./ResistenciaOcular.styles";

export const ResistenciaOcular = () => {
  return (
    <PageSection>
      <ROStyled>
        <Header
          upTitle={"SPHINKS VISION PERFORMANCE"}
          title={"RESISTENCIA OCULAR"}
          text={
            "Mientras se realizaba el test que se muestra a la derecha de la hoja, el software de EYE TRACKING analizó tu comportamiento visual y cuantificó los puntos en los cuales tuviste mayor dificultad de fijación visual y el grado de compensación de la cabeza."
          }
        />
        <HorizontalContainerRO>
          <BlinkDuration radioValue={data.blinkDuration} />
          <EARBlinks />
          <VerticalContainerRO>
            <ContainerDiv title="RESULTADO">
              <SingleProgressBar
                subtitle={`NIVEL 1`}
                progress={data.resultado2}
              />
            </ContainerDiv>
            <BlinkingBlindness chartValue={data.blinkingBlindness.value2} />
          </VerticalContainerRO>
        </HorizontalContainerRO>
        <TextBox
          title={"INTERPRETACION DE RESULTADO"}
          textL={`El software BBM muestra que ${data.firstName} ${data.lastName} tuvo dificultad en los dos sectores del lado izquierdo (AI, A3). Esto se debe al acortamiento o falta de fuerza-resistencia de los músculos oculares y una pequeña compensasión con la cabeza. Se recomienda ejercitar los músculos correspondientes a los sectores de mayor`}
          textR={`dficultad para mejorar dicha deficiencia ya que genera un desbalance general el cuerpo. También es aconsejable pestañar una mayor cantidad de veces considerando que el ojo necesita de la lágrima para poder generar una correcta imagen. (${data.blinkingBlindness.value2}/10)`}
        />
        <HeadCompensation
          progress={data.secondHeadCompensation.percentage}
          progressNivel={data.secondHeadCompensation.nivel}
          stackValue1={data.secondHeadCompensation.stackValue1}
          stackColor1={data.secondHeadCompensation.stackColor1}
          stackValue2={data.secondHeadCompensation.stackValue2}
          stackColor2={data.secondHeadCompensation.stackColor2}
          stackValue3={data.secondHeadCompensation.stackValue3}
          stackColor3={data.secondHeadCompensation.stackColor3}
          stackValue4={data.secondHeadCompensation.stackValue4}
          stackColor4={data.secondHeadCompensation.stackColor4}
          stackValue5={data.secondHeadCompensation.stackValue5}
          stackColor5={data.secondHeadCompensation.stackColor5}
          stackValue6={data.secondHeadCompensation.stackValue6}
          stackColor6={data.secondHeadCompensation.stackColor6}
        />
      </ROStyled>
    </PageSection>
  );
};

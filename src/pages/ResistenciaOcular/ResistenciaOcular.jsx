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
          <BlinkDuration radioValue={data.resistenciaOcular.blinkDuration} />
          <EARBlinks />
          <VerticalContainerRO>
            <ContainerDiv title="RESULTADO">
              <SingleProgressBar
                subtitle={`NIVEL 1`}
                progress={data.resistenciaOcular.resultado}
              />
            </ContainerDiv>
            <BlinkingBlindness
              chartValue={data.resistenciaOcular.blinkingBlindness}
            />
          </VerticalContainerRO>
        </HorizontalContainerRO>
        <TextBox
          title={"INTERPRETACION DE RESULTADO"}
          textL={`El software BBM muestra que ${data.firstName} ${data.lastName} tuvo dificultad en los dos sectores del lado izquierdo (AI, A3). Esto se debe al acortamiento o falta de fuerza-resistencia de los músculos oculares y una pequeña compensasión con la cabeza. Se recomienda ejercitar los músculos correspondientes a los sectores de mayor`}
          textR={`dficultad para mejorar dicha deficiencia ya que genera un desbalance general el cuerpo. También es aconsejable pestañar una mayor cantidad de veces considerando que el ojo necesita de la lágrima para poder generar una correcta imagen. (${data.resistenciaOcular.blinkingBlindness}/10)`}
        />
        <HeadCompensation
          progress={data.resistenciaOcular.headCompensation.percentage}
          progressNivel={data.resistenciaOcular.headCompensation.nivel}
          stackValue1={data.resistenciaOcular.headCompensation.stackValue1}
          stackColor1={data.resistenciaOcular.headCompensation.stackColor1}
          stackValue2={data.resistenciaOcular.headCompensation.stackValue2}
          stackColor2={data.resistenciaOcular.headCompensation.stackColor2}
          stackValue3={data.resistenciaOcular.headCompensation.stackValue3}
          stackColor3={data.resistenciaOcular.headCompensation.stackColor3}
          stackValue4={data.resistenciaOcular.headCompensation.stackValue4}
          stackColor4={data.resistenciaOcular.headCompensation.stackColor4}
          stackValue5={data.resistenciaOcular.headCompensation.stackValue5}
          stackColor5={data.resistenciaOcular.headCompensation.stackColor5}
          stackValue6={data.resistenciaOcular.headCompensation.stackValue6}
          stackColor6={data.resistenciaOcular.headCompensation.stackColor6}
        />
      </ROStyled>
    </PageSection>
  );
};

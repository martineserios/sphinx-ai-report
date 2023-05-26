import { BlinkDuration, Header, PageSection } from "../../components";
import data from "../../data/data";
import { HorizontalContainerRO, ROStyled } from "./ResistenciaOcular.styles";

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
        </HorizontalContainerRO>
      </ROStyled>
    </PageSection>
  );
};

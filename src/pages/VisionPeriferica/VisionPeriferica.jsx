import { Header, PageSection } from "../../components";
import { VPStyled } from "./VisionPeriferica.styles";

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
      </VPStyled>
    </PageSection>
  );
};

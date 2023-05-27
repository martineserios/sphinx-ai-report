import {
  EloDistribution,
  Header,
  PageSection,
  Resumen,
} from "../../components";
import data from "../../data/data";
import { EstadisticaStyled } from "./Estadistica.styles";

export const Estadistica = () => {
  return (
    <PageSection>
      <EstadisticaStyled>
        <Header
          title={"ESTADÍSTICA DEL JUGADOR"}
          upTitle={"SPHINKS VISION PERFORMANCE"}
          text={
            "En la siguiente tabla se muestra el resultado de las habilidades visuales del deportista luego de realizar las diferentes pruebas. Así como también los pasos a seguir para alcanzar el próximo nivel."
          }
        />
        <EloDistribution positionCircle={data.eloDistribution - 1} />
        <Resumen />
      </EstadisticaStyled>
    </PageSection>
  );
};

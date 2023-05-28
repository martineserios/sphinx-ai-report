import {
  EloDistribution,
  Header,
  PageSection,
  Recomendaciones,
  Resumen,
} from "../../components";
import data from "../../data/data";
import useFormattedDate from "../../hooks/useFormattedDate";
import { HomeFooter } from "../Home/Home.styles";
import { EstadisticaStyled, HorizontalContainerEs } from "./Estadistica.styles";

export const Estadistica = () => {
  const formattedDate = useFormattedDate();

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
        <HorizontalContainerEs>
          <Resumen />
          <Recomendaciones data={data.recomendaciones} />
        </HorizontalContainerEs>
        <HomeFooter>
          <h3>FECHA DE EVALUACIÓN | {formattedDate}</h3>
        </HomeFooter>
      </EstadisticaStyled>
    </PageSection>
  );
};

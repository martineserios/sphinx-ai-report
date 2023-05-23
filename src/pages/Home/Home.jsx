import {
  AsimetriaFuncional,
  BajoPresion,
  EloIndex,
  PageSection,
  TextBox,
  TopInformation,
} from "../../components";
import { VisionPerformance } from "../../components/VisionPerformance/VisionPerformance";
import data from "../../data/data";
import useFormattedDate from "../../hooks/useFormattedDate";
import { DuoContainer, HomeFooter, HomeStyled } from "./Home.styles";

export const Home = () => {
  const formattedDate = useFormattedDate();
  return (
    <PageSection>
      <HomeStyled>
        <TopInformation
          id={data.id}
          firstName={data.firstName}
          lastName={data.lastName}
        />
        <DuoContainer>
          <EloIndex ranking={data.ranking} />
          <VisionPerformance progress={data.visionPerformance} />
        </DuoContainer>
        <DuoContainer>
          <AsimetriaFuncional radioValue={data.asimetriaFuncional} />
          <BajoPresion needleData={data.decisionBajoPresion} />
        </DuoContainer>
        <DuoContainer>
          <TextBox
            title="INTERPRETACIÓN DE RESULTADO"
            textL="Según los parámetros de sus asimetrías corporales en relación a su
          hemisferio natural (cerebro dominante según su ojo técnico), los
          indicadores de “toma de decisión bajo presión muestran un defecto
          moderado del 29% con respecto al estado ideal."
            textR="Esto quiere decir que al momento de tomar una decisión se acelera en
          los pensamientos y crea más opciones de las que puede ejecutar
          generando un conflicto y dificultando su estrategia de juego/golpes."
          />
        </DuoContainer>
        <HomeFooter>
          <h3>FECHA DE EVALUACIÓN | {formattedDate}</h3>
        </HomeFooter>
      </HomeStyled>
    </PageSection>
  );
};

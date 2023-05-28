import { ContainerDiv } from "../Container/ContainerDiv";
import {
  ChartHorizontalLine,
  ChartLine,
  ProgressBarWrapper,
  ProgressFill,
} from "./Recomendaciones.styles";

export const Recomendaciones = ({ data }) => {
  const handleBarColor = (value) => {
    if (value < 34) {
      return "#F96A97";
    } else if (value > 65) {
      return "#C8E263";
    } else {
      return "#ffc661";
    }
  };
  return (
    <ContainerDiv title="RECOMENDACIONES" titleDirection="right" rounded>
      <ChartLine>
        <span>Ansiedad visual técnica</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.visualTecnica}
            barcolor={handleBarColor(data.visualTecnica)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Ansiedad visual táctica</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.visualTactica}
            barcolor={handleBarColor(data.visualTactica)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Identificar letra/símbolo</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.letraSimbolo}
            barcolor={handleBarColor(data.letraSimbolo)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Fijación por zona y tiempo</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.zonaYTiempo}
            barcolor={handleBarColor(data.zonaYTiempo)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Yaw</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.yaw}
            barcolor={handleBarColor(data.yaw)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Pitch</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.pitch}
            barcolor={handleBarColor(data.pitch)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Roll</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.roll}
            barcolor={handleBarColor(data.roll)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Ejercicios de izq. a der.</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.izqADer}
            barcolor={handleBarColor(data.izqADer)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartLine>
        <span>Ejercicios de der. a izq</span>
        <ProgressBarWrapper>
          <ProgressFill
            progress={data.derAIzq}
            barcolor={handleBarColor(data.derAIzq)}
          />
        </ProgressBarWrapper>
      </ChartLine>
      <ChartHorizontalLine  marginhl="108px"/>
      <ChartHorizontalLine  marginhl="260px"/>
    </ContainerDiv>
  );
};

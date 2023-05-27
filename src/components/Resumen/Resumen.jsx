import ReactApexChart from "react-apexcharts";
import { ContainerDiv } from "../Container/ContainerDiv";
import { styled } from "styled-components";
const PolarContainer = styled.div`
  height: 230px;
  width: 230px;
  background: #5bb6c7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopLeftText = styled.span`
  display: inline-block;
  border-radius: 50px; /* Ajuste o valor do raio conforme necessário */
  background-color: #f0f0f0; /* Cor de fundo do seu span */
  padding: 5px 10px; /* Ajuste o preenchimento conforme necessário */

`;

export const Resumen = () => {
  const series = [40, 20, 30, 50];
  const options = {
    chart: {
      width: 300,
      height: 300,
      type: "polarArea",
      selection: {
        enabled: false,
        type: "x",
        fill: {
          color: "#5CE1E6",
          opacity: 0.1,
        },
      },
    },
    labels: ["Rose A", "Rose B", "Rose C", "Rose D"],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 2,
      colors: ["#fff"], // Adiciona cor branca para a borda
    },
    tooltip: {
      enabled: false,
      onDatasetHover: {
        highlightDataSeries: false,
      },
    },
    hover: { mode: null },
    yaxis: {
      show: false,
    },
    legend: {
      show: false, // Remove a legenda
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        color: "#5CE1E6", // Substitua pela cor desejada
        shadeTo: "light",
        shadeIntensity: 0,
      },
    },
  };

  return (
    <ContainerDiv id="chart">
      <PolarContainer>
        <ReactApexChart
          options={options}
          series={series}
          type="polarArea"
          width={300}
        />
      </PolarContainer>
    </ContainerDiv>
  );
};

export default Resumen;

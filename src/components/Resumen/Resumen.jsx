import ReactApexChart from "react-apexcharts";
import { ContainerDiv } from "../Container/ContainerDiv";
import { styled } from "styled-components";
import { topLeft } from "../../assets";
import data from "../../data/data";
const PolarContainer = styled.div`
  height: 230px;
  width: 230px;
  background: #5bb6c7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 20px;
`;
const CircleStyled = styled.img`
  position: absolute;
  margin-top: -34px;
  margin-left: 20px;
  width: 360px;
`;

export const Resumen = () => {
  const series = [
    data.resumen.vision,
    data.resumen.sacadicos,
    data.resumen.headCompensation,
    data.resumen.resistencia,
  ];
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
      colors: ["#fff"],
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
    <>
      <ContainerDiv title="RESUMEN">
        <PolarContainer>
          <ReactApexChart
            options={options}
            series={series}
            type="polarArea"
            width={300}
          />
        </PolarContainer>
        <CircleStyled src={topLeft} />
      </ContainerDiv>
    </>
  );
};

export default Resumen;

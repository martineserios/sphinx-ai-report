import { ContainerDiv } from "../index";
import data from "../../data/data";
import { PieChart, Pie, Cell } from "recharts";
import {
  AVDotLabel,
  AVLabelContainer,
  AVLabelText,
  AVTitle,
  InclinedDiv,
  SvgImg,
} from "./AverageAcuraccy.styles";
import { asterisk, clock, target } from "../../assets";

const dataA = [
  { name: "90%", value: data.visionPeriferica.averageAcuraccy.blue1 },
  {
    name: "Missing Value",
    value: 100 - data.visionPeriferica.averageAcuraccy.blue1,
  },
];
const COLORSA = ["#5BE1E3", "transparent"];

const dataB = [
  { name: "19%", value: data.visionPeriferica.averageAcuraccy.pink1 },
  {
    name: "Missing Value",
    value: 100 - data.visionPeriferica.averageAcuraccy.pink1,
  },
];
const COLORSB = ["#FD7691", "transparent"];

const dataC = [
  { name: "AM", value: 30 },
  { name: "Missing Value", value: 70 },
];
const COLORSC = ["#DFE71A", "transparent"];

const dataD = [
  { name: "90%", value: data.visionPeriferica.averageAcuraccy.blue2 },
  {
    name: "Missing Value",
    value: 100 - data.visionPeriferica.averageAcuraccy.blue2,
  },
];

const dataE = [
  { name: "23%", value: data.visionPeriferica.averageAcuraccy.pink2 },
  {
    name: "Missing Value",
    value: 100 - data.visionPeriferica.averageAcuraccy.pink2,
  },
];

const dataF = [
  { name: "AM", value: 30 },
  { name: "Missing Value", value: 70 },
];

export const AverageAcuraccy = () => {
  return (
    <ContainerDiv title="OVERALL AVERAGE ACCURACY" rounded>
      <PieChart width={466} height={250}>
        <Pie
          data={dataA}
          cx={100}
          cy={130}
          startAngle={90}
          endAngle={-280}
          innerRadius={45}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label={false}
        >
          {dataA.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORSA[index % COLORSA.length]}
              stroke="transparent"
            />
          ))}
        </Pie>
        <Pie
          data={dataB}
          cx={100}
          cy={130}
          startAngle={90}
          endAngle={-280}
          innerRadius={34}
          outerRadius={44}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label={false}
        >
          {dataB.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORSB[index % COLORSB.length]}
              stroke="transparent"
            />
          ))}
        </Pie>
        <Pie
          data={dataC}
          cx={100}
          cy={130}
          startAngle={150}
          endAngle={-280}
          innerRadius={23}
          outerRadius={33}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label={false}
        >
          {dataC.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORSC[index % COLORSC.length]}
              stroke="transparent"
            />
          ))}
        </Pie>
        <Pie
          data={dataD}
          cx={346}
          cy={130}
          startAngle={90}
          endAngle={-280}
          innerRadius={45}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label={false}
        >
          {dataD.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORSA[index % COLORSA.length]}
              stroke="transparent"
            />
          ))}
        </Pie>
        <Pie
          data={dataE}
          cx={346}
          cy={130}
          startAngle={90}
          endAngle={-280}
          innerRadius={34}
          outerRadius={44}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label={false}
        >
          {dataE.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORSB[index % COLORSB.length]}
              stroke="transparent"
            />
          ))}
        </Pie>
        <Pie
          data={dataF}
          cx={346}
          cy={130}
          startAngle={150}
          endAngle={-280}
          innerRadius={23}
          outerRadius={33}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label={false}
        >
          {dataF.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORSC[index % COLORSC.length]}
              stroke="transparent"
            />
          ))}
        </Pie>
      </PieChart>
      <InclinedDiv
        margintop="180px"
        marginleft="-120px"
        skewx="skewx(20deg)"
        skewxb="skewx(-20deg)"
        content={data.visionPeriferica.averageAcuraccy.blue1 + "%"}
        diheight="20px"
        borderleft="true"
        borderbottom="true"
      />
      <SvgImg src={target} imgmargintop="192px" imgmarginleft="-38px" />
      <InclinedDiv
        margintop="70px"
        marginleft="-120px"
        content={data.visionPeriferica.averageAcuraccy.pink1 + "%"}
        skewx="skewx(-20deg)"
        skewxb="skewx(20deg)"
        marginbottomlabel="40px"
        diheight="40px"
        bordertop="true"
        borderleft="true"
      />
      <SvgImg src={clock} imgmargintop="62px" imgmarginleft="-30px" />
      <InclinedDiv
        margintop="75px"
        marginleft="-350px"
        content="AM"
        skewx="skewx(20deg)"
        skewxb="skewx(-20deg)"
        marginbottomlabel="40px"
        diheight="40px"
        borderright="true"
        bordertop="true"
      />
      <SvgImg src={asterisk} imgmargintop="66px" imgmarginleft="-440px" />
      <InclinedDiv
        margintop="75px"
        marginleft="146px"
        skewx="skewx(20deg)"
        content="AM"
        skewxb="skewx(-20deg)"
        marginbottomlabel="40px"
        diheight="40px"
        borderright="true"
        bordertop="true"
      />
      <SvgImg src={asterisk} imgmargintop="66px" imgmarginleft="60px" />

      <InclinedDiv
        margintop="70px"
        marginleft="370px"
        content={data.visionPeriferica.averageAcuraccy.pink2 + "%"}
        skewx="skewx(-20deg)"
        skewxb="skewx(20deg)"
        marginbottomlabel="40px"
        diheight="40px"
        bordertop="true"
        borderleft="true"
      />
      <SvgImg src={clock} imgmargintop="62px" imgmarginleft="460px" />

      <InclinedDiv
        margintop="180px"
        marginleft="130px"
        skewx="skewx(-20deg)"
        skewxb="skewx(20deg)"
        content={data.visionPeriferica.averageAcuraccy.blue2 + "%"}
        diheight="20px"
        borderright="true"
        borderbottom="true"
      />
      <SvgImg src={target} imgmargintop="192px" imgmarginleft="50px" />

      <AVLabelContainer labelmargintop="230px" labelmarginleft="-240px">
        <AVLabelText>
          <AVDotLabel color="#DFE71A"></AVDotLabel>
          AM
        </AVLabelText>
        <AVLabelText>
          <AVDotLabel color="#FD7691"></AVDotLabel>
          1.20
        </AVLabelText>
        <AVLabelText>
          <AVDotLabel color="#5BE1E3"></AVDotLabel>
          29/32
        </AVLabelText>
      </AVLabelContainer>
      <AVLabelContainer labelmargintop="230px" labelmarginleft="265px">
        <AVLabelText>
          <AVDotLabel color="#DFE71A"></AVDotLabel>
          AM
        </AVLabelText>
        <AVLabelText>
          <AVDotLabel color="#FD7691"></AVDotLabel>
          1.20
        </AVLabelText>
        <AVLabelText>
          <AVDotLabel color="#5BE1E3"></AVDotLabel>
          29/32
        </AVLabelText>
      </AVLabelContainer>

      <AVTitle titlemargintop="10px" titlemarginleft="-240px">
        LOGICAL
      </AVTitle>
      <AVTitle titlemargintop="10px" titlemarginleft="250px">
        CREATIVE
      </AVTitle>
    </ContainerDiv>
  );
};

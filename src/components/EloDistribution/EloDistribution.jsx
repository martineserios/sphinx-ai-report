import { styled } from "styled-components";
import { ContainerDiv, RankingAnimal } from "../index/";

import { ComposedChart, XAxis, Bar, ResponsiveContainer } from "recharts";
import {
    DotsContainer,
  RankingAnimalContainer,
  SubtitleContainer,
  SubtitleDots,
} from "./EloDistribution.styles";

const data = [
  {
    name: "",
    pv: 20,
    color: "#9E8462",
  },
  {
    name: "",
    pv: 25,
    color: "#746861",
  },
  {
    name: "",
    pv: 30,
    color: "#B99762",
  },
  {
    name: "",
    pv: 40,
    color: "#D9AB61",
  },
  {
    name: "",
    pv: 46,
    color: "#E8B45E",
  },
  {
    name: "",
    pv: 56,
    color: "#FFC563",
  },
  {
    name: "",
    pv: 60,
    color: "#9C5F76",
  },
  {
    name: "",
    pv: 65,
    color: "#AC627D",
  },
  {
    name: "",
    pv: 70,
    color: "#B86482",
  },
  {
    name: "",
    pv: 70,
    color: "#D86B87",
  },
  {
    name: "",
    pv: 75,
    color: "#E56E8E",
  },
  {
    name: "",
    pv: 72,
    color: "#FE7396",
  },
  {
    name: "",
    pv: 65,
    color: "#634B94",
  },
  {
    name: "",
    pv: 60,
    color: "#7C46CD",
  },
  {
    name: "",
    pv: 55,
    color: "#9B3FFF",
  },
  {
    name: "",
    pv: 50,
    color: "#368495",
  },
  {
    name: "",
    pv: 45,
    color: "#1CC2C8",
  },
  {
    name: "",
    pv: 35,
    color: "#01FEFC",
  },
  {
    name: "",
    pv: 42,
    color: "#E2FF00",
  },
  {
    name: "",
    pv: 30,
    color: "#E2FF00",
  },
  {
    name: "",
    pv: 25,
    color: "#E2FF00",
  },
];
const CustomBar = ({ x, y, width, height, color }) => {
  return <rect x={x} y={y} width={width} height={height} fill={color} />;
};

export const EloDistribution = () => {
  return (
    <ContainerDiv title="ELO DISTRIBUTION" textBox="true">
      <ResponsiveContainer width={650} height={300} paddin={{ left: 0 }}>
        <ComposedChart
          data={data}
          margin={{ top: 100, right: 50, bottom: 46, left: 0 }}
          cx={100}
          cy={80}
        >
          <XAxis dataKey="name" hide />
          <Bar
            dataKey="pv"
            barSize={20}
            shape={<CustomBar />}
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <RankingAnimalContainer position={"100px 0px 0px -580px"}>
        <RankingAnimal
          bgColor="#FFC563"
          width={55}
          innerWidth={50}
          height={65}
          innerHeight={59}
          animalHeight={35}
          starHeight={16}
          starBottom={-6}
        />
        <span>BGN</span>
      </RankingAnimalContainer>
      <RankingAnimalContainer position={"59px 0px 0px -400px"}>
        <RankingAnimal
          bgColor="#FFC563"
          width={55}
          innerWidth={50}
          height={65}
          innerHeight={59}
          animalHeight={35}
          starHeight={16}
          starBottom={-6}
        />
        <span>AM</span>
      </RankingAnimalContainer>
      <RankingAnimalContainer position={"20px 0px 0px -220px"}>
        <RankingAnimal
          bgColor="#B86482"
          width={55}
          innerWidth={50}
          height={65}
          innerHeight={59}
          animalHeight={35}
          starHeight={16}
          starBottom={-6}
        />
        <span>AR</span>
      </RankingAnimalContainer>
      <RankingAnimalContainer position={"0px 0px 0px -50px"}>
        <RankingAnimal
          bgColor="#FE7396"
          width={55}
          innerWidth={50}
          height={65}
          innerHeight={59}
          animalHeight={35}
          starHeight={16}
          starBottom={-6}
        />
        <span>PRO</span>
      </RankingAnimalContainer>
      <RankingAnimalContainer position={"20px 0px 0px 125px"}>
        <RankingAnimal
          bgColor="#9B3FFF"
          width={55}
          innerWidth={50}
          height={65}
          innerHeight={59}
          animalHeight={35}
          starHeight={16}
          starBottom={-6}
        />
        <span>AA</span>
      </RankingAnimalContainer>
      <RankingAnimalContainer position={"50px 0px 0px 290px"}>
        <RankingAnimal
          bgColor="#01FEFC"
          width={55}
          innerWidth={50}
          height={65}
          innerHeight={59}
          animalHeight={35}
          starHeight={16}
          starBottom={-6}
        />
        <span>AAA</span>
      </RankingAnimalContainer>
      <SubtitleContainer>
        <DotsContainer>
          <SubtitleDots />
          <SubtitleDots />
          <SubtitleDots />
          <span>0</span>
        </DotsContainer>
        <DotsContainer>
          <SubtitleDots />
          <SubtitleDots />
          <SubtitleDots />
          <span>70</span>
        </DotsContainer>
        <DotsContainer>
          <SubtitleDots />
          <SubtitleDots />
          <SubtitleDots />
          <span>116</span>
        </DotsContainer>
        <DotsContainer>
          <SubtitleDots />
          <SubtitleDots />
          <SubtitleDots />
          <span>165</span>
        </DotsContainer>
        <DotsContainer>
          <SubtitleDots />
          <SubtitleDots />
          <SubtitleDots />
          <span>190</span>
        </DotsContainer>
        <DotsContainer>
          <SubtitleDots />
          <SubtitleDots />
          <SubtitleDots />
          <span>250</span>
        </DotsContainer>
        <DotsContainer>
          <SubtitleDots />
          <SubtitleDots />
          <SubtitleDots />
          <span>299</span>
        </DotsContainer>
        <DotsContainer>
          <SubtitleDots />
          <SubtitleDots />
          <SubtitleDots />
          <span>+500</span>
        </DotsContainer>
      </SubtitleContainer>
    </ContainerDiv>
  );
};

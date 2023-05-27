import { bull, star } from "../../assets";
import {
  AnimalImg,
  HexagonInner,
  HexagonWrapper,
  StarImg,
} from "./RankingAnimal.styles";

export const RankingAnimal = ({
  bgColor,
  width,
  height,
  innerWidth,
  innerHeight,
  animalHeight,
  starHeight,
  starBottom,
}) => {
  return (
    <HexagonWrapper outerwidth={width} outerheight={height} bgcolor={bgColor}>
      <HexagonInner innerwidth={innerWidth} innerheight={innerHeight}>
        <AnimalImg src={bull} animalheight={animalHeight} />
        <StarImg src={star} starheight={starHeight} starbottom={starBottom} />
      </HexagonInner>
    </HexagonWrapper>
  );
};

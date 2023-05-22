import { bull, star } from "../../assets";
import {
  AnimalImg,
  HexagonInner,
  HexagonWrapper,
  StarImg,
} from "./RankingAnimal.styles";

export const RankingAnimal = () => {
  return (
    <HexagonWrapper>
      <HexagonInner>
        <AnimalImg src={bull} />
        <StarImg src={star} />
      </HexagonInner>
    </HexagonWrapper>
  );
};

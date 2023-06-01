import { useEffect, useState } from "react";
import { angel, bull, eagle, lion, sphinx, star } from "../../assets";
import {
  AnimalImg,
  HexagonInner,
  HexagonWrapper,
  StarContainer,
  StarImg,
} from "./RankingAnimal.styles";

export const RankingAnimal = ({
  width,
  animalmarginbottom,
  height,
  innerWidth,
  innerHeight,
  animalHeight,
  ranking,
  starHeight,
  starmarginleft,
  starBottom,
}) => {
  useEffect(() => {
    if (ranking <= 116) {
      setHexagonColor("#FFC563");
    } else if (ranking > 116 && ranking <= 190) {
      setHexagonColor("#FE7396");
    } else if (ranking > 190 && ranking <= 250) {
      setHexagonColor("#9B3FFF");
    } else if (ranking > 250 && ranking <= 299) {
      setHexagonColor("#01FEFC");
    } else if (ranking > 299) {
      setHexagonColor("#E2FF00");
    }
  }, [ranking]);

  const [hexagonColor, setHexagonColor] = useState("#fff");
  const handleAnimal = (ranking) => {
    if (ranking <= 116) {
      return angel;
    } else if (ranking > 116 && ranking <= 190) {
      return bull;
    } else if (ranking > 190 && ranking <= 250) {
      return lion;
    } else if (ranking > 250 && ranking <= 299) {
      return eagle;
    } else if (ranking > 299) {
      return sphinx;
    } else {
      return "";
    }
  };

  return (
    <HexagonWrapper
      outerwidth={width}
      outerheight={height}
      bgcolor={hexagonColor}
    >
      <HexagonInner innerwidth={innerWidth} innerheight={innerHeight}>
        <AnimalImg
          src={handleAnimal(ranking)}
          animalheight={animalHeight}
          animalmarginbottom={animalmarginbottom}
        />
        {(ranking > 70 && ranking <= 116) ||
        (ranking > 165 && ranking <= 190) ? (
          <StarContainer starmarginleft={starmarginleft}>
            <StarImg
              src={star}
              starheight={starHeight}
              starbottom={starBottom}
            />
            <StarImg
              src={star}
              starheight={starHeight}
              starbottom={starBottom}
            />
          </StarContainer>
        ) : ranking > 190 ? (
          <></>
        ) : (
          <StarImg src={star} starheight={starHeight} starbottom={starBottom} />
        )}
      </HexagonInner>
    </HexagonWrapper>
  );
};

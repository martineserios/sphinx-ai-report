import { styled } from "styled-components";

export const HexagonWrapper = styled.div`
  width: ${({ outerwidth }) => outerwidth || "135"}px;
  height: ${({ outerheight }) => outerheight || "150"}px;

  position: relative;
  background-color: ${({ bgcolor }) => bgcolor || "#ff7494"};
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

export const HexagonInner = styled.div`
  width: ${({ innerwidth }) => innerwidth || "120"}px;
  height: ${({ innerheight }) => innerheight || "130"}px;
  background-color: #6f737d;
  display: flex;
  justify-content: center;
  flex-direction: column;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

export const StarImg = styled.img`
  height: ${({ starheight }) => starheight || "36"}px;
  margin-bottom: ${({ starbottom }) => starbottom || "-20"}px;

`;

export const AnimalImg = styled.img`
  height: ${({ animalheight }) => animalheight || "80"}px;
`;

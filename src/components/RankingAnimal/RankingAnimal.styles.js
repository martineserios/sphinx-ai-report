import { styled } from "styled-components";

export const HexagonWrapper = styled.div`
  width: 135px;
  height: 150px;
  position: relative;
  background-color: #ff7494;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

export const HexagonInner = styled.div`
  width: 120px;
  height: 130px;
  background-color: #6f737d;
  display: flex;
  justify-content: center;
  flex-direction: column;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

export const StarImg = styled.img`
  height: 36px;
  margin-bottom: -20px;
`;

export const AnimalImg = styled.img`
  height: 80px;
`;

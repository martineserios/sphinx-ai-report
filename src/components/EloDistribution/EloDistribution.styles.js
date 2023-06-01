import { styled } from "styled-components";

export const RankingAnimalContainer = styled.div`
  position: absolute;
  text-align: center;
  margin: ${({ position }) => position};

  & > span {
    color: #fff;
    font-weight: 590;
    line-height: 40px;
  }
`;

export const SubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 600px;
  margin-top: 260px;
  gap: 6px;
  margin-right: 40px;
`;

export const SubtitleDots = styled.div`
  height: 4px;
  width: 4px;
  background-color: #fff;
  border-radius: 50%;
`;

export const DotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  margin-right: -10px;
  color: #fff;
`;

export const CircleOuter = styled.div`
  position: absolute;
  border: 1px solid #fff;
  padding: 3px;
  border-radius: 50px;
  /* margin-top: 220px; */
  margin-top: ${({ positiontop }) =>
    positiontop < 11 ? 220 - positiontop * 12 : positiontop * 10}px;
  margin-left: ${({ position }) => position}px;
`;
export const CircleInner = styled.div`
  height: 8px;
  width: 8px;
  border: 2px solid transparent;
  background: #fff;
  border-radius: 50%;
`;

export const SphinxContainer = styled.div`
  color: #fff;
  position: absolute;
  margin-top: 100px;
  margin-left: 600px;
  width: 120px;
  text-align: center;
`;

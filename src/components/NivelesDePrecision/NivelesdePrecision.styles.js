import { styled } from "styled-components";

export const NDPContainer = styled.div`
  display: flex;
  width: 180px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h3 {
    font-weight: 500;
    text-align: center;
    color: white;
    width: 88px;
  }
  & > img {
    width: 30px;
    height: 30px;
    margin-top: -10px;
    margin-bottom: -8px;
  }
`;

export const FirstDiv = styled.div`
  border: 6px solid #9044f7;
  height: 85px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecondDiv = styled.div`
  border: 6px solid #f57699;
  height: 65px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThirdDiv = styled.div`
  border: 6px solid #5ee2e7;
  height: 45px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FourthDiv = styled.div`
  border: 2px solid #ffc665;
  height: 25px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelHolder = styled.div`
  width: 200px;
  margin-top: 6px;
  margin-left: 30px;
  margin-right: -30px;
  display: grid;
  grid-template-columns: 2fr 2fr;
`;

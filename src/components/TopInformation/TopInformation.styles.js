import { styled } from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  min-height: 100%;
  width: 900px;
`;

export const IdContainer = styled.div`
  background: transparent;
  display: flex;
  height: fit-content;
  width: 100%;
  justify-content: end;

  & > h2 {
    color: #fff;
    padding-left: 16px;
    font-weight: 100;
    background-color: #55c7cd;
  }
`;

export const NameImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const ProfileImg = styled.img`
  border: 4px solid #fff;
  border-radius: 50%;
  height: 172px;
`;

export const Divisor = styled.div`
  height: 170px;
  width: 4px;
  background: #fff;
  margin-left: -20px;
  margin-right: 20px;
`;

export const NameOutlined = styled.h1`
  font-size: 80px;
  font-weight: 700;
  color: transparent;
  text-align: right;
  -webkit-text-stroke: 2px #fff;
`;
export const NameFilled = styled.h1`
  font-size: 80px;
  font-weight: 700;
  text-align: right;
  color: #fff;
  text-shadow: 6px 4px #8f919c;
`;

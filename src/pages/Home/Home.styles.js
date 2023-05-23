import { styled } from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  min-height: 100%;
  width: 750px;
`;

export const DuoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const HomeFooter = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  width: 100%;

  & > h3 {
    border-top: 2px solid #fff;
    color: #fff;
    font-weight: 100;
    padding: 10px 30px;
    text-align: center;
    width: fit-content;
  }
`;

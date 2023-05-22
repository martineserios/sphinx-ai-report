import { styled } from "styled-components";

export const ContainerStyled = styled.div`
  background-color: #56506f;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  & > h3 {
    background-image: linear-gradient(to right, #ffc561, #cd6a83);
    margin-top: 0;
    width: 100%;
  }
`;

import { styled } from "styled-components";

export const ContainerStyled = styled.div`
  background-color: #56506f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  padding-top: 0%;
  width: max-content;
`;

export const ContainerTitle = styled.h3`
  background-image: linear-gradient(to right, #ffc561, #cd6a83);
  color: #fff;
  font-weight: 200;
  text-align: ${({ textAlign }) => textAlign || "left"};
  margin-top: 0;
  margin-bottom: 10px;
  padding: 2px 10px;
  width: 100%;
`;

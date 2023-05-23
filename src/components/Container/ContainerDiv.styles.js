import { styled } from "styled-components";

export const ContainerStyled = styled.div`
  background-color: #56506f;
  border-radius: ${({ rounded }) => (rounded ? "20px" : "none")};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding: ${({ divPadding }) => divPadding || "10px"};
  padding-top: 0px;
  width: max-content;
`;

export const ContainerTitle = styled.h3`
  ${(props) =>
    props.textAlign === "right"
      ? "background-image: linear-gradient(to left, #ffc561, #cd6a83);"
      : "background-image: linear-gradient(to right, #ffc561, #cd6a83);"}
  color: #fff;
  top: 0;
  font-weight: 200;
  text-align: ${({ textAlign }) => textAlign || "left"};
  margin-bottom: 20px;
  padding: ${({ divPadding }) => divPadding || "2px 10px"};
  width: 100%;
`;

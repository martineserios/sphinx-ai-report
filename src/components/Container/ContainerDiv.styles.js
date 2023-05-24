import { styled } from "styled-components";

export const ContainerStyled = styled.div`
  background-color: #56506f;
  border-radius: ${({ rounded }) => (rounded === "true" ? "20px" : "none")};
  margin-top: ${({ rounded }) => (rounded === "true" ? "10px" : "none")};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const ContainerTitle = styled.h3`
  ${(props) =>
    props.textalign === "right"
      ? "background-image: linear-gradient(to left, #ffc561, #FCA175, #cd6a83, #4F5056);"
      : "background-image: linear-gradient(to right, #ffc561, #FCA175, #cd6a83, #4F5056);"}
  color: #fff;
  top: 0;
  font-weight: 200;
  font-size: 17px;
  text-align: ${({ textalign }) => textalign || "left"};
  text-indent: 6px;
  padding: 3px 0;
  ${(props) =>
    props.textbox === "true"
      ? "width: fit-content; padding-right: 100px;"
      : "width: 100%"}
`;

export const ContainerHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContainerChild = styled.div`
  width: ${({ contwidth }) => contwidth || "100%"};
`;

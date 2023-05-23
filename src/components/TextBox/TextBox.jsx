import { styled } from "styled-components";
import { ContainerDiv } from "../index";

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 720px;
  gap: 20px;
  & > p {
    color: #fff;
    line-height: 22px;
    text-align: justify;
    width: 50%;
  }
`;

export const TextBox = ({ title, textL, textR }) => {
  return (
    <ContainerDiv title={title}>
      <TextContainer>
        <p>{textL}</p>
        <p>{textR}</p>
      </TextContainer>
    </ContainerDiv>
  );
};

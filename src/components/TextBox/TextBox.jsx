import { styled } from "styled-components";
import { ContainerDiv } from "../index";

const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 12px 6px;
  width: 730px;
  gap: 20px;
  & > p {
    color: #fff;
    line-height: 22px;
    text-align: justify;
    width: ${({ widthh }) => (widthh ? "50%" : "auto")};
  }
`;

export const TextBox = ({ title, textL, textR, children }) => {
  return (
    <ContainerDiv textBox="true" title={title}>
      <TextContainer widthh={textR}>
        {children}
        <p>{textL}</p>
        {textR ? <p>{textR}</p> : <></>}
      </TextContainer>
    </ContainerDiv>
  );
};

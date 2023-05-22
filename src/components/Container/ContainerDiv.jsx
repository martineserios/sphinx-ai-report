import { ContainerStyled, ContainerTitle } from "./ContainerDiv.styles";

export const ContainerDiv = (props) => {
  return (
    <ContainerStyled>
      <ContainerTitle textAlign={props.titleDirection}>
        {props.title}
      </ContainerTitle>
      {props.children}
    </ContainerStyled>
  );
};

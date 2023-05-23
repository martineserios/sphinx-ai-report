import { ContainerStyled, ContainerTitle } from "./ContainerDiv.styles";

export const ContainerDiv = (props) => {
  return (
    <div>
      <ContainerStyled divPadding={props.dPadding} rounded={props.rounded}>
        <ContainerTitle divPadding={props.dPadding} textAlign={props.titleDirection}>
          {props.title}
        </ContainerTitle>
        {props.children}
      </ContainerStyled>
    </div>
  );
};

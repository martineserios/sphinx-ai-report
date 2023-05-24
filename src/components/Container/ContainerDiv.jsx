import {
  ContainerChild,
  ContainerHolder,
  ContainerStyled,
  ContainerTitle,
} from "./ContainerDiv.styles";

export const ContainerDiv = (props) => {
  return (
    <ContainerHolder contwidth={props.contwidth}>
      <ContainerChild>
        <ContainerTitle textbox={props.textBox} textalign={props.titleDirection}>
          {props.title}
        </ContainerTitle>
      </ContainerChild>
      <ContainerChild>
        <ContainerStyled rounded={props.rounded ? "true" : "false"}>
          {props.children}
        </ContainerStyled>
      </ContainerChild>
    </ContainerHolder>
  );
};

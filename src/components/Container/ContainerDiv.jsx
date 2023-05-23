import {
  ContainerChild,
  ContainerHolder,
  ContainerStyled,
  ContainerTitle,
} from "./ContainerDiv.styles";

export const ContainerDiv = (props) => {
  return (
    <ContainerHolder>
      <ContainerChild>
        <ContainerTitle
          divpadding={props.dPadding}
          textalign={props.titleDirection}
        >
          {props.title}
        </ContainerTitle>
      </ContainerChild>
      <ContainerChild>
        <ContainerStyled
          divpadding={props.dPadding}
          rounded={props.rounded ? "true" : "false"}
        >
          {props.children}
        </ContainerStyled>
      </ContainerChild>
    </ContainerHolder>
  );
};

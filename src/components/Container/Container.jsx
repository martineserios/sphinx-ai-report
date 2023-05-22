import { ContainerStyled } from "./Container.styles";

export const Container = (props) => {
  return (
    <ContainerStyled>
      <h3>{props.title}</h3>
      {props.children}
    </ContainerStyled>
  );
};

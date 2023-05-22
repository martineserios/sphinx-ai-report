import { logo } from "../../assets";
import {
  LogoContainer,
  PageLogo,
  PageSectionStyled,
} from "./PageSection.styles";

export const PageSection = (props) => {
  return (
    <>
      <PageSectionStyled>
        <LogoContainer>
          <PageLogo src={logo} />
        </LogoContainer>
        {props.children}
      </PageSectionStyled>
    </>
  );
};

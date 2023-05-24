import { styled } from "styled-components";

const HeaderContainer = styled.div`
  color: #fff;
  margin-bottom: 20px;

  & > h3 {
    font-size: 14px;
    font-weight: 500;
  }

  & > h2 {
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    text-shadow: 2px 2px #8f919c;
    border-top: 3px solid #fff;
    margin: 12px 0;
    padding: 12px 6px 0 0;
    width: fit-content;
  }

  & > p {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Header = ({ upTitle, title, text }) => {
  return (
    <>
      <HeaderContainer>
        <h3>{upTitle}</h3>
        <h2>{title}</h2>
        <p>{text}</p>
      </HeaderContainer>
    </>
  );
};

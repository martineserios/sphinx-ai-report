import { styled } from "styled-components";
import { ejes, whiteUp } from "../../assets";

const EjesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  & > h3 {
    font-weight: 500;
    margin-top: -8px;
  }
  & > img {
    height: 100px;
  }
`;

export const Ejes = () => {
  return (
    <EjesContainer>
      <h3>Ejes</h3>
      <img
        style={{ width: "30px", height: "30px", marginTop: "-6px" }}
        src={whiteUp}
      />
      <img style={{ marginTop: "-16px", marginRight: "-4px", marginBottom:"-16px" }} src={ejes} />
    </EjesContainer>
  );
};

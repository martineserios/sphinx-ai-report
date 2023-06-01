import { styled } from "styled-components";
import { profilebbm, whiteUp } from "../../assets";

const SoftwareBBMContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-top: 20px;

  & > img {
    margin-top: -10px;
    width: 30px;
  }

  & > h3 {
    font-size: 18px;
    font-weight: 500;
  }
`;

const OutsideContainer = styled.div`
  border: 6px solid #ffc65e;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  width: 170px;
`;

const InsideContainer = styled.div`
  border: 3px solid #c8e263;
  height: 210px;
  width: 140px;

  & > img {
    width: 140px;
    object-fit: cover;
    height: 210px;
  }
`;

export const SoftwareBBM = () => {
  return (
    <>
      <SoftwareBBMContainer>
        <h3>Software</h3>
        <h3>BBM</h3>
        <img src={whiteUp} />
        <OutsideContainer>
          <InsideContainer>
            <img src={profilebbm} />
          </InsideContainer>
        </OutsideContainer>
      </SoftwareBBMContainer>
    </>
  );
};

import { styled } from "styled-components";
import { ContainerDiv, RankingAnimal } from "../index";
import { up } from "../../assets";

const RankContainer = styled.div`
  align-items: center;
  display: flex;
  color: #fff;
  margin: 8px 20px;

  & > h3 {
    font-size: 40px;
  }

  & > p {
    font-size: 15px;
    text-align: center;
  }

  & > img {
    height: 24px;
  }
`;

export const EloIndex = (props) => {
  return (
    <ContainerDiv title="SPHINX ELO INDEX">
      <RankingAnimal ranking={props.ranking} starmarginleft={30} />
      <RankContainer>
        <h3>
          {props.ranking}
          <span>/</span>
        </h3>
        <img src={up} />
        <p>
          Ranking <br /> actual
        </p>
      </RankContainer>
    </ContainerDiv>
  );
};

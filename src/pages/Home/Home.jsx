import { profile } from "../../assets";
import {
  ContainerDiv,
  EloIndex,
  PageSection,
  RankingAnimal,
} from "../../components";
import data from "../../data/data";
import {
  Divisor,
  HomeStyled,
  IdContainer,
  NameFilled,
  NameImgContainer,
  NameOutlined,
  ProfileImg,
} from "./Home.styles";

export const Home = () => {
  return (
    <PageSection>
      <HomeStyled>
        <IdContainer>
          <h2>ID {data.id}</h2>
        </IdContainer>
        <NameImgContainer>
          <ProfileImg src={profile} />
          <Divisor />
          <div>
            <NameOutlined>{data.firstName.toUpperCase()}</NameOutlined>
            <NameFilled>{data.lastName.toUpperCase()}</NameFilled>
          </div>
        </NameImgContainer>
        <EloIndex ranking={data.ranking} />
      </HomeStyled>
    </PageSection>
  );
};

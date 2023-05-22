import { EloIndex, PageSection, TopInformation } from "../../components";
import data from "../../data/data";
import { HomeStyled } from "./Home.styles";

export const Home = () => {
  return (
    <PageSection>
      <HomeStyled>

        <TopInformation
          id={data.id}
          firstName={data.firstName}
          lastName={data.lastName}
        />

        <EloIndex ranking={data.ranking} />
        
      </HomeStyled>
    </PageSection>
  );
};

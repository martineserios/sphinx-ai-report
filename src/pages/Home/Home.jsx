import {
  AsimetriaFuncional,
  EloIndex,
  PageSection,
  TopInformation,
} from "../../components";
import { VisionPerformance } from "../../components/VisionPerformance/VisionPerformance";
import data from "../../data/data";
import { DuoContainer, HomeStyled } from "./Home.styles";

export const Home = () => {
  return (
    <PageSection>
      <HomeStyled>
        <TopInformation
          id={data.id}
          firstName={data.firstName}
          lastName={data.lastName}
        />
        <DuoContainer>
          <EloIndex ranking={data.ranking} />
          <VisionPerformance progress={data.visionPerformance} />
        </DuoContainer>
        <DuoContainer>
          <AsimetriaFuncional radioValue={data.asimetriaFuncional} />
        </DuoContainer>
      </HomeStyled>
    </PageSection>
  );
};

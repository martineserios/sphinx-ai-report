import { profile } from "../../assets";
import {
  Divisor,
  IdContainer,
  NameFilled,
  NameImgContainer,
  NameOutlined,
  ProfileImg,
  TopContainer,
} from "./TopInformation.styles";

export const TopInformation = (props) => {
  return (
    <>
      <IdContainer>
        <h2>ID {props.id}</h2>
      </IdContainer>
      <NameImgContainer>
        <ProfileImg src={profile} />
        <Divisor />
        <div>
          <NameOutlined>{props.firstName.toUpperCase()}</NameOutlined>
          <NameFilled>{props.lastName.toUpperCase()}</NameFilled>
        </div>
      </NameImgContainer>
    </>
  );
};

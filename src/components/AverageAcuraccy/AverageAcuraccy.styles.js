import { styled } from "styled-components";

export const InclinedDiv = styled.div`
  width: 50px;
  height: ${({ diheight }) => diheight};
  background-color: transparent;
  border-left: ${({ borderleft }) => (borderleft ? "1px solid #fff" : "")};
  border-bottom: ${({ borderbottom }) =>
    borderbottom ? "1px solid #fff" : ""};
  border-top: ${({ bordertop }) => (bordertop ? "1px solid #fff" : "")};
  border-right: ${({ borderright }) => (borderright ? "1px solid #fff" : "")};
  position: absolute;
  z-index: 999;
  transform: ${({ skewx }) => skewx};
  margin-top: ${({ margintop }) => margintop};
  margin-left: ${({ marginleft }) => marginleft};

  &::before,
  &::after {
    content: "${(props) => props.content}";
    position: absolute;
    margin-left: 6px;
    margin-bottom: ${({ marginbottomlabel }) => marginbottomlabel || "0"};
    transform: ${({ skewxb }) => skewxb};
    color: white;
    bottom: 0;
    background-color: inherit;
  }
`;

export const AVLabelContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  margin-top: ${({ labelmargintop }) => labelmargintop};
  margin-left: ${({ labelmarginleft }) => labelmarginleft};
`;

export const AVDotLabel = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const AVLabelText = styled.span`
  color: ${({ color }) => color || "#fff"};
  font-size: 12px;
  font-weight: ${({ labelweigth }) => labelweigth || "500"};
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const AVTitle = styled.span`
  color: #fff;
  position: absolute;
  margin-top: ${({ titlemargintop }) => titlemargintop};
  margin-left: ${({ titlemarginleft }) => titlemarginleft};
  border-bottom: 2px solid #a87b2c;
  padding: 0px 10px;
`;

export const SvgImg = styled.img`
  position: absolute;
  height: 18px;
  margin-top: ${({ imgmargintop }) => imgmargintop};
  margin-left: ${({ imgmarginleft }) => imgmarginleft};
`;

import { styled } from "styled-components";

export const BDInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  margin: 6px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #c8e25f;
  box-shadow: 0 0 0 1px grey;

  &:checked {
    appearance: none;
    -webkit-appearance: none;
    border-radius: 50%;
    border: 4px solid #dc4f49d9;
    box-shadow: 1px 0px 10px 0px red;
    z-index: 50;
  }
`;

export const DBTable = styled.table`
  color: #c8e25f;
  border-collapse: collapse;
  margin: 8px;
  & > tbody > tr > th {
    border: 2px solid #6f737c;
    margin: 0px;
  }
`;

export const BDLabel = styled.span`
  font-weight: 100;
  z-index: 999;
`;

export const BGVertical = styled.div`
  background: #6f737c;
  height: 150px;
  width: 14px;
  border-radius: 20px;
  z-index: 1;
  margin-top: -150px;
  margin-left: -2px;
`;
export const BGHorizontal = styled.div`
  background: #6f737c;
  height: 14px;
  width: 140px;
  border-radius: 20px;
  z-index: 1;
  margin-top: -175px;
  margin-right: -160px;
  margin-left: 26px;
`;

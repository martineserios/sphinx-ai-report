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
  margin: 14px;
  margin-left: -12px;
  position: relative;
  width: 200px;
  height: 200px;
  & > tbody > tr > th {
    border: 2px solid #6f737c;
    margin: 0px;
  }
`;

export const BDLabel = styled.span`
  font-weight: 100;
  color: transparent;
`;

export const BGVertical = styled.div`
  background: #6f737c;
  height: 170px;
  width: 14px;
  position: absolute;
  border-radius: 20px;
  z-index: 1;
  margin-top: 40px;
  margin-left: -196px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #c8e25f;
  align-items: center;

`;
export const BGHorizontal = styled.div`
  align-items: center;
  color: #c8e25f;
  display: flex;
  justify-content: space-evenly;
  background: #6f737c;
  height: 14px;
  position: absolute;
  width: 165px;
  border-radius: 20px;
  z-index: 1;
  margin-top: 14px;
  margin-right: 0px;
  margin-left: 10px;
`;

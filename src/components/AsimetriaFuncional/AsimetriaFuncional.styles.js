import { styled } from "styled-components";

export const InputRadio = styled.input`
  appearance: none;
  -webkit-appearance: none;
  border-radius: 50%;
  background: grey;
  border: 6px solid grey;
  box-shadow: 0 0 0 1px grey;

  &:checked {
    appearance: none;
    -webkit-appearance: none;
    border-radius: 50%;
    background: #ffc661;
    border: 6px solid #ffc661;
    box-shadow: 0 0 0 1px #ffc661;
    z-index: 50;
  }
`;

export const TableStyled = styled.table`
  color: #fff;
  text-align: left;
  margin: 6px 16px;
  width: 100%;

  & > tbody > tr > th {
    font-weight: 500;
    line-height: 20px;
  }
`;

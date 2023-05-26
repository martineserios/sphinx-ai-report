import { ContainerDiv } from "../index";
import {
  BDInput,
  DBTable,
  BDLabel,
  BGVertical,
  BGHorizontal,
} from "./BlinkDuration.styles";

export const BlinkDuration = ({ radioValue }) => {
  return (
    <ContainerDiv rounded title="BLINK DURATION">
      <DBTable>
        <thead>
          <tr>
            <th></th>
            <th style={{ paddingBottom: "8px" }}>
              <BDLabel>A</BDLabel>
            </th>
            <th style={{ paddingBottom: "8px" }}>
              <BDLabel>B</BDLabel>
            </th>
            <th style={{ paddingBottom: "8px" }}>
              <BDLabel>C</BDLabel>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ border: "none", paddingRight: "20px" }}>
              <BDLabel>1</BDLabel>
            </th>
            <th
              style={{
                borderTop: "5px solid #6f737c",
                borderLeft: "5px solid #6f737c",
              }}
            >
              <BDInput
                type="radio"
                id="bDA1"
                checked={radioValue.toUpperCase() === "A1" ? true : false}
                name="bDuration"
                readOnly
                value="I"
              />
            </th>
            <th
              style={{
                borderTop: "5px solid #6f737c",
              }}
            >
              <BDInput
                type="radio"
                id="bDA2"
                checked={radioValue.toUpperCase() === "B1" ? true : false}
                name="bDuration"
                readOnly
                value="I"
              />
            </th>
            <th
              style={{
                borderTop: "5px solid #6f737c",
                borderRight: "5px solid #6f737c",
              }}
            >
              <BDInput
                type="radio"
                id="BDA3"
                checked={radioValue.toUpperCase() === "C1" ? true : false}
                name="bDuration"
                readOnly
                value="I"
              />
            </th>
          </tr>
          <tr>
            <th style={{ border: "none", paddingRight: "20px" }}>
              <BDLabel>2</BDLabel>
            </th>
            <th
              style={{
                borderLeft: "5px solid #6f737c",
              }}
            >
              <BDInput
                type="radio"
                id="bDB1"
                checked={radioValue.toUpperCase() === "A2" ? true : false}
                name="bDuration"
                readOnly
                value="I"
              />
            </th>
            <th>
              <BDInput
                type="radio"
                id="bDB2"
                checked={radioValue.toUpperCase() === "B2" ? true : false}
                name="bDuration"
                readOnly
                value="I"
              />
            </th>
            <th
              style={{
                borderRight: "5px solid #6f737c",
              }}
            >
              <BDInput
                type="radio"
                id="bDB3"
                checked={radioValue.toUpperCase() === "C2" ? true : false}
                name="bDuration"
                readOnly
                value="I"
              />
            </th>
          </tr>
          <tr>
            <th style={{ border: "none", paddingRight: "20px" }}>
              <BDLabel>3</BDLabel>
            </th>
            <th
              style={{
                borderLeft: "5px solid #6f737c",
                borderBottom: "5px solid #6f737c",
              }}
            >
              <BDInput
                type="radio"
                id="cDB1"
                checked={radioValue.toUpperCase() === "A3" ? true : false}
                name="bDuration"
                readOnly
                value="I"
              />
            </th>
            <th
              style={{
                borderBottom: "5px solid #6f737c",
              }}
            >
              <BDInput
                type="radio"
                id="cDB2"
                checked={radioValue.toUpperCase() === "B3" ? true : false}
                name="bDuration"
                readOnly
                value="I"
              />
            </th>
            <th
              style={{
                borderRight: "5px solid #6f737c",
                borderBottom: "5px solid #6f737c",
              }}
            >
              <BDInput
                type="radio"
                id="cDB3"
                checked={radioValue.toUpperCase() === "C3" ? true : false}
                name="bDuration"
                readOnly
                value="I"
              />
            </th>
          </tr>
        </tbody>
      </DBTable>
      <BGVertical>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </BGVertical>
      <BGHorizontal>
        <p>A</p>
        <p>B</p>
        <p>C</p>
      </BGHorizontal>
    </ContainerDiv>
  );
};

import { ContainerDiv } from "../index";
import { InputRadio, TableStyled } from "./AsimetriaFuncional.styles";

export const AsimetriaFuncional = (props) => {
  return (
    <ContainerDiv title="ASIMETRÍA FUNCIONAL" rounded>
      <TableStyled>
        <thead>
          <tr>
            <th></th>
            <th style={{ fontWeight: "900" }}>I</th>
            <th style={{ fontWeight: "900" }}>D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label htmlFor="ojoTecnico">Ojo Técnico</label>
            </th>
            <th>
              <InputRadio
                type="radio"
                id="ojoTecnicoI"
                defaultChecked={
                  props.radioValue.ojoTecnico === "I" ? true : false
                }
                name="ojoTecnico"
                value="I"
                readOnly
              />
            </th>
            <th>
              <InputRadio
                type="radio"
                id="ojoTecnicoD"
                checked={props.radioValue.ojoTecnico === "D" ? true : false}
                name="ojoTecnico"
                readOnly
                value="D"
              />
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="ojoTactico">Ojo Táctico</label>
            </th>
            <th>
              <InputRadio
                type="radio"
                id="ojoTacticoI"
                checked={props.radioValue.ojoTactico === "I" ? true : false}
                name="ojoTactico"
                readOnly
                value="I"
              />
            </th>
            <th>
              <InputRadio
                type="radio"
                id="ojoTacticoD"
                checked={props.radioValue.ojoTactico === "D" ? true : false}
                name="ojoTactico"
                readOnly
                value="D"
              />
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="hombro">Hombro</label>
            </th>
            <th>
              <InputRadio
                type="radio"
                id="hombroI"
                checked={props.radioValue.hombro === "I" ? true : false}
                name="hombro"
                readOnly
                value="I"
              />
            </th>
            <th>
              <InputRadio
                type="radio"
                id="hombroD"
                checked={props.radioValue.hombro === "D" ? true : false}
                name="hombro"
                readOnly
                value="D"
              />
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="cadera">Cadera</label>
            </th>
            <th>
              <InputRadio
                type="radio"
                id="caderaI"
                checked={props.radioValue.cadera === "I" ? true : false}
                name="cadera"
                readOnly
                value="I"
              />
            </th>
            <th>
              <InputRadio
                type="radio"
                id="caderaD"
                checked={props.radioValue.cadera === "D" ? true : false}
                name="cadera"
                readOnly
                value="D"
              />
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="piernaDinamica">Pierna dinámica</label>
            </th>
            <th>
              <InputRadio
                type="radio"
                id="piernaDinamicaI"
                checked={props.radioValue.piernaDinamica === "I" ? true : false}
                name="piernaDinamica"
                readOnly
                value="I"
              />
            </th>
            <th>
              <InputRadio
                type="radio"
                id="piernaDinamicaD"
                checked={props.radioValue.piernaDinamica === "D" ? true : false}
                name="piernaDinamica"
                readOnly
                value="D"
              />
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="piernaApoyo">Pierna de apoyo</label>
            </th>
            <th>
              <InputRadio
                type="radio"
                id="piernaApoyoI"
                checked={props.radioValue.piernaApoyo === "I" ? true : false}
                name="piernaApoyo"
                readOnly
                value="I"
              />
            </th>
            <th>
              <InputRadio
                type="radio"
                id="piernaApoyoD"
                checked={props.radioValue.piernaApoyo === "D" ? true : false}
                name="piernaApoyo"
                readOnly
                value="D"
              />
            </th>
          </tr>

          <tr>
            <th>
              <label htmlFor="piernaCoord">Pierna de coord fina</label>
            </th>
            <th>
              <InputRadio
                type="radio"
                id="piernaCoordI"
                checked={props.radioValue.pirnaCood === "I" ? true : false}
                name="piernaCoord"
                readOnly
                value="I"
              />
            </th>
            <th>
              <InputRadio
                type="radio"
                id="piernaCoordD"
                checked={props.radioValue.pirnaCood === "D" ? true : false}
                name="piernaCoord"
                readOnly
                value="D"
              />
            </th>
          </tr>
        </tbody>
      </TableStyled>
    </ContainerDiv>
  );
};

import "./ChooseProgram.style.scss";
import "../../_settings/_base.scss";
import "../../atoms/button/Button.styles.scss"
import ChooseProgram from "./ChooseProgram";
export default {
  title: "Components/molecules/ChooseProgram",
  component: ChooseProgram,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};
  /**
   * Vista cuando el programa activo es Academy
   */
export const ChooseProgramAcademy = {
  args: {
    programa: "academy",
  },
};
  /**
   * Vista cuando el programa activo es School
   */
export const ChooseProgramSchool = {
    args: {
      programa: "school",
    },
  };

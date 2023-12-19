import Button from "./Button";
import "./Button.styles.scss"
export default {
  title: "Components/atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: "Boton",
    className:""
  },
};
  /**
   * Boton para seleccionar la lista de recursos que se quiere mostrar
   */
export const ButtonTab = {
  args: {
    className: "button-tab",
    children: "tab button"

  },
};
export const ButtonShow = {
    args: {
      className: "button-show",
      children: "ver mas"
  
    },
  };

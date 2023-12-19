import Button from "./Button";
import "./Button.styles.scss";
export default {
  title: "Components/atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: "Boton",
    className: "",
  },
};
/**
 * Boton para seleccionar la lista de recursos que se quiere mostrar
 */
export const ButtonPrimary={
  args:{
    className: "button-primary",
    children: "Boton",
  },
}
/**
 * Boton para seleccionar la lista de recursos que se quiere mostrar
 */
export const ButtonTab = {
  args: {
    className: "button-tab",
    children: "tab button",
  },
};
/**
 * Boton para mostrar contenido adicional 
 */
export const ButtonShow = {
  args: {
    className: "button-show",
    children: "ver mas",
  },
};
/**
 * Boton
 */
export const ButtonSlider = {
  args: {
    className: "button-slider",
    children: "¡Explora Programas!",
  },
};
/**
 * Boton 
 */
export const ButtonCard = {
  args: {
    className: "button-card",
    children: "Ver programa",
  },
};
export const ButtonForm={
  args: {
    className: "button-form",
    children: "Enviar",
  },

}
export const ButtonProgram={
  args: {
    className: "program-button",
    children: "Iniciar programa",
  },
  
}
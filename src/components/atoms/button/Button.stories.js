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
    className: "button-primary",
  },
};
/**
 * Boton primario usado en el home para ir a los cursos
 */
export const ButtonPrimary={
  args:{
    className: "button-primary",
    children: "Boton",
  },
}
/**
 * Boton secundario usado para programas y el formulario
 */
export const ButtonSecondary={
  args: {
    className: "button-secondary",
    children: "Enviar",
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
 * Boton que acompaña el slider para poder exprorar los programas
 */
export const ButtonSlider = {
  args: {
    className: "button-slider",
    children: "¡Explora Programas!",
  },
};
/**
 * Boton para las card de home
 */
export const ButtonCard = {
  args: {
    className: "button-card",
    children: "Ver programa",
  },
};


import ListItem from "./ListItem";
import "./ListItem.style.scss"
export default {
  title: "Components/atoms/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
  },
};
  /**
   * Boton para seleccionar la lista de recursos que se quiere mostrar
   */
export const ListIte = {
  args: {
    className: "list-item",
    children: "Curso JavaScript"

  },
};

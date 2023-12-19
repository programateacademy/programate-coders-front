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
   * Li(listItem) para seleccionar el recurso que se quiere mostrar
   */
export const ListIte = {
  args: {
    className: "list-item",
    children: "Curso JavaScript"

  },
};

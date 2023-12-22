import ListItem from "./ListItem";
import "./ListItem.style.scss"
import "../../_settings/_base.scss";

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
   * Li(listItem) para mostrar los tilulos de los recursos y seleccionar el recurso que se quiere cargar
   */
export const ListItemDefault = {
  args: {
    className: "list-item",
    children: "Curso JavaScript"

  },
};

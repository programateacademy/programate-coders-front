import Card from"./Card";
import "./Card.styles.scss"
import javascript from "../../../assets/Imagenes/Cards/Programate/javascript.svg"
export default {
    title: "Components/atoms/Card",
    component: Card,
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
  export const card = {
    args: {
        title: "javascript",
        image: javascript
  
    },
  };
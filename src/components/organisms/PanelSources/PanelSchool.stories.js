import"../../../styles.scss"
import PanelSchool from "./PanelSchool";
export default {
    title: "Components/organisms/PanelAcademy",
    component: PanelSchool,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
      programa:"school"
    },
  };
/**
* 
*/
export const PanelSchoolDefault={
    argTypes: {
      programa:"school"
      },

}
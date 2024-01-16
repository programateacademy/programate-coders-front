import TabList from "./TabList";
import"./TabList.styles.scss"
import "../../_settings/_base.scss";
import "../../atoms/button/Button.styles.scss"
export default {
    title: "Components/molecules/TabList",
    component: TabList,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
  };

export const TabListDefault={
    args:{
        programa:"school",

    }
  }
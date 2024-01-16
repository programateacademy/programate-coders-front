import ListDrive from "./ListDrive";
import "../../_settings/_base.scss";
import "../../atoms/ListItem/ListItem.style.scss"
import "./ListDrive.scss"
import programateAcademyData from "../../../DataBases/programateAcademyData";
const workbooks= programateAcademyData.workbooks
export default {
    title: "Components/molecules/ListDrive",
    component: ListDrive,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
    },
  };
export const ListDriveDefault={
    args:{
        sources:workbooks,
        nameSource:"videos"
    }

}
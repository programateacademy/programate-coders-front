import { create } from "zustand";
import programateAcademyData from "../DataBases/programateAcademyData";
import programateSchoolData from "../DataBases/programateSchoolData";
export const programateStore = create((set) => ({
  programa:"academy",
  SelectedResource: "",
  fileType: "videos",
  playList: programateAcademyData.videos,
  filterItems:programateSchoolData.videos,
  workbooks: {
    academy: programateAcademyData.workbooks,
    school: programateSchoolData.workbooks,
  },
  videos: {
    academy: "",
    school: programateSchoolData.videos,
  },
  language: "JavaScript",
  languageYoutube:"JavaScript",
  setPrograma:(newprograma) => set({ programa: newprograma }),
  setFilterItems:(videos) => set({ filterItems: videos }),
  setFileType: (newType) => set({ fileType: newType }),
  setLanguage: (newlanguage) => set({ language: newlanguage }),
  setLanguageYoutube: (newlanguage) => set({ languageYoutube: newlanguage }),
  setSelectedResource: (video) => set({ SelectedResource: video }),
}));

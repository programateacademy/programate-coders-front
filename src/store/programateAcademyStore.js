import { create } from "zustand";
import programateAcademyData from "../DataBases/programateAcademyData";
import programateSchoolData from "../DataBases/programateSchoolData";
export const programateAcademyStore = create((set) => ({
  SelectedVideo: "",
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
  setFilterItems:(videos) => set({ filterItems: videos }),
  setFileType: (newType) => set({ fileType: newType }),
  setLanguage: (newlanguage) => set({ language: newlanguage }),
  setLanguageYoutube: (newlanguage) => set({ languageYoutube: newlanguage }),
  setSelectedVideo: (video) => set({ SelectedVideo: video }),
}));

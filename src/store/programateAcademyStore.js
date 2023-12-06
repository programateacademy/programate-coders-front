import { create } from "zustand";
import programateAcademyData from "../DataBases/programateAcademyData";
export const programateAcademyStore = create((set) => ({
    SelectedVideo:"",
    playList:programateAcademyData.videos,
    workbooks:programateAcademyData.workbooks,
    language:"JavaScript",
    setLanguage: (newlanguage) => set({ language: newlanguage }),
    setSelectedVideo:(video)=> set({SelectedVideo:video}),


  }))
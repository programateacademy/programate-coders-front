import { create } from "zustand";
import playListData from "../DataBases/PlayList";
export const videosStore = create((set) => ({
    SelectedResource:"",
    playList:playListData,
    language:"JavaScript",
    setLanguage: (language) => set({ language: language }),
    setSelectedResource:(video)=> set({SelectedResource:video}),


  }))
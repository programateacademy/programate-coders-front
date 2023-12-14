import { create } from "zustand";
import playListData from "../DataBases/PlayList";
export const videosStore = create((set) => ({
    SelectedVideo:"",
    playList:playListData,
    language:"JavaScript",
    setLanguage: (language) => set({ language: language }),
    setSelectedVideo:(video)=> set({SelectedVideo:video}),


  }))
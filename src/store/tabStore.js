import { create } from "zustand";
export const tabStore = create((set) => ({
  programa: "academy",
  tabTogleState: "videos",
  setPrograma:(SelectedPrograma)=> set({programa:SelectedPrograma}),
  setTabTogleState: (newTabTogleState) =>
    set({ tabTogleState: newTabTogleState }),
}));

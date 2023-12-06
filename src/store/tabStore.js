import { create } from "zustand";
export const tabStore = create((set) => ({
        togleState:"videos",
        setTogleState:(newTogleState) => set({ togleState: newTogleState })
  }))
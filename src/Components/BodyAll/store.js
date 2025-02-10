import { create } from "zustand";

const useStore = create((set) => ({
  selectedRegion: null,
  setSelectedRegion: (region) => set({ selectedRegion: region }),
}));

export default useStore;

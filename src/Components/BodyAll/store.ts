import { create } from "zustand";

// Տիպավորում Store-ի համար
interface Store {
  selectedRegion: string | null;
  setSelectedRegion: (region: string | null) => void;
}

// Զուտ Store ստեղծում
const useStore = create<Store>((set) => ({
  selectedRegion: null,
  setSelectedRegion: (region: string | null) => set({ selectedRegion: region }),
}));

export default useStore;

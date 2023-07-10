import { create } from "zustand";

interface SearchStore {
  searchStr: string;
  setSearchStr: (s: string) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
  searchStr: "",
  setSearchStr: (s: string) => set(() => ({ searchStr: s })),
}));

export default useSearchStore;

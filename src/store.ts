import { create } from "zustand";

export interface NoteProp {
  id: string;
  text: string;
  date: string;
}

interface Store {
  notes: NoteProp[];
  addNote: (obj: NoteProp) => void;
  deleteNode: (obj: NoteProp) => void;
  setNotes: (arr: NoteProp[]) => void;
}

const useAppStore = create<Store>((set) => ({
  notes: [
    { id: "0", text: "This is my first Note", date: "5/1/2002" },
    { id: "1", text: "This is my Second Note", date: "5/1/2002" },
  ],
  addNote: (obj: NoteProp) =>
    set((store) => ({ notes: [...store.notes, obj] })),
  deleteNode: (obj: NoteProp) =>
    set((store) => ({ notes: store.notes.filter((n) => n.id !== obj.id) })),
  setNotes: (arr: NoteProp[]) => set(() => ({ notes: arr })),
}));

export default useAppStore;

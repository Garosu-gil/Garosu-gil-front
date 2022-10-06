import create from "zustand";

const useStore = create((set) => ({
  num: 1,
  searchText: "",
  // isForeigner:"false",

  setNum: (number) => set({ num: number }),
  setSearchText: (text) => set({ searchText: text }),
  // setisForeigner,
}));

export default useStore;

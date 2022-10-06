import create from "zustand";

const useStore = create((set) => ({
  // num: 1,
  // searchText: "",
  // queryName: "",

  showDiction: false,
  dictionData: [],

  setShowDiction: (boolean) => set({ showDiction: boolean }),
  setDictionData: (arr) => set({ dictionData: arr }),
  // setNum: (number) => set({ num: number }),
  // setSearchText: (text) => set({ searchText: text }),
  // setQueryName: (name) => set({ qureyName: name }),
}));

export default useStore;

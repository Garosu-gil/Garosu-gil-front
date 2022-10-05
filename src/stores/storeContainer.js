import create from "zustand";

const useStore = create((set) => ({
  num: 1,
  setNum: (number) => set({ num: number }),
}));

export default useStore;

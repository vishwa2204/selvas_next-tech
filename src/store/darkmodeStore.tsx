import { create } from "zustand";

type DarkStore = {
  switchDark: boolean;
  toggleDark: () => void;
  setDark: (value: boolean) => void;
};

export const useDarkStore = create<DarkStore>((set) => ({
  switchDark: false,

  toggleDark: () =>
    set((state) => {
      const newValue = !state.switchDark;
      document.body.classList.toggle("dark", newValue);
      return { switchDark: newValue };
    }),

  setDark: (value) => set({ switchDark: value }),
}));

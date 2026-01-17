import { create } from "zustand";

interface HeaderActionState {
  headTitle: string;
  saveAction: boolean;
  onSave?: () => void;
  setHeader: (data: Partial<HeaderActionState>) => void;
  // resetHeader: () => void;
}

export const useHeaderActionStore = create<HeaderActionState>((set) => ({
  headTitle: "",
  saveAction: false,
  onSave: undefined,
  setHeader: (data) => set((state) => ({ ...state, ...data })),
  // resetHeader:
}));

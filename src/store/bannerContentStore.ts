import { create } from "zustand";

interface BannerContentActions {
  pageTitle: string;
  pageDescription: string;
  pageImage: string;

  setBannerContent: (data: Partial<BannerContentActions>) => void;
}

export const useBannerContentActionStore = create<BannerContentActions>(
  (set) => ({
    pageTitle: "",
    pageDescription: "",
    pageImage: "",
    setBannerContent: (data) => set(data),
  })
);

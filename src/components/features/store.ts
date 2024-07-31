import { create } from 'zustand';

type FeatureStore = {
  inViewFeature: string | null;
  // setInViewFeature: (feature: string | null) => void;
};

export const useFeatureStore = create<FeatureStore>((set) => ({
  inViewFeature: null,
  setInViewFeature: (inViewFeature: string | null) => set({ inViewFeature }),
}));

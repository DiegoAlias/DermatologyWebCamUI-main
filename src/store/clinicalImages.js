import { create } from 'zustand'

export const useClinicalImage = create((set)=>({
  ClinicalImage : {},

  addClinicalImage: (ClinicalImageData) =>
      set((state) => ({ ClinicalImage: { ...state.addClinicalImage, ...ClinicalImageData } })),

  getState: () => ({ClinicalImage: useClinicalImage.getState().ClinicalImage}),
  
}))

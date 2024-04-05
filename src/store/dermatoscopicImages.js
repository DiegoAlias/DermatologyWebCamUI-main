import { create } from 'zustand'

export const useDermatoscopicImage = create((set)=>({
  DermatoscopicImage : {},

  addDermatoscopicImage: (DermatoscopicImageData) =>
      set((state) => ({ DermatoscopicImage: { ...state.addDermatoscopicImage, ...DermatoscopicImageData } })),

  getState: () => ({DermatoscopicImage: useDermatoscopicImage.getState().DermatoscopicImage}),
  
}))

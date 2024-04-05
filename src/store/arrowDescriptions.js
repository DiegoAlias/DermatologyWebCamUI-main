import { create } from 'zustand'

export const useArrowDescriptions = create((set)=>({
  ArrowDescriptions : {},
  
  addArrowDescriptions: (ArrowDescriptionsData) =>
      set((state) => ({ ArrowDescriptions: { ...state.addArrowDescriptions, ...ArrowDescriptionsData } })),

  getState: () => ({ArrowDescriptions: useArrowDescriptions.getState().ArrowDescriptions}),

}))

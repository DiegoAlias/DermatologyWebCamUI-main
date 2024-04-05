import { create } from 'zustand'

export const useArrowCoordinates = create((set)=>({
  ArrowCoordinates : {},

  addArrowCoordinates: (ArrowCoordinatesData) =>
      set((state) => ({ ArrowCoordinates: { ...state.ArrowCoordinates, ...ArrowCoordinatesData } })),

  getState: () => ({ArrowCoordinates: useArrowCoordinates.getState().ArrowCoordinates}),

}))

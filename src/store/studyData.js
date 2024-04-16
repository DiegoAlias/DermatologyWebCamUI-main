import { create } from "zustand";

export const useStudyData = create((set) => ({
  StudyData: {},
  
  addStudy: (studyData) =>
    set((state) => ({ study: { ...state.addStudy, ...studyData } })),

  getState: () => ({ StudyData: useStudyData.getState().StudyData }),
}));


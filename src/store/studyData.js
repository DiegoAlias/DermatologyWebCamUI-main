import { create } from "zustand";

const useStudyData = create((set) => ({
  study: {},
  
  addStudy: (studyData) =>
    set((state) => ({ study: { ...state.study, ...studyData } })),

  getState: () => ({ study: useStudyData.getState().study }),
}));

export default useStudyData;

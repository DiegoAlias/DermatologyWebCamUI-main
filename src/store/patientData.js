import { create } from "zustand";

export const usePatientData = create((set) => ({
    PatientData: {},

    addPatient: (patientData) =>
        set((state) => ({ PatientData: { ...state.addPatient, ...patientData } })),

    getState: () => ({PatientData: usePatientData.getState().PatientData}),

}));

import { create } from "zustand";

const usePatientData = create((set) => ({
    patient: {},

    addPatient: (patientData) =>
        set((state) => ({ patient: { ...state.patient, ...patientData } })),

    getState: () => ({patient: usePatientData.getState().patient}),

}));

export default usePatientData;

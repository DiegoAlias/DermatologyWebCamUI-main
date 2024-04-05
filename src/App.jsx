import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import CanvasComponent from "./components/ClinicalComponents/CapturedPhotoCanvas.jsx";
import usePatientData from "./store/patientData.js";
import useStudyData from "./store/studyData.js";

const App = () => {

  useEffect(() => {
    const populateWindow = () => {
      //TODO: to production => uninstall uuid from node module
      const _id = uuidv4();

      window.patient = {
        _id,
        name: "John",
        lastname: "Doe",
        age: 20,
        Birthday: '28/12/1985',
        DNI: '31949910'
      };

      window.study = {
        studyId: uuidv4(),
        patientId: _id,
        description: "Clinical Frontal",
        duration: "1hs",
        date: new Date().toISOString().toString().split("T")[0],
      }      
    ;

      const { patient, study } = window;

      if (patient && study && _id) {
        // Agregar el paciente al estado
        useStudyData.getState().addStudy(study);
        usePatientData.getState().addPatient(patient);

        // console.log(
        //   "Current state:",
        //   usePatientData.getState(),
        //   useStudyData.getState()
        // );
      }
    };

    populateWindow();
  }, []);

  return (
    <div>
      <CanvasComponent arrowColor="red" />
    </div>
  );
};

export default App;

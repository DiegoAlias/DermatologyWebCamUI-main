import React, { useEffect, useState } from "react";
import { usePatientData } from "../../store/patientData";

const RawPatientData = () => {
  const [patientData, setPatientData] = useState();

  useEffect(() => {
    const getPatientDataFromWindow = () => {
      const { patient } = window;

      if (patient) {
        usePatientData.getState().addPatient({current: patient});        
      }
      return patient;
    };

    setPatientData(getPatientDataFromWindow());
  }, [window.patient]);


  return (
    <div>
      <div className="bg-userdata">
        <div className="font-bold text-center mt-2 mb-2">Patient Data</div>
        <div className="text-center mt-2 mb-2">DEMO</div>
        <div className="">{JSON.stringify(patientData)}</div>
      </div>
    </div>
  );
};

export default RawPatientData;

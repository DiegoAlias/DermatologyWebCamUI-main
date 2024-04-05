import { useEffect, useState } from "react";
import usePatientData from "../../store/patientData.js";

const UserData = () => {
  const [patientData, setPatientData] = useState({});

  useEffect(() => {
    const getPatientDataFromStore = () => {
      const { patient } = usePatientData.getState();
      return patient;
    };
    setPatientData(getPatientDataFromStore());
  }, [patientData]);

  const patientKeys = Object.keys(patientData);

  return (
    <div>
      <img
        className="rounded-full h-32 w-32 mx-auto my-2 border border-white"
        src="./img/descarga.jpg"
        alt="Card image cap"
      />
      <div className="bg-userdata">
        <div className="font-bold text-center mt-2 mb-2">Patient Data</div>
        <div className="">
          <ul className="">
            {patientKeys.slice(1).map((attribute, i) => (
              <li key = {i}>
                {attribute}: {JSON.stringify(patientData[attribute])}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserData;

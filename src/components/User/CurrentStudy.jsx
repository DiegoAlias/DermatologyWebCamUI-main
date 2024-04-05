import { useEffect, useState } from "react";

import useStudyData from "../../store/studyData";

const StudiesHistorial = () => {
  const [studyData, setStudyData] = useState({});

  useEffect(() => {
    const getStudyFromStore = () => {
      const { study } = useStudyData.getState();
      setStudyData(study);
    };

    getStudyFromStore();
  }, [studyData]);

  const studyKeys = Object.keys(studyData);  

  return (
    <div className="bg-userdata">
      <div className="font-bold mb-2">
        <h1>Current Study</h1>
      </div>
      <div>
        <ul className="">
          {studyKeys.slice(2).map((attribute, i) => (
            <li key={i}>{attribute}:{JSON.stringify(studyData[attribute]).replace('"', '')}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudiesHistorial;

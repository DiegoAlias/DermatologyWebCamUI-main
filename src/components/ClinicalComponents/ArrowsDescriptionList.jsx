// CoordinatesList.js
import React, { useState } from "react";
import CoordinatesInput from "./ArrowsDescriptionInput.jsx";
import { FaTrash, FaSearch } from "react-icons/fa";

const CoordinatesList = ({
  lines,  
  onArrowDescriptions,
  onDeleteArrow,
  onArrowHover,
  onArrowHoverOff,
}) => {

  
  const [arrowDescriptions, setArrowDescriptions] = useState(
    new Array(lines.length).fill("")
  );

  const handleArrowClick = (index) => {
    onDeleteArrow(index);
    // Al borrar una flecha, también borra el texto asociado
    const updatedArrowDescriptions = [...arrowDescriptions];
    updatedArrowDescriptions.splice(index, 1);
    setArrowDescriptions(updatedArrowDescriptions);
    onArrowDescriptions(arrowDescriptions);
  };

  const handleLocateClick = (index) => {
    onArrowHover(index);
  };

  const handleMouseLeave = () => {
    onArrowHoverOff();
  };

  const handleDescriptionChange = (index, description) => {
    // Actualiza el estado del texto de la flecha
    const updatedArrowDescriptions = [...arrowDescriptions];
    updatedArrowDescriptions[index] = description;
    setArrowDescriptions(updatedArrowDescriptions);    
    onArrowDescriptions(description);
  };

  return (
    <div className="mt-2 overflow-y-scroll max-h-[500px] max-w-screen-md">
      <div className="text-white text-center">
        <div className="mt-2">
          {" "}
          <h4 className="font-bold">Arrows List</h4>{" "}
        </div>
        <ul className="list-group list-group-flush bg-dark">
          {lines.map((line, index) => (
            <li
              key={index}
              className="list-group-item mx-2 bg-dark"
              style={{ cursor: "pointer" }}
              onMouseOver={() => {
                handleLocateClick(index);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="input-group mb-3">
                Arrow {index + 1}
                <div className="my-2">
                  <button className="mx-2">
                    <FaSearch
                      className="bg-teal-800 p-1.5 rounded-md hover:scale-125 w-6 h-6 bg-"
                      title="Search"
                    />
                  </button>
                  <button
                    className="mx-2"
                    onClick={() => handleArrowClick(index)}
                  >
                    <FaTrash
                      className="bg-teal-800 p-1.5 rounded-md hover:scale-125 w-6 h-6"
                      title="Trash"
                    />
                  </button>
                </div>
                <CoordinatesInput
                  description={arrowDescriptions[index]}
                  onDescriptionChange={(description) =>
                    handleDescriptionChange(index, description)
                  }
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoordinatesList;

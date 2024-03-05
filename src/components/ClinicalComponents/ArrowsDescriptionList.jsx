
// CoordinatesList.js
import React, { useState } from 'react';
import CoordinatesInput from './ArrowsDescriptionInput.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';

const CoordinatesList = ({ lines, onDeleteArrow, onArrowHover, onArrowHoverOff }) => {
    
    const [arrowDescriptions, setArrowDescriptions] = useState(new Array(lines.length).fill(''));

    const handleArrowClick = (index) => {        
        onDeleteArrow(index);
        // Al borrar una flecha, también borra el texto asociado
        const updatedArrowDescriptions = [...arrowDescriptions];
        updatedArrowDescriptions.splice(index, 1);
        setArrowDescriptions(updatedArrowDescriptions);
    };

    const handleLocateClick = (index) =>{
        onArrowHover(index);
    };

    const handleMouseLeave = () =>{
        onArrowHoverOff();
    };

    const handleDescriptionChange = (index, description) => {
        // Actualiza el estado del texto de la flecha
        const updatedArrowDescriptions = [...arrowDescriptions];
        updatedArrowDescriptions[index] = description;
        setArrowDescriptions(updatedArrowDescriptions);
    };

    return (
        <div className="mt-2">
            <div className="card bg-dark text-white">
            <div className="card-title text-center mt-2"> <h4>Arrows List</h4> </div>
                <ul className="list-group list-group-flush bg-dark text-white">
                    {lines.map((line, index) => (
                        <li key={index} className="list-group-item mx-2 bg-dark text-white" style={{ cursor: 'pointer' }} 
                        onMouseOver={()=>{handleLocateClick(index)}}
                        onMouseLeave={handleMouseLeave}
                        >
                            <div className="input-group mb-3">
                            Arrow {index + 1}                         
                                <div className="input-group-prepend">
                                    <button 
                                        className="btn btn-primary mx-2">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                    <button 
                                        className='btn btn-danger mx-2'
                                        onClick={() => handleArrowClick(index)}>
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </div>
                                <CoordinatesInput
                                  description={arrowDescriptions[index]}
                                  onDescriptionChange={(description) => handleDescriptionChange(index, description)}
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

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';


const ImgCapturedButtons = ({ handleReturnToCam, handleSaveThumbnail, handleClearLines }) => {
  return (
    
      <div className="card-footer text-center bg-dark pb-4 mb-2 rounded">
        <button 
            className="btn btn-primary btn-lg" 
            onClick={handleReturnToCam}
            >
            <FontAwesomeIcon icon={faBackwardStep} />
        </button>
        <button
          className="btn btn-success btn-lg mx-2"
          onClick={handleSaveThumbnail}
        >
          <FontAwesomeIcon icon={faSave} />
        </button>
        <button 
            className="btn btn-danger btn-lg" 
            onClick={handleClearLines}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    
  );
};

export default ImgCapturedButtons;

import { useEffect } from "react";
import { FaSave } from "react-icons/fa";

export const DermatoscopicWebCamButtons = ({handleShowDermatoscopicWebcam ,capturedArrowsSet, onArrowDescriptions, onShowDermatoscopicWebcam }) => {
  useEffect(() => {
    console.log({...capturedArrowsSet, onArrowDescriptions})
  }, [])

  const handleReturnToClinical = ()=>{
    handleShowDermatoscopicWebcam(false);
    
  }
  
  return (
    <div>
      <button
        className="text-white mt-2"
      >
        <FaSave
          onClick={handleReturnToClinical}
          className="bg-red-900 p-2 rounded-md hover:scale-125 w-9 h-9 my-1"
          title="Capture"
        />
      </button>
    </div>
  );
};

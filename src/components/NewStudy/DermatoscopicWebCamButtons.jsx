import { FaSave, FaRedo } from "react-icons/fa";

export const DermatoscopicWebCamButtons = (
  {
    handleShowDermatoscopicWebcam ,
    handleShowClinicalWebcam,
    handleCapture    
  }) => {
  
  const handleReturnToClinical = ()=>{ 
    handleCapture();   
    handleShowDermatoscopicWebcam(false);    
  }

  const handleReturnTocleanClinical = ()=>{
    handleShowClinicalWebcam(false);    
  }
  
  return (
    <div>
      <button
        className="text-white mt-2"
      >
        <FaSave
          onClick={handleReturnToClinical}
          className="bg-red-900 p-2 rounded-md hover:scale-125 w-9 h-9 my-1"
          title="Save Image"
        />
      </button>
      <button
        className="text-white mt-2"
      >
        <FaRedo          
          onClick={handleReturnTocleanClinical}
          className="bg-red-900 p-2 rounded-md hover:scale-125 w-9 h-9 my-1 mx-2"
          title="Back"
        />
      </button>
    </div>
  );
};

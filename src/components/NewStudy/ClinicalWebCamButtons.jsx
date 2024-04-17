import { FaCamera } from "react-icons/fa";

export const ClinicalWebCamButtons = ({handleCapture ,loading }) => {
  return (
    <div>
      <button
        className="text-white mt-2"
        onClick={handleCapture}
        disabled={loading}
        title="Capture"
      >
        <FaCamera
          className="bg-red-900 p-2 rounded-md hover:scale-125 w-9 h-9 my-1"
          title="Capture"
        />
      </button>
    </div>
  );
};

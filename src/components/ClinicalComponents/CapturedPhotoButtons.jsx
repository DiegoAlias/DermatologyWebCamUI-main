import React from "react";
import { IoIosSkipBackward } from "react-icons/io";
import { FaSave, FaTrash } from "react-icons/fa";

const ImgCapturedButtons = ({
  handleReturnToCam,
  handleSaveThumbnail,
  handleClearLines,
}) => {
  return (
    <div className="text-white text-center">
      <button className="mx-2" title="Back" onClick={handleReturnToCam}>
        <IoIosSkipBackward className="bg-violet-800 p-1.5 rounded-md hover:scale-125 w-6 h-6 my-1" />
      </button>

      <button className="mx-2" title="Save" onClick={handleSaveThumbnail}>
        <FaSave className="bg-violet-800 p-1.5 rounded-md hover:scale-125 w-6 h-6 my-1" />
      </button>

      <button className="mx-2" title="Trash" onClick={handleClearLines}>
        <FaTrash className="bg-violet-800 p-1.5 rounded-md hover:scale-125 w-6 h-6 my-1" />
      </button>
    </div>
  );
};

export default ImgCapturedButtons;

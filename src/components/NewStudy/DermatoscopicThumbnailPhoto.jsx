import { FaTrash } from "react-icons/fa";

const DermatoscopicThumbnailComponent = ({ thumbnailUrl }) => {
  const handleDeleteThumbnail = () => {
    console.log("deleting image...");
  };

  return (
    <div className="text-center my-2">
      <div className="mt-2 mx-2">
        <img width={256} height={144} src={thumbnailUrl} alt="Thumbnail" />
      </div>
      <button
        onClick={handleDeleteThumbnail}
        className="mt-1 mx-1 text-white justify-center"
        title="Delete Dermatoscopic Image"
      >
        <FaTrash
          title="Delete Dermatoscopic Image"
          className=" bg-blue-600 p-1.5 rounded-md hover:scale-125 w-6 h-6"
        />
      </button>
    </div>
  );
};
export default DermatoscopicThumbnailComponent;

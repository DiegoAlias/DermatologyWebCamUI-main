import ThumbnailComponent from "./ClinicalThumbnailPhoto.jsx";

const ClinicalPhotosList = ({
  capturedImages,
  capturedArrowsSet,
  onDeleteImage,
  onRenderImage,
  onShowDermatoscopicWebcam,
}) => {
  return (
    <div className="row overflow-y-auto max-h-[500px] max-w-full">
      <h4 className="font-bold text-white text-center mt-4">Clinical Photos</h4>{" "}
      {capturedImages.map((imageUrl, index) => (
        <div className="col col-sm-1 mt-1 text-center" key={index}>
          <div className="bg-dark p-1">
            <p className="text-white">Photo {index + 1}</p>
            <ThumbnailComponent
              title={`Image ${index + 1}`}
              thumbnailUrl={imageUrl}
              capturedArrowsSet={capturedArrowsSet[index]}
              onDelete={() => onDeleteImage(index)}
              onRenderImage={onRenderImage}
              onShowDermatoscopicWebcam={onShowDermatoscopicWebcam}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClinicalPhotosList;

import ThumbnailComponent from "./ClinicalThumbnailPhoto.jsx";

const ClinicalPhotosList = ({ capturedImages, capturedArrowsSet, onDeleteImage, onRenderImage  }) => {
  return (
    <div className="row mx-2">
      {capturedImages.map((imageUrl, index) => (
        <div className="col col-sm-1 mt-2 text-center" key={index}>
          <div className="bg-dark p-1">
            <ThumbnailComponent
              title={`Image ${index + 1}`}
              thumbnailUrl={imageUrl}
              capturedArrowsSet={capturedArrowsSet[index]}
              onDelete={() => onDeleteImage(index)}
              onRenderImage = {onRenderImage}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClinicalPhotosList;
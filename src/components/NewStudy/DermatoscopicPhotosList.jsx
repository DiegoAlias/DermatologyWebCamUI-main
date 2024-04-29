import DermatoscopicThumbnailComponent from "./DermatoscopicThumbnailPhoto.jsx";

const DermatoscopicPhotosList = ({ thumbnails, capturedArrowsSet }) => {
  console.log(!!capturedArrowsSet && capturedArrowsSet);

  return (
    <div className="text-center overflow-x-scroll max-w-auto container mx-4">
      <h4 className="font-bold text-white text-center mt-4">
        Dermatoscopic Photos
      </h4>
      <div className="flex flex-nowrap my-4">
        {/* Renderizar los títulos de las fotos */}
        {!!capturedArrowsSet &&
          capturedArrowsSet.map((set, index) => (
            <h4
              key={index}
              className="font-bold text-white text-center mt-4 mx-6"
            >
              Photo {index + 1}
            </h4>
          ))}
      </div>
      <div className="flex flex-nowrap overflow-x-auto">
        {/* Renderizar las miniaturas de las fotos */}
        {!!thumbnails &&
          thumbnails.map((thumbnail, index) => (
            <div className="mt-1 text-center" key={index}>
              <div className="bg-dark p-1">
                <p className="text-white">Arrow {index + 1}</p>
                <DermatoscopicThumbnailComponent
                  key={index}
                  thumbnailUrl={thumbnail}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DermatoscopicPhotosList;

import DermatoscopicThumbnailComponent from "./DermatoscopicThumbnailPhoto.jsx";

const DermatoscopicPhotosList = ({ thumbnails, capturedArrowsSet }) => {
  console.log(!!capturedArrowsSet && capturedArrowsSet);

  return (
    <div className="text-center">
      <div className="flex flex-wrap w-full">
        <h4 className="font-bold text-white text-center mt-4">
          Dermatoscopic Photos
        </h4>{" "}
      </div>
      {!!capturedArrowsSet &&
        capturedArrowsSet.map((set, index) => (
          <div key={index}>
            <p className="text-white">Photo {index + 1}</p>
            
            {!!thumbnails &&
              thumbnails.map((thumbnail, index) => (
                <div className="col col-sm-1 mt-1 text-center" key={index}>
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
        ))}
    </div>
  );
};

export default DermatoscopicPhotosList;

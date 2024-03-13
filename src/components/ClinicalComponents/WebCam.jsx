// WebcamComponent.js
import React, { useRef, useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";

import Webcam from "react-webcam";
import { Loader } from "./Loader";

const WebcamComponent = ({ onCapture, handleClearLines }) => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        webcamRef.current.srcObject = stream;
        setLoading(false);
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    startWebcam();

    return () => {
      const stream = webcamRef.current?.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [webcamRef]);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    onCapture(imageSrc); // Envia la imagen capturada al componente padre
    handleClearLines();
  };

  return (
    <div className="card-body mt-1">
      <h2 className="text-white my-2 font-bold">Live View</h2>
      <Webcam
        audio={false}
        ref={webcamRef}
        mirrored={true}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="row">
        <div className="col col-md-12 text-center">
          {loading ? (
            <Loader />
          ) : (
            <button
              className="text-white mt-2"
              onClick={handleCapture}
              disabled={loading}
            >
              <FaCamera
                className="bg-red-900 p-2 rounded-md hover:scale-125 w-9 h-9 my-1"
                title="Capture"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebcamComponent;

// WebcamComponent.js
import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

import Webcam from 'react-webcam';

const WebcamComponent = ({ onCapture, handleClearLines}) => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        webcamRef.current.srcObject = stream;
        setLoading(false)
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };
    
    startWebcam();

    return () => {
      const stream = webcamRef.current?.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
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
    <div className='card-body mt-1'>
      <h2>Live View</h2>
          <Webcam
            audio={false}
            ref={webcamRef}
            mirrored={true}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="row">
            <div className="col col-md-12 text-center">
              {loading ? (
                <p>Loading...</p>
              ):(
                <button
                className="btn btn-lg btn-primary mt-2"
                onClick={handleCapture}
                disabled={loading}
              >
                <FontAwesomeIcon icon={faCamera} />
              </button>  
              )}
              
            </div>
          </div>
    </div>
  );
};

export default WebcamComponent;

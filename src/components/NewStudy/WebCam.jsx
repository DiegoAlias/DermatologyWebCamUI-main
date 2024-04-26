import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import { Loader } from "./Loader";
import { ClinicalWebCamButtons } from "./ClinicalWebCamButtons";
import { DermatoscopicWebCamButtons } from "./DermatoscopicWebCamButtons";

const WebcamComponent = ({
    onShowDermatoscopicWebcam,
    handleShowClinicalWebcam,
    handleShowDermatoscopicWebcam,
    title = "Clinical View",
    onCapture,
    handleClearLines = () => {},
}) => {
    const webcamRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const startWebcam = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: 2560,  
                    height: 1440, 
                },
            });
            webcamRef.current.srcObject = stream;
            setLoading(false);
            setError(null);
        } catch (error) {
            console.error("Error accessing webcam:", error);
            setError("Error accessing webcam. Trying awaing");            
            setTimeout(() => {
                startWebcam();
            }, 3000);
        }
    };

    
    useEffect(() => {
        startWebcam();

        return () => {
            const stream = webcamRef.current?.srcObject;
            if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach((track) => track.stop());
            }
        };
    }, []);

    const handleCapture = () => {
        const imageSrc = webcamRef.current.getScreenshot("image/png");
        onCapture(imageSrc);
        handleClearLines();
    };

    return (
        <div className="card-body mt-1">
            <h2 className="text-white my-2 font-bold">{title}</h2>
            {error && <p>{error}</p>}
            <Webcam
                audio={false}
                ref={webcamRef}
                mirrored={true}
                style={{ width: "100%", height: "auto" }}
                screenshotFormat="image/png"
                videoConstraints={{
                    width: 1920, // Ancho de Full HD
                    height: 1080, // Altura de Full HD
                }}
            />
            <div className="row">
                <div className="col col-md-12 text-center">
                    {loading ? (
                        !error && <Loader />
                    ) : !onShowDermatoscopicWebcam ? (
                        <ClinicalWebCamButtons
                            handleCapture={handleCapture}
                            loading={loading}
                        />
                    ) : (
                        <DermatoscopicWebCamButtons
                            handleShowDermatoscopicWebcam={handleShowDermatoscopicWebcam}
                            handleShowClinicalWebcam={handleShowClinicalWebcam}
                            onShowDermatoscopicWebcam={onShowDermatoscopicWebcam}
                            handleCapture={handleCapture}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default WebcamComponent;
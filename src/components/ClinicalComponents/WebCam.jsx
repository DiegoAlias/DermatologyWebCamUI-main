import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import { Loader } from "./Loader";
import { ClinicalWebCamButtons } from "./ClinicalWebCamButtons";
import { DermatoscopicWebCamButtons } from "./DermatoscopicWebCamButtons";

const WebcamComponent = ({
    onShowDermatoscopicWebcam,
    handleShowClinicalWebcam,
    handleShowDermatoscopicWebcam,
    title = "Live View",
    onCapture,
    handleClearLines = () => {},
}) => {
    const webcamRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const startWebcam = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        width: 1220, // Ancho de Full HD
                        height: 1024, // Altura de Full HD
                    },
                });
                webcamRef.current.srcObject = stream;
                setLoading(false);
            } catch (error) {
                console.error("Error accessing webcam:", error);
                setError("Error accessing webcam");
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
                    width: 1220, // Ancho de Full HD
                    height: 1024, // Altura de Full HD
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

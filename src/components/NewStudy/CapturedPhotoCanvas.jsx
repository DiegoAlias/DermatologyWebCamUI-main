import { useEffect, useRef, useState } from "react";

//Components
import ImgCapturedButtons from "./CapturedPhotoButtons.jsx";
import ClinicalPhotosList from "./ClinicalPhotosList.jsx";
import RawPatientData from "../Patient/RawPatientData.jsx";
// import CurrentStudy from "../Patient/CurrentStudy.jsx";
import WebcamComponent from "./WebCam.jsx";
import CoordinatesList from "./ArrowsDescriptionList.jsx";
import DermatoscopicPhotosList from "./DermatoscopicPhotosList.jsx";

//Storing
import { useArrowCoordinates } from "../../store/arrowCoordinates.js";
import { useArrowDescriptions } from "../../store/arrowDescriptions.js";
import { useClinicalImage } from "../../store/clinicalImages.js";
import { useDermatoscopicImage } from "../../store/dermatoscopicImages.js";
import { usePatientData } from "../../store/patientData.js";
import { useStudyData } from "../../store/studyData.js";

import "../../Global.css";

const CanvasComponent = ({ arrowColor, resetApp }) => {
  const originalImg = useRef(null);
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const isDrawing = useRef(false);
  const img = useRef(new Image());
  const [dermatoscopicThumbnail, setDermatoscopicThumbnail] = useState([]);
  const [renderTrigger, setRenderTrigger] = useState(false);
  const [hoveredArrowIndex, setHoveredArrowIndex] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [capturedArrowsSet, setCapturedArrowsSet] = useState([]);
  const [showDermatoscopicWebcam, setShowDermatoscopicWebcam] = useState(false);
  const [arrowDescriptions, setArrowDescriptions] = useState(null);
  const [showCanvasComponent, setShowCanvasComponent] = useState(true);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    ctx.current = canvas.getContext("2d");

    img.current.src = capturedImage;
    img.current.onload = () => {
      ctx.current.drawImage(img.current, 0, 0, canvas.width, canvas.height);
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [capturedImage, lines, showDermatoscopicWebcam, dermatoscopicThumbnail]);

  const renderLines = () => {
    ctx.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    ctx.current.drawImage(
      img.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    lines.forEach((line, index) => {
      const angle = Math.atan2(
        line.endPoint.y - line.startPoint.y,
        line.endPoint.x - line.startPoint.x
      );
      let arrowSize = 10;

      // Dibuja la línea
      ctx.current.beginPath();
      ctx.current.moveTo(line.startPoint.x, line.startPoint.y);
      ctx.current.lineTo(line.endPoint.x, line.endPoint.y);

      // Ajusta el ancho de la flecha si está siendo hovereada
      if (index === hoveredArrowIndex) {
        arrowSize = 15;
        ctx.current.lineWidth = 7; // Ancho de la línea al ser hovereada
      } else {
        arrowSize = 10;
        ctx.current.lineWidth = 8; // Ancho de la línea por defecto
      }

      ctx.current.strokeStyle = arrowColor || "black";
      ctx.current.stroke();
      ctx.current.lineWidth = 8; // Restablece el ancho de la línea a su valor por defecto

      // Dibuja la punta de la flecha
      ctx.current.save();
      ctx.current.translate(line.endPoint.x, line.endPoint.y);
      ctx.current.rotate(angle);
      ctx.current.beginPath();
      ctx.current.moveTo(-arrowSize, arrowSize / 2);
      ctx.current.lineTo(0, 0);
      ctx.current.lineTo(-arrowSize, -arrowSize / 2);
      ctx.current.fillStyle = arrowColor || "black";
      ctx.current.fill();
      ctx.current.restore();

      // Agrega el número en la cola
      ctx.current.fillStyle = arrowColor || "black";
      ctx.current.font = "50px Arial";
      ctx.current.fillText(
        `${index + 1}`,
        line.endPoint.x + 5,
        line.endPoint.y - 5
      );
    });
  };

  const handleMouseDown = (e) => {
    // Verificar si ya hay flechas dibujadas
    if (lines.length === 0) {
      const rect = canvasRef.current.getBoundingClientRect();
      const startPoint = {
        x: (e.clientX - rect.left) * (canvasRef.current.width / rect.width),
        y: (e.clientY - rect.top) * (canvasRef.current.height / rect.height),
      };
      isDrawing.current = true;
      setLines((prevLines) => [
        ...prevLines,
        { startPoint, endPoint: startPoint },
      ]);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const currentEndPoint = {
      x: (e.clientX - rect.left) * (canvasRef.current.width / rect.width),
      y: (e.clientY - rect.top) * (canvasRef.current.height / rect.height),
    };
    setLines((prevLines) => {
      const updatedLines = [...prevLines];
      updatedLines[updatedLines.length - 1].endPoint = currentEndPoint;
      return updatedLines;
    });
    renderLines();
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
    renderLines();
  };

  const handleClearLines = () => {
    setCapturedImage(originalImg.current);
    setLines([]);
    renderLines();
    setRenderTrigger((prev) => !prev);
  };

  const handleDeleteArrow = (index) => {
    setLines((prevLines) => prevLines.filter((_, i) => i !== index));
    renderLines();
    setRenderTrigger((prev) => !prev);
  };

  const handleArrowHover = (index) => {
    setHoveredArrowIndex(index);
    renderLines();
  };

  const handleArrowHoverOff = () => {
    setHoveredArrowIndex(null);

    renderLines();
  };

  const handleCaptureImage = (imgSrc) => {
    originalImg.current = imgSrc;
    setCapturedImage(imgSrc);
    setShowCanvasComponent(false);
  };

  const handleReturnToCam = () => {
    lines.splice(0, lines.length);
    renderLines();
    setRenderTrigger((prev) => !prev);
    setShowCanvasComponent(true);
  };

  const handleSaveThumbnail = () => {
    const thumbnailUrl = canvasRef.current.toDataURL();
    const arrowCoordinates = lines.map((line, index) => ({
      arrowNumber: index + 1,
      startPoint: { ...line.startPoint },
      endPoint: { ...line.endPoint },
    }));

    setCapturedImages([...capturedImages, thumbnailUrl]);
    setCapturedArrowsSet([...capturedArrowsSet, arrowCoordinates]);

    lines.splice(0, lines.length);
    renderLines();
    setCapturedImage(originalImg.current);
    setRenderTrigger((prev) => !prev);
  };

  const handleDeleteImage = (index) => {
    // Actualizar el estado para eliminar la imagen y sus coordenadas
    const updatedImages = [...capturedImages];
    const updatedArrowsSet = [...capturedArrowsSet];

    updatedImages.splice(index, 1);
    updatedArrowsSet.splice(index, 1);

    setCapturedImages(updatedImages);
    setCapturedArrowsSet(updatedArrowsSet);
  };

  const handleRenderImage = (thumbnailUrl, arrowCoordinates) => {
    setCapturedImage(thumbnailUrl);
    lines.splice(0, lines.length);
    lines.push(...arrowCoordinates);
    renderLines();
    setRenderTrigger((prev) => !prev);

    setShowCanvasComponent(false);
  };

  const onShowDermatoscopicWebcam = (clinicalMode = true) => {
    useClinicalImage.getState().addClinicalImage({ current: img.current.src });

    useArrowCoordinates.getState().addArrowCoordinates({ current: lines });

    if (!clinicalMode) {
      // setDermatoscopicThumbnail([...dermatoscopicThumbnail, originalImg.current]);

      useDermatoscopicImage
        .getState()
        .addDermatoscopicImage({ current: originalImg.current });

      window.currentStudy = {
        PatientData: usePatientData.getState().PatientData.current,
        StudyData: useStudyData.getState().StudyData.current,
        ArrowCoordinates:
          useArrowCoordinates.getState().ArrowCoordinates.current,
        ArrowDescriptions:
          useArrowDescriptions.getState().ArrowDescriptions.current,
        ClinicalImage: useClinicalImage.getState().ClinicalImage.current,
        DermatoscopicImage:
          useDermatoscopicImage.getState().DermatoscopicImage.current,
        AppVisibiltyState: () => {
          const bootstrapStyle = document.createElement("link");
          bootstrapStyle.rel = "stylesheet";
          bootstrapStyle.type = "text/css";
          bootstrapStyle.href = "${def:context}/bootstrap.css";
          document.head.appendChild(bootstrapStyle);

          // Agregar enlace para el estilo específico
          const dinamicaStyles = document.createElement("link");
          dinamicaStyles.rel = "stylesheet";
          dinamicaStyles.href = "${def:context}/dinamica.css";
          document.head.appendChild(dinamicaStyles);

          const webCamStyle = document.querySelector(
            'link[href*="/styleDermatologyCamApp.css"]'
          );
          if (webCamStyle) {
            webCamStyle.remove();
          }

          document.getElementById("root").hidden = true;
          return {
            status: true,
          };
        },
      };

      console.log(window.currentStudy);
    }
    setShowDermatoscopicWebcam(clinicalMode);
  };

  const onShowClinicalWebcam = (clinicalMode = true) => {
    setShowDermatoscopicWebcam(clinicalMode);
  };

  const handleArrowDescriptions = (descriptions) => {
    setArrowDescriptions({ descriptions });
    useArrowDescriptions
      .getState()
      .addArrowDescriptions({ current: descriptions });
  };

  return (
    <div className="flex flex-col mt-8">
      {showCanvasComponent ? (
        <div className="flex mx-auto justify-center">
          <div className="text-white w-1/4 p-2 text-center bg-canvas rounded-md my-2 mx-2">
            <RawPatientData />
            {/* <CurrentStudy /> */}
          </div>
          <div className="w-2/3 text-center my-2 mx-2 p-2 rounded-md bg-canvas">
            <div className="card card-body text-center bg-dark">
              <WebcamComponent
                onCapture={handleCaptureImage}
                handleShowClinicalWebcam={resetApp}
              />
            </div>
          </div>
        </div>
      ) : (
        //DERMATOSCOPIC VIEW
        <div className="flex justify-center">
          {!!showDermatoscopicWebcam && (
            <div className="flex mx-auto justify-center">
              <div className="w-2/1  text-center my-2 ml-6 p-1 rounded-md bg-canvas">
                <div className="card card-body text-center bg-dark">
                  <WebcamComponent
                    capturedArrowsSet={capturedArrowsSet}
                    onArrowDescriptions={arrowDescriptions}
                    onShowDermatoscopicWebcam={showDermatoscopicWebcam}
                    handleShowClinicalWebcam={onShowClinicalWebcam}
                    handleShowDermatoscopicWebcam={onShowDermatoscopicWebcam}
                    title="Dermatoscopic Live View"
                    onCapture={handleCaptureImage}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 my-2 mx-2 p-2 rounded-md bg-canvas">
              <div className="">
                <h2 className="text-center text-white font-bold my-1">
                  Captured Clinical Image
                </h2>
                <canvas
                  ref={canvasRef}
                  width={2560}
                  height={1440}
                  className="canvas-container"
                ></canvas>
              </div>
              {!showDermatoscopicWebcam && (
                <>
                  <div className="mt-2">
                    <ImgCapturedButtons
                      handleReturnToCam={handleReturnToCam}
                      handleSaveThumbnail={handleSaveThumbnail}
                      handleClearLines={handleClearLines}
                    />
                  </div>
                </>
              )}
            </div>

            {!showDermatoscopicWebcam && (
              <>
                <div className="w-1/6 p-2 my-2 mx-1 rounded-md bg-canvas">
                  <CoordinatesList
                    lines={lines}
                    onArrowDescriptions={handleArrowDescriptions}
                    onDeleteArrow={handleDeleteArrow}
                    onArrowHover={handleArrowHover}
                    onArrowHoverOff={handleArrowHoverOff}
                  />
                </div>

                <div className="w-1/6 p-2 my-2 mx-1 rounded-md bg-canvas">
                  <ClinicalPhotosList
                    capturedImages={capturedImages}
                    capturedArrowsSet={capturedArrowsSet}
                    onDeleteImage={handleDeleteImage}
                    onRenderImage={handleRenderImage}
                    onShowDermatoscopicWebcam={onShowDermatoscopicWebcam}
                  />
                </div>
                {!showDermatoscopicWebcam && (
                  <div className="w-full my-2 p-2 mx-3 rounded-md bg-canvas">
                    <DermatoscopicPhotosList
                      thumbnails={dermatoscopicThumbnail}
                      capturedArrowsSet={capturedArrowsSet}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CanvasComponent;

// CanvasComponent.js
import { useEffect, useRef, useState } from "react";

import ImgCapturedButtons from './CapturedPhotoButtons.jsx'
import ClinicalPhotosList from './ClinicalPhotosList.jsx'
import UserData from '../User/UserData.jsx'
import StudiesHistorial from '../User/StudiesHistorial.jsx'
import CoordinatesList from "./ArrowsDescriptionList.jsx";
import WebcamComponent from "./WebCam.jsx";

import './Global.css'

import "bootstrap/dist/css/bootstrap.min.css"; // Importar los estilos de Bootstrap

const CanvasComponent = ({ arrowColor }) => {
  const originalImg = useRef(null)
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const linesRef = useRef([]);
  const isDrawing = useRef(false);
  const img = useRef(new Image());
  const [, setRenderTrigger] = useState(false);
  const [savedArrowCoordinates, setSavedArrowCoordinates] = useState([]);
  const [hoveredArrowIndex, setHoveredArrowIndex] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [capturedImageThumbnail, setCapturedImageThumbnail] = useState(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [capturedArrowsSet, setCapturedArrowsSet] = useState([]);


  const [showCanvasComponent, setShowCanvasComponent] = useState(true);


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
  }, [capturedImage, linesRef]);

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

    linesRef.current.forEach((line, index) => {
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
        ctx.current.lineWidth = 2; // Ancho de la línea por defecto
      }

      ctx.current.strokeStyle = arrowColor || "black";
      ctx.current.stroke();
      ctx.current.lineWidth = 2; // Restablece el ancho de la línea a su valor por defecto

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
      ctx.current.font = "10px Arial";
      ctx.current.fillText(
        `${index + 1}`,
        line.endPoint.x + 5,
        line.endPoint.y - 5
      );
    });
  };

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const rect = canvasRef.current.getBoundingClientRect(); // Obtén la posición del canvas en la página
    const startPoint = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    linesRef.current.push({ startPoint, endPoint: startPoint });
    setRenderTrigger((prev) => !prev);
  };
  
  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
  
    const rect = canvasRef.current.getBoundingClientRect(); // Obtén la posición del canvas en la página
    const currentEndPoint = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    linesRef.current[linesRef.current.length - 1].endPoint = currentEndPoint;
  
    renderLines();
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleClearLines = () => {
    setCapturedImage(originalImg.current);        
    linesRef.current = [];
    renderLines();
    setRenderTrigger((prev) => !prev);
  };
  
  const handleDeleteArrow = (index) => {        
    linesRef.current.splice(index, 1);    
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
     // setCapturedImage('/img/descarga.jpg');
    setCapturedImage(imgSrc);
    setShowCanvasComponent(false); 
  };

  const handleReturnToCam = () =>{
    linesRef.current = [];
    renderLines();
    setRenderTrigger((prev) => !prev);
    setShowCanvasComponent(true); 
  }

  const handleSaveThumbnail = () => {
    const thumbnailUrl = canvasRef.current.toDataURL();
    const arrowCoordinates = linesRef.current.map((line, index) => ({
      arrowNumber: index + 1,
      startPoint: { ...line.startPoint },
      endPoint: { ...line.endPoint },
    }));
  
    
    // Guarda la miniatura y las coordenadas en el estado
    setCapturedImageThumbnail(thumbnailUrl);
    setSavedArrowCoordinates(arrowCoordinates);
    
    // Guarda la miniatura y las coordenadas en el estado
    setCapturedImages([...capturedImages, thumbnailUrl]);    
    setCapturedArrowsSet([...capturedArrowsSet, arrowCoordinates]);

    linesRef.current = [];
    renderLines();
    setCapturedImage(originalImg.current)
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

  const handleRenderImage = ( thumbnailUrl, arrowCoordinates ) => {    
    
    setCapturedImage(originalImg.current); 
    linesRef.current = [...arrowCoordinates];        
    renderLines();
    setRenderTrigger((prev) => !prev);
    setShowCanvasComponent(false);        
  };

  return (  
    <>
      {showCanvasComponent ? (
        <div >
          <div className="row row-sm mb-4">
          <div className="col col-sm-2">
              <UserData/>
              <div className="row">
              <StudiesHistorial/>
              </div>
          </div>
            <div className="col col-sm-6 text-center mt-2 mx-4 bg-dark">
              <div className="card card-body text-center bg-dark text-white">
                <WebcamComponent
                  onCapture={handleCaptureImage}                  
                />
              </div>
            </div>
          </div>
          </div>
        
      ) : (
        <div >
          <div className="row row-sm ">
            <div className="col col-sm-2 ">
              <div className="row">
                <UserData/>
              </div>
              <div className="row">
                <StudiesHistorial/>
              </div>
            </div>

            <div className="col col-sm-6 mt-2 mx-4">
            <div className="card-body bg-dark text-center text-white p-4 rounded">
              <h2 className="text-center">Captured Image</h2>
              <canvas
                ref={canvasRef}
                height={1024}                
                width= {1220}
                className="canvas-container mt-2"
              ></canvas>
            </div>
            <ImgCapturedButtons               
              handleReturnToCam = {handleReturnToCam}
              handleSaveThumbnail = {handleSaveThumbnail}
              handleClearLines = {handleClearLines}/>
            </div>

            
              <div className="col col-md-3">
              <CoordinatesList
                lines={linesRef.current}
                onDeleteArrow={handleDeleteArrow}
                onArrowHover={handleArrowHover}
                onArrowHoverOff={handleArrowHoverOff}
              />
              </div>
            
          
            
              <ClinicalPhotosList                
                capturedImages = {capturedImages}                  
                capturedArrowsSet = {capturedArrowsSet}
                onDeleteImage={handleDeleteImage}
                onRenderImage={handleRenderImage}
              />
            

          </div>
        </div>
        
      )}
    </>
  );
};

export default CanvasComponent;
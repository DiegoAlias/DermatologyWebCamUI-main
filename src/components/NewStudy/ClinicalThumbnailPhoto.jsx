// ThumbnailComponent.jsx
import React, { useEffect, useRef } from "react";
import { FaTrash, FaSearch, FaMicroscope } from "react-icons/fa";

const ThumbnailComponent = ({
  thumbnailUrl = [],
  capturedArrowsSet,
  onDelete,
  onRenderImage,
  onShowDermatoscopicWebcam
}) => {
  const canvasRef = useRef(null);
  const arrowCoordinates = capturedArrowsSet;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // Limpiar el canvas antes de dibujar
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const img = new Image();
    img.src = thumbnailUrl;
    
    img.onload = () => {
      // Dibujar la miniatura en el canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      // Dibujar flechas basadas en las coordenadas
      capturedArrowsSet.forEach((arrow) => {
        const { startPoint, endPoint } = arrow;
        const angle = Math.atan2(
          endPoint.y - startPoint.y,
          endPoint.x - startPoint.x
        );
        const arrowSize = 5; // Ajusta el tamaño según tus necesidades

        // Dibujar la línea
        ctx.beginPath();
        ctx.moveTo(
          startPoint.x * (canvas.width / 120),
          startPoint.y * (canvas.height / 100)
        );
        ctx.lineTo(
          endPoint.x * (canvas.width / 120),
          endPoint.y * (canvas.height / 100)
        );
        ctx.strokeStyle = "red"; // Color de la flecha (puedes cambiarlo)
        ctx.stroke();

        // Dibujar la punta de la flecha
        ctx.save();
        ctx.translate(
          endPoint.x * (canvas.width / 120),
          endPoint.y * (canvas.height / 100)
        );
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(-arrowSize, arrowSize / 2);
        ctx.lineTo(0, 0);
        ctx.lineTo(-arrowSize, -arrowSize / 2);
        ctx.fillStyle = "red"; // Color de la flecha (puedes cambiarlo)
        ctx.fill();
        ctx.restore();
      });
    };
  }, [thumbnailUrl]);

  return (
    <div className="text-white">
      
      <div className="my-1 mx-1">
        <button
          className="mt-1 mx-1"
          onClick={() => onRenderImage(thumbnailUrl, arrowCoordinates)}
          title="See Image"
        >
          <FaSearch
            title="See Image"
            className=" bg-blue-600 p-1.5 rounded-md hover:scale-125 w-6 h-6"
          />
        </button>
        <button 
          className="mt-1 mx-1" 
          onClick={onDelete}
          title="Delete Image"
          >
          <FaTrash
            title="Delete Image"
            className="bg-blue-600 p-1.5 rounded-md hover:scale-125 w-6 h-6"
          />
        </button>
      </div>

      <canvas
        ref={canvasRef}
        width={120}
        height={100}
        style={{ border: "2px solid #ccc" }}
        className="mx-auto"
      ></canvas>

      <div className="mt-2 mx-1">
        <button onClick={() => {onRenderImage(thumbnailUrl, arrowCoordinates)
                                onShowDermatoscopicWebcam(true)}}
                title="Dermatoscopic"
                >
          <FaMicroscope 
            className="bg-blue-600 p-1.5 rounded-md hover:scale-125 w-6 h-6" 
            title="Dermatoscopic"
          />
        </button>
      </div>
    </div>
  );
};

export default ThumbnailComponent;

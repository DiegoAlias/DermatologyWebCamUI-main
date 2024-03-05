// ThumbnailComponent.jsx
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMicroscope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const ThumbnailComponent = ({ thumbnailUrl = [], capturedArrowsSet, onDelete, onRenderImage }) => {
  const canvasRef = useRef(null);

  
  useEffect(() => {
    // console.log(capturedArrowsSet)
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

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
        const angle = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);
        const arrowSize = 5; // Ajusta el tamaño según tus necesidades

        // Dibujar la línea
        ctx.beginPath();
        ctx.moveTo(startPoint.x * (canvas.width / 120), startPoint.y * (canvas.height / 100));
        ctx.lineTo(endPoint.x * (canvas.width / 120), endPoint.y * (canvas.height / 100));
        ctx.strokeStyle = 'red'; // Color de la flecha (puedes cambiarlo)
        ctx.stroke();

        // Dibujar la punta de la flecha
        ctx.save();
        ctx.translate(endPoint.x * (canvas.width / 120), endPoint.y * (canvas.height / 100));
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(-arrowSize, arrowSize / 2);
        ctx.lineTo(0, 0);
        ctx.lineTo(-arrowSize, -arrowSize / 2);
        ctx.fillStyle = 'red'; // Color de la flecha (puedes cambiarlo)
        ctx.fill();
        ctx.restore();
      });
    };
  }, [thumbnailUrl]);

  return (
    <div >
      <h4>        
        <button 
        className='btn btn-sm btn-primary mx-1 mt-1 mb-1'
        onClick={() => onRenderImage(thumbnailUrl, capturedArrowsSet )} >
            <FontAwesomeIcon icon={faMagnifyingGlass}/>       
        </button>
        <button 
          className=' btn btn-sm btn-danger mx-1 mt-1 mb-1 ' 
          onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash}/>
        </button>
      </h4>

      <canvas
        ref={canvasRef}
        width={120}
        height={100}
        style={{ border: '1px solid #ccc' }}
      ></canvas>
      
      <div className="row text-center mb-1 mx-3">
      <button 
        className='btn btn-sm btn-success mx-1 mt-1 mb-1'
        onClick={() => onRenderImage(thumbnailUrl)} 
        >
            <FontAwesomeIcon icon={faMicroscope}/>       
        </button>
      </div>

    </div>
  );
};

export default ThumbnailComponent;

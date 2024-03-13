// canvasHandlers.js
const handleMouseDown = (e, isDrawing, linesRef, setRenderTrigger) => {
  isDrawing.current = true;
  const startPoint = {
    x: e.clientX - e.target.offsetLeft,
    y: e.clientY - e.target.offsetTop,
  };
  linesRef.current.push({ startPoint, endPoint: startPoint });
  setRenderTrigger((prev) => !prev);
};

const handleMouseMove = (e, isDrawing, linesRef, renderLines) => {
  if (!isDrawing) return;

  const currentEndPoint = {
    x: e.clientX - e.target.offsetLeft,
    y: e.clientY - e.target.offsetTop,
  };
  linesRef.current[linesRef.current.length - 1].endPoint = currentEndPoint;

  renderLines();
};

const handleMouseUp = (isDrawing) => {
  isDrawing.current = false;
};

const handleClearLines = (linesRef, renderLines, setRenderTrigger) => {
  linesRef.current = [];
  renderLines();
  setRenderTrigger((prev) => !prev);
};

const handleDeleteArrow = (index, linesRef, renderLines, setRenderTrigger) => {
  linesRef.current.splice(index, 1);
  renderLines();
  setRenderTrigger((prev) => !prev);
};

const handleArrowHover = (index, setHoveredArrowIndex, renderLines) => {
  setHoveredArrowIndex(index);
  renderLines();
};

const handleArrowHoverOff = (setHoveredArrowIndex, renderLines) => {
  setHoveredArrowIndex(null);
  renderLines();
};

const renderLines = (ctx, img, canvasRef, linesRef, hoveredArrowIndex, arrowColor) => {
  ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
  ctx.drawImage(img, 0, 0, canvasRef.width, canvasRef.height);

  linesRef.forEach((line, index) => {
    const angle = Math.atan2(
      line.endPoint.y - line.startPoint.y,
      line.endPoint.x - line.startPoint.x
    );
    let arrowSize = 10;

    // Dibuja la línea
    ctx.beginPath();
    ctx.moveTo(line.startPoint.x, line.startPoint.y);
    ctx.lineTo(line.endPoint.x, line.endPoint.y);

    // Ajusta el ancho de la flecha si está siendo hovereada
    if (index === hoveredArrowIndex) {
      arrowSize = 15;
      ctx.lineWidth = 7; // Ancho de la línea al ser hovereada
    } else {
      arrowSize = 10;
      ctx.lineWidth = 2; // Ancho de la línea por defecto
    }

    ctx.strokeStyle = arrowColor || "black";
    ctx.stroke();
    ctx.lineWidth = 2; // Restablece el ancho de la línea a su valor por defecto

    // Dibuja la punta de la flecha
    ctx.save();
    ctx.translate(line.endPoint.x, line.endPoint.y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(-arrowSize, arrowSize / 2);
    ctx.lineTo(0, 0);
    ctx.lineTo(-arrowSize, -arrowSize / 2);
    ctx.fillStyle = arrowColor || "black";
    ctx.fill();
    ctx.restore();

    // Agrega el número en la cola
    ctx.fillStyle = arrowColor || "black";
    ctx.font = "10px Arial";
    ctx.fillText(`${index + 1}`, line.endPoint.x + 5, line.endPoint.y - 5);
  });
};

const handleReturnToCam = (linesRef, renderLines, setRenderTrigger, setShowCanvasComponent) => {
  linesRef.current = [];
  renderLines();
  setRenderTrigger((prev) => !prev);
  setShowCanvasComponent(true);
};

const handleCaptureImage = (imgSrc, setCapturedImage, setShowCanvasComponent) => {
  setCapturedImage(imgSrc);
  setShowCanvasComponent(false);
};

const handleSaveThumbnail = (canvasRef, linesRef, setSavedArrowCoordinates, setCapturedImageThumbnail, setCapturedImages, setCapturedArrowsSet, setRenderTrigger) => {
  const thumbnailUrl = canvasRef.toDataURL();
  const arrowCoordinates = linesRef.map((line, index) => ({
    arrowNumber: index + 1,
    startPoint: { ...line.startPoint },
    endPoint: { ...line.endPoint },
  }));

  setCapturedImageThumbnail(thumbnailUrl);
  setSavedArrowCoordinates(arrowCoordinates);
  setCapturedImages([...capturedImages, thumbnailUrl]);
  setCapturedArrowsSet([...capturedArrowsSet, arrowCoordinates]);

  const jsonContent = JSON.stringify(arrowCoordinates);

  linesRef.current = [];
  renderLines();
  setRenderTrigger((prev) => !prev);
};

export {
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
  handleClearLines,
  handleDeleteArrow,
  handleArrowHover,
  handleArrowHoverOff,
  renderLines,
  handleReturnToCam,
  handleCaptureImage,
  handleSaveThumbnail,
};

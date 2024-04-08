export const drawArrowsOnImage = (originalImage, arrowCoordinates) => {
  // Crear un nuevo canvas del mismo tamaño que la imagen original
  const canvas = document.createElement('canvas');
  canvas.width = originalImage.width;
  canvas.height = originalImage.height;

  const ctx = canvas.getContext('2d');

  // Dibujar la imagen original en el canvas
  ctx.drawImage(originalImage, 0, 0);

  // Dibujar las flechas en el canvas
  arrowCoordinates.forEach((arrow) => {
    const { startPoint, endPoint } = arrow;
    const angle = Math.atan2(
      endPoint.y - startPoint.y,
      endPoint.x - startPoint.x
    );
    const arrowSize = 5; // Ajusta el tamaño según tus necesidades

    // Dibujar la línea
    ctx.beginPath();
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(endPoint.x, endPoint.y);
    ctx.strokeStyle = 'red'; // Color de la flecha (puedes cambiarlo)
    ctx.stroke();

    // Dibujar la punta de la flecha
    ctx.save();
    ctx.translate(endPoint.x, endPoint.y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(-arrowSize, arrowSize / 2);
    ctx.lineTo(0, 0);
    ctx.lineTo(-arrowSize, -arrowSize / 2);
    ctx.fillStyle = 'red'; // Color de la flecha (puedes cambiarlo)
    ctx.fill();
    ctx.restore();
  });

  // Convertir el canvas a una imagen en formato JPG
  const jpgImageData = canvas.toDataURL('image/jpeg');

  // Devolver la imagen en formato JPG
  return jpgImageData;
};
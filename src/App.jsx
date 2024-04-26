import React from "react";

import CanvasComponent from "./components/NewStudy/CapturedPhotoCanvas.jsx";
import { Login } from "./components/auth/Login.jsx";


const App = ({resetApp}) => {
  return (
    <>
      <CanvasComponent arrowColor="red" resetApp = {resetApp}/>      
    </>
  );
};

export default App;

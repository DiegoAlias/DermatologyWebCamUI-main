import React from "react";
import CanvasComponent from "./components/ClinicalComponents/CapturedPhotoCanvas.jsx";
import { Login } from "./components/login.jsx";

const App = () => {
  return (
    <div>
      <Login />
      <CanvasComponent arrowColor="red" />
    </div>
  );
};

export default App;

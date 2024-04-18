import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import { Login } from "../components/auth/Login";

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                {/* Define las rutas para los componentes */}
                <Route path="/" element={<Login />} />
                <Route path="/dermatology" element={<App />} />
            </Routes>
        </Router>
    );
};

export default MainRouter;

import { Route, Routes } from "react-router";
import "./App.css";

import LoginPage from "./features/layout/login";
import RegisterPage from "./features/layout/register";
import HomePage from "./features/pages/HomePage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;

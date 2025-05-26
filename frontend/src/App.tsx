import { Route, Routes } from "react-router";
import "./App.css";

import LoginPage from "./features/layout/login";
import RegisterPage from "./features/layout/register";
import HomePage from "./features/pages/HomePage";
import DashHome from "./features/layout/dash-home";
import { TableUsers } from "./components/table-users";
import UpdateUserForm from "./components/form-update";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dash-home" element={<DashHome />}>
                    <Route element={<DashHome />} />
                    <Route path="/dash-home/users" element={<TableUsers />} />
                    <Route path="/dash-home/courses" element={<DashHome />} />
                    <Route
                        path="/dash-home/users/update/:id"
                        element={<UpdateUserForm />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;

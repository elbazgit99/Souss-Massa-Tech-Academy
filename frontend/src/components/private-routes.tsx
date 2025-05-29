import { Navigate } from "react-router-dom";
// import { useAuthStore } from "../authstore/store";

const PrivateRoute = ({ children }) => {
    // const token = useAuthStore((state) => state.token);
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;

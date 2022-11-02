import React from "react";
import Dashboard from "../Pages/Dashboard";
// import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import { IRouteContainerProps } from "../Types/Route";

const PublicRoute: React.FC<IRouteContainerProps> = ({ Component }) => {
    const token = localStorage.getItem('LoginToken');
    if (!token) {
        return Component
    } else {
        return <Dashboard />
    }
};

export default PublicRoute;
import React from "react";
// import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import { IRouteContainerProps } from "../Types/Route";

const PublicRoute: React.FC<IRouteContainerProps> = ({ Component }) => {
    const token = localStorage.getItem('LogInToken');
    if (!token) {
        return Component
    } else {
        return <SignIn />
    }
};

export default PublicRoute;
import { Navigate } from "react-router-dom";
import { IRouteContainerProps } from "../Types/Route";
import { Routepaths } from "./Routepaths";

const PrivateRoute: React.FC<IRouteContainerProps> = ({ Component }) => {
    const token = localStorage.getItem('LogInToken');
    if (token) {
        return Component
    } else {
        return <Navigate to={Routepaths.signin} />
    }
};

export default PrivateRoute;
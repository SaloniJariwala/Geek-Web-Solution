import React from "react";
import { Routes, Route } from "react-router-dom";
import AddEmployee from "../Pages/AddEmployee";
import Dashboard from "../Pages/Dashboard";
import EditEmployee from "../Pages/EditEmployee";
// import Homepage from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import UserHome from "../Pages/UserHome";
import UserProfile from "../Pages/UserProfile";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { Routepaths } from "./Routepaths";


const Router: React.FC = () => {
    return (
        <Routes>
            {/* <Route
                path={Routepaths.home}
                element={<PublicRoute Component={<Homepage />} />}
            /> */}
            <Route
                path={Routepaths.signin}
                element={<PublicRoute Component={<SignIn />} />}
            />
            <Route
                path={Routepaths.dashboard}
                element={<PrivateRoute Component={<Dashboard />} />}
            />
            <Route
                path={Routepaths.userHome}
                element={<PrivateRoute Component={<UserHome />} />}
            />
            <Route
                path={Routepaths.addUser}
                element={<PrivateRoute Component={<AddEmployee />} />}
            />
            <Route
                path={Routepaths.editUser}
                element={<PrivateRoute Component={<EditEmployee />} />}
            />
            <Route
                path={Routepaths.profile}
                element={<PrivateRoute Component={<UserProfile />} />}
            />
        </Routes>
    );
};

export default Router;
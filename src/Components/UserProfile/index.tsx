import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { USER_API } from "../../Constants/Endpoints";
import { IEmployeeInfo } from "../../Types/users";
import { getDesignationById } from "../../Utils/getDesignation";
import { getUserRoleById } from "../../Utils/getUserRole";
import BasicDetails from "./BasicDetails";
import { ProfileWrapper } from "./style";

const UserProfile: React.FC = () => {

    const [userData, setUserData] = useState<IEmployeeInfo>();

    useEffect(() => {
        const id = localStorage.getItem('id');
        axios.get(`${USER_API}/${id}`)
            .then((response) => {
                const desig = getDesignationById(response.data.designationId);
                const userRole = getUserRoleById(response.data.userRoleId);
                setUserData({
                    ...response.data,
                    designation: desig,
                    userRole: userRole
                });
            })
            .catch((error) => {
                message.error(error.message);
            })
            .finally(() => {
                // setIsLoadingView(false);
                // console.log("SELECTED USER ===> ", userData);
            });
    }, []);

    return (
        <ProfileWrapper>
            <div className="row">
                <div className="col">
                    <BasicDetails />
                </div>
                <div className="col"></div>
            </div>
        </ProfileWrapper>
    );
};

export default UserProfile;
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { USER_API } from "../../Constants/Endpoints";
import { getDesignationById } from "../../Utils/getDesignation";
import { getUserRoleById } from "../../Utils/getUserRole";
import { IEmployeeInfo } from "../../Types/users";
import { message, Upload } from "antd";
import { AiFillCamera } from "react-icons/ai";

const Dashboard: React.FC = () => {

    const [selectedUser, setSelectedUser] = useState<IEmployeeInfo>();
    const [photo, setPhoto] = useState<string | undefined>('');

    useEffect(() => {
        const id = localStorage.getItem('id');
        axios.get(`${USER_API}/${id}`)
            .then((response) => {
                const desig = getDesignationById(response.data.designationId);
                const userRole = getUserRoleById(response.data.userRoleId);
                setSelectedUser({
                    ...response.data,
                    designation: desig,
                    userRole: userRole
                });
                setPhoto(selectedUser?.photo);
            })
            .catch((error) => {
                message.error(error.message);
            })
            .finally(() => {
                // setIsLoadingView(false);
            });
    }, []);

    const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        // setPhoto(event?.target?.files[0]?.name);
    }

    return (
        <>
            {/* <img src={selectedUser?.photo} alt="userphoto" /> */}
            <div style={{ backgroundImage: `url(${photo})`, backgroundRepeat: 'no-repeat', width: 150, height: 150 }}></div>
            <input type="file" name="photo" id="photo" onChange={handlePhotoChange} />
        </>
    );
};

export default Dashboard;
import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { USER_API } from "../../Constants/Endpoints";
import { IEmployeeInfo } from "../../Types/users";
import { getDesignationById } from "../../Utils/getDesignation";
import { getUserRoleById } from "../../Utils/getUserRole";
import BankDetails from "./BankDetails";
import BasicDetails from "./BasicDetails";
import CredentialContainer from "./CredentialContainer";
import EmergencyContact from "./EmergencyContact";
import IdProofContainer from "./IDProof";
import PhotoContainer from "./Photo";
import { ProfileWrapper } from "./style";

const UserProfile: React.FC = () => {

    const [userData, setUserData] = useState<IEmployeeInfo>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getUser = async () => {
            const id = localStorage.getItem('id');
            setLoading(true);
            axios.get(`${USER_API}/${id}`)
                .then(async (response) => {
                    const desig = await getDesignationById(response.data.designationId);
                    const userRole = await getUserRoleById(response.data.userRoleId);
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
                    setLoading(false);
                });
        }
        getUser();
    }, []);

    return (
        <ProfileWrapper>
            {
                loading ? (
                    <div
                        style={{
                            height: '100vh',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <BeatLoader color="#1890ff" />
                    </div>
                ) : (
                    <div className="outer-row">
                        <div className="outer-col">
                            <BasicDetails userData={userData} />
                            <EmergencyContact userData={userData} />
                        </div>
                        <div className="outer-col">
                            <BankDetails userData={userData} />
                            <IdProofContainer userData={userData} />
                            <PhotoContainer />
                            <CredentialContainer userData={userData} />
                        </div>
                    </div >
                )
            }
        </ProfileWrapper >
    );
};

export default UserProfile;
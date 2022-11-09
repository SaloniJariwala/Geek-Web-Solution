import { FormEvent, ChangeEvent, useState, useEffect } from "react";
import { BasicDetailsWrapper } from "./style";
import { FaKey, FaPencilAlt } from "react-icons/fa";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IProfileDetails } from "../../../Types/Profile";
import axios from "axios";
import { UPDATE_PROFILE_PHOTO_API } from "../../../Constants/Endpoints";
import { AiOutlineRight } from "react-icons/ai";
import { IEmployeeInfo } from "../../../Types/users";
import UpdateModal from "./UpdateModal";
import { getDesignationById } from "../../../Utils/getDesignation";
import { getUserRoleById } from "../../../Utils/getUserRole";
import ChangePasswordModal from "./ChangePasswordModal";

const BasicDetails: React.FC<IProfileDetails> = ({
    userData,
}) => {

    const [uploadedFile, setUploadedFile] = useState<File>();
    const [user, setUser] = useState<IEmployeeInfo | undefined>(userData);
    const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
    const [showChangePasswordModal, setShowChangePasswordModal] = useState<boolean>(false);

    const closeUpdateModal = () => {
        setShowUpdateModal(false);
    }

    const closeChangePasswordModal = () => {
        setShowChangePasswordModal(false);
    }

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const fileList = event.target.files;
        if (!fileList) {
            return;
        } else {
            setUploadedFile(fileList[0]);
        }
    }

    const updateUser = async (data: IEmployeeInfo) => {
        const desig = await getDesignationById(data.designationId);
        const userRole = await getUserRoleById(data.userRoleId);
        setUser({
            ...data,
            designation: desig,
            userRole: userRole
        })
    }

    const handleFileUpload = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (uploadedFile) {
            // const profile = document.getElementById("profile");
            const fd = new FormData();
            fd.append("profileImg", uploadedFile);
            console.log(fd.get('profileImg'));
            debugger
            try {
                await axios.post(`${UPDATE_PROFILE_PHOTO_API}/${userData?._id}`, fd.get('profileImg'))
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log("INNER CATCH ERROR ==> ", error.message);
                    });
            } catch (error) {
                console.log("OUTER CATCH ERROR ==> ", error);
            }
        }
    }


    return (
        <BasicDetailsWrapper>
            <div className="title">
                <span>Profile Details</span>
                <div className="button-row">
                    <OverlayTrigger
                        key="changePassword"
                        placement="left"
                        overlay={
                            <Tooltip id={`tooltip-left`}>
                                Change Password
                            </Tooltip>
                        }
                    >
                        <Button
                            type={"button"}
                            className="title-button"
                            onClick={() => setShowChangePasswordModal(true)}
                        >
                            <FaKey />
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        key="editDetails"
                        placement="left"
                        overlay={
                            <Tooltip id={`tooltip-left`}>
                                Edit Basic Details
                            </Tooltip>
                        }
                    >
                        <Button
                            type={"button"}
                            className="title-button"
                            style={{ marginLeft: 10 }}
                            onClick={() => setShowUpdateModal(true)}
                        >
                            <FaPencilAlt />
                        </Button>
                    </OverlayTrigger>
                </div>
            </div>
            <div className="profile-pic">
                <div className="profile-img-box">
                    <img
                        src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}
                        alt="profile-img"
                        className="profile-img"
                    />
                </div>
                <div className="profile-update">
                    <form id="profile" onSubmit={handleFileUpload}>
                        <input type="file" accept="image/*" name="profileImg" onChange={handleImageChange} />
                        <Button type="submit">Update Profile</Button>
                    </form>
                </div>
            </div>
            <div className="user-info">
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Name</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.name}</span>
                    </div>
                </div>
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Email</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.companyEmail}</span>
                    </div>
                </div>
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Personal Email</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.personalEmail}</span>
                    </div>
                </div>
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Phone No.</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.phoneNo}</span>
                    </div>
                </div>
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>User Role</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.userRole}</span>
                    </div>
                </div>
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Date of Birth</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.birthdate}</span>
                    </div>
                </div>
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Gender</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.gender}</span>
                    </div>
                </div>
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Designation</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.designation}</span>
                    </div>
                </div>
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Joining Date</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.joiningDate}</span>
                    </div>
                </div>
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Address</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.address}</span>
                    </div>
                </div>
            </div>
            <UpdateModal
                userData={user}
                showModal={showUpdateModal}
                updateUser={updateUser}
                closeUpdateModal={closeUpdateModal}
            />
            <ChangePasswordModal
                userData={user}
                showModal={showChangePasswordModal}
                closeChangePasswordModal={closeChangePasswordModal}
            />
        </BasicDetailsWrapper>

    );
};

export default BasicDetails;
import { useState } from "react";
import { message, Modal } from "antd";
import bcrypt from "bcryptjs";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { IChangePasswordModal } from "../../../Types/Profile";
import ConNewPasswordContainer from "./ConNewPassword";
import NewPasswordContainer from "./NewPassword";
import OldPasswordContainer from "./OldPassword";
import { ModalWrapper } from "./style";
import { ClipLoader } from "react-spinners";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Routepaths } from "../../../Routes/Routepaths";
import { useNavigate } from "react-router-dom";
import { CHANGE_PASSWORD_API } from "../../../Constants/Endpoints";

const ChangePasswordModal: React.FC<IChangePasswordModal> = ({
    showModal,
    userData,
    closeChangePasswordModal,
}) => {

    const methods = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    const handleFormSubmit = async (data: FieldValues) => {
        const password = userData?.password || "";
        const matchedPassword = await bcrypt.compare(data.oldPassword, password);
        if (!matchedPassword) {
            message.error("Old Password not matched!");
        } else {
            if (data.newPassword !== data.conNewPassword) {
                message.error("Confirm Password does not match with new password!");
            } else {
                await axios.patch(`${CHANGE_PASSWORD_API}/${userData?._id}`, { newPassword: data.newPassword })
                    .then((response) => {
                        if (response.data.success) {
                            message.success("Password Change Successfully");
                            localStorage.removeItem('LoginToken');
                            localStorage.removeItem('name');
                            localStorage.removeItem('id');
                            navigate(Routepaths.signin);
                        }
                    })
                    .catch((error) => {
                        message.error(error.message);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        }
    }

    return (
        <Modal
            centered
            title={<span className="modal-title">Change Password</span>}
            open={showModal}
            onCancel={closeChangePasswordModal}
            footer={null}
        >
            <ModalWrapper>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
                        <div className="md-row">
                            <OldPasswordContainer methods={methods} />
                        </div>
                        <div className="md-row">
                            <NewPasswordContainer methods={methods} />
                        </div>
                        <div className="md-row">
                            <ConNewPasswordContainer methods={methods} />
                        </div>
                        <div className="md-row" style={{ textAlign: "end" }}>
                            <Button type="submit" disabled={loading} style={{ width: 100 }}>
                                {loading ? (
                                    <ClipLoader color="white" size={20} />
                                ) : (
                                    <>Update</>
                                )}
                            </Button>
                        </div>
                    </form>
                </FormProvider>
            </ModalWrapper>
        </Modal>
    );
};

export default ChangePasswordModal;
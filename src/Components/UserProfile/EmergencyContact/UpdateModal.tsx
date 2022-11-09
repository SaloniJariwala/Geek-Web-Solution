import { useEffect, useState } from "react";
import { message, Modal } from "antd";
import axios from "axios";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { USER_API } from "../../../Constants/Endpoints";
import { IUpdateEmergencyContactDetailsModal, IUpdateModal } from "../../../Types/Profile";
import AddressContainer from "../../Users/AddEditEmployee/BasicDetails/AddressContainer";
import NameContainer from "../../Users/AddEditEmployee/BasicDetails/NameContainer";
import PhoneNoContainer from "../../Users/AddEditEmployee/BasicDetails/PhoneNoContainer";
import { UpdateModalWrapper } from "./style";
import { Button } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import EmailContainer from "../../SignIn/EmailContainer";

const UpdateModal: React.FC<IUpdateEmergencyContactDetailsModal> = ({
    showModal,
    updateEmergencyContactDetails,
    userData,
    closeUpdateModal
}) => {

    const methods = useForm();
    const { handleSubmit, setValue } = methods;
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (userData) {
            setValue('name', userData.emergencyDetails?.name);
            setValue('email', userData.emergencyDetails?.email);
            setValue('phoneNo', userData.emergencyDetails?.phoneNo);
            setValue('address', userData.emergencyDetails?.address);
        }
    }, []);

    const handleFormSubmit = async (values: FieldValues) => {
        const payload = {
            ...userData,
            emergencyDetails: values
        }
        setLoading(true);
        console.log(payload);
        await axios.put(`http://localhost:3010/v1/user/${userData?._id}`, payload)
            .then((response) => {
                if (response.status === 200) {
                    updateEmergencyContactDetails(response.data.emergencyDetails);
                    message.success("Emergency conatct details updated successfully");
                    closeUpdateModal();
                }
            })
            .catch((error) => {
                message.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (

        <Modal
            centered
            title={<span className="modal-title">Emergency Contact</span>}
            open={showModal}
            onCancel={closeUpdateModal}
            footer={null}
        >
            <UpdateModalWrapper>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className="md-row">
                            <NameContainer methods={methods} />
                        </div>
                        <div className="md-row">
                            <EmailContainer methods={methods} />
                        </div>
                        <div className="md-row">
                            <PhoneNoContainer methods={methods} />
                        </div>
                        <div className="md-row">
                            <AddressContainer methods={methods} />
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
            </UpdateModalWrapper>
        </Modal>

    );
};

export default UpdateModal;
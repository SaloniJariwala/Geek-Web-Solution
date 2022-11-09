import { useEffect, useState } from "react";
import { message, Modal } from "antd";
import axios from "axios";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { DESIGNATION_API, USER_API } from "../../../Constants/Endpoints";
import { IUpdateModal } from "../../../Types/Profile";
import { IEmployeeInfo, IOption } from "../../../Types/users";
import AddressContainer from "../../Users/AddEditEmployee/BasicDetails/AddressContainer";
import BirthdateContainer from "../../Users/AddEditEmployee/BasicDetails/BirthdateContainer";
import ComapnyEmailContainer from "../../Users/AddEditEmployee/BasicDetails/CompanyEmailContainer";
import DesignationContainer from "../../Users/AddEditEmployee/BasicDetails/DesignationContainer";
import GenderContainer from "../../Users/AddEditEmployee/BasicDetails/GenderContainer";
import NameContainer from "../../Users/AddEditEmployee/BasicDetails/NameContainer";
import PersonalEmailContainer from "../../Users/AddEditEmployee/BasicDetails/PersonalEmailContainer";
import PhoneNoContainer from "../../Users/AddEditEmployee/BasicDetails/PhoneNoContainer";
import { ModalWrapper } from "./style";
import { Button } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

const UpdateModal: React.FC<IUpdateModal> = ({
    showModal,
    userData,
    updateUser,
    closeUpdateModal
}) => {

    const methods = useForm();
    const { handleSubmit, setValue } = methods;
    const [designationData, setDesignationData] = useState<IOption[]>([]);
    const [user, setUser] = useState<IEmployeeInfo | undefined>(userData);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getDesignation = async () => {
            axios.get(DESIGNATION_API)
                .then((response) => {
                    setDesignationData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        getDesignation();
    }, []);

    const handleFormSubmit = async (values: FieldValues) => {
        setLoading(true);
        await axios.put(`${USER_API}/${userData?._id}`, values)
            .then((response) => {
                if (response.status === 200) {
                    setUser(response.data.user);
                    updateUser(response.data)
                    message.success("Profile updated successfully..");
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

    useEffect(() => {
        setValue('name', user?.name);
        setValue('companyEmail', user?.companyEmail);
        setValue('personalEmail', user?.personalEmail);
        setValue('phoneNo', user?.phoneNo);
        setValue('birthdate', user?.birthdate);
        setValue('gender', user?.gender);
        setValue('designationId', user?.designationId);
        setValue('address', user?.address);
    }, [user]);

    return (

        <Modal
            centered
            title={<span className="modal-title">Basic Details</span>}
            open={showModal}
            onCancel={closeUpdateModal}
            footer={null}
        >
            <ModalWrapper>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className="md-row">
                            <NameContainer methods={methods} />
                        </div>
                        <div className="md-row">
                            <ComapnyEmailContainer methods={methods} />
                        </div>
                        <div className="md-row">
                            <PersonalEmailContainer methods={methods} />
                        </div>
                        <div className="md-row">
                            <PhoneNoContainer methods={methods} />
                        </div>
                        <div className="md-row">
                            <BirthdateContainer methods={methods} />
                        </div>
                        <div className="md-row">
                            <GenderContainer methods={methods} />
                        </div>
                        <div className="md-row">
                            <DesignationContainer methods={methods} designationData={designationData} />
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
            </ModalWrapper>
        </Modal>

    );
};

export default UpdateModal;
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import bcrypt from "bcryptjs";
import NameContainer from "./NameContainer";
import { AddEditWrapper } from "../style";
import { Routepaths } from "../../../../Routes/Routepaths";
import ComapnyEmailContainer from "./CompanyEmailContainer";
import "../../../../App.css";
import PersonalEmailContainer from "./PersonalEmailContainer";
import PhoneNoContainer from "./PhoneNoContainer";
import BirthdateContainer from "./BirthdateContainer";
import GenderContainer from "./GenderContainer";
import DesignationContainer from "./DesignationContainer";
import JoiningDateContainer from "./JoiningDateContainer";
import UserRoleContainer from "./UserRoleContainer";
import PasswordContainer from "./PasswordContainer";
import AddressContainer from "./AddressContainer";
import { useEffect } from "react";
import axios from "axios";
import { API_KEY, DESIGNATION_API, USER_API, USER_ROLE_API } from "../../../../Constants/Endpoints";
import { IBasicDetailsContainerProps, IOption } from "../../../../Types/users";
import { message, Modal, Spin } from "antd";

const BasicDetails: React.FC<IBasicDetailsContainerProps> = ({
    getBasicDetails,
    userData
}) => {

    const methods = useForm();
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [designationData, setDesignationData] = useState<IOption[]>([]);
    const [userRoleData, setUserRoleData] = useState<IOption[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [basicDetails, setBasicDetails] = useState<FieldValues>({
        name: "",
        phoneNo: "",
        personalEmail: "",
        companyEmail: "",
        password: "",
        birthdate: "",
        gender: "",
        designationId: "",
        joiningDate: "",
        userRoleId: "",
        address: "",
    });

    useEffect(() => {
        if (id) {
            const getUser = async () => {
                setIsLoading(true);
                await axios.get(`${USER_API}/${id}`)
                    .then((response) => {
                        methods.setValue('name', response.data.name);
                        methods.setValue('phoneNo', response.data.phoneNo);
                        methods.setValue('companyEmail', response.data.companyEmail);
                        methods.setValue('personalEmail', response.data.personalEmail);
                        methods.setValue('birthdate', response.data.birthdate);
                        methods.setValue('gender', response.data.gender);
                        methods.setValue('designationId', response.data.designationId);
                        methods.setValue('joiningDate', response.data.joiningDate);
                        methods.setValue('userRoleId', response.data.userRoleId);
                        methods.setValue('address', response.data.address);
                    })
                    .catch((error) => {
                        message.error(error.message);
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            }
            getUser();
        }
    }, [id]);

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

    useEffect(() => {
        const getUserRole = async () => {
            axios.get(USER_ROLE_API)
                .then((response) => {
                    setUserRoleData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        getUserRole();
    }, []);

    const handleNext = () => {
        getBasicDetails(basicDetails);
        setShowModal(false);
    }

    const handleOnSubmit = (values: FieldValues) => {
        setBasicDetails(values);
        setShowModal(true);
    }

    return (
        <>
            <AddEditWrapper>
                {isLoading ? (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 200
                        }}
                    >
                        <Spin size="large" />
                    </div>
                ) : (
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
                            <div className="row">
                                <div className="col">
                                    <NameContainer methods={methods} />
                                </div>
                                <div className="col">
                                    <PhoneNoContainer methods={methods} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <PersonalEmailContainer methods={methods} />
                                </div>
                                <div className="col">
                                    <ComapnyEmailContainer methods={methods} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <PasswordContainer methods={methods} />
                                </div>
                                <div className="col">
                                    <BirthdateContainer methods={methods} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <GenderContainer methods={methods} />
                                </div>
                                <div className="col">
                                    <DesignationContainer
                                        methods={methods}
                                        designationData={designationData}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <JoiningDateContainer methods={methods} />
                                </div>
                                <div className="col">
                                    <UserRoleContainer
                                        methods={methods}
                                        userRoleData={userRoleData}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <AddressContainer methods={methods} />
                            </div>
                            <div className="button-row">
                                <Button
                                    variant="outline-primary"
                                    type="submit"
                                    style={{ width: '15%', marginRight: 20 }}
                                >
                                    Save
                                </Button>
                                <Button
                                    // style={{ width: '10%' }}
                                    style={{ width: '15%' }}
                                    variant="outline-secondary"
                                    onClick={() => navigate(Routepaths.userHome)}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </FormProvider>
                )}
            </AddEditWrapper>
            <Modal
                title="Are you sure you wan to save ?"
                centered
                open={showModal}
                onOk={handleNext}
                onCancel={() => setShowModal(false)}
            >
                <p>Once You save the Data, You can not go back now..!!</p>
            </Modal>
        </>
    );
};

export default BasicDetails;
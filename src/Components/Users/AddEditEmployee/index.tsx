import { message, Tabs } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { USER_API, POST_USER } from '../../../Constants/Endpoints';
import { Routepaths } from '../../../Routes/Routepaths';
import { IBankDetails, IEmployeeInfo } from '../../../Types/users';
import BankDetails from './BankDetails';
import BasicDetails from "./BasicDetails";

const AddEmployees: React.FC = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [basicDetails, setBasicDetails] = useState<FieldValues>();
    const [bankDetails, setBankDetails] = useState<IBankDetails>();
    const [currentTab, setCurrentTab] = useState<string>('basic');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user, setUser] = useState<IEmployeeInfo>();

    useEffect(() => {
        if (id) {
            axios.get(`${USER_API}/${id}`)
                .then((response) => {
                    setUser(response.data);
                })
                .catch((error) => {
                    message.error(error.message);
                });
        }
    }, [id]);

    const getBasicDetails = (data: FieldValues) => {
        setBasicDetails(data);
        setCurrentTab('bank');
    }

    const getBankDetails = async (data: IBankDetails) => {
        setBankDetails(data);
        const payload = {
            ...basicDetails,
            ...data
        };
        if (id) {
            setIsLoading(true);
            await axios.put(`${USER_API}/${id}`, payload)
                .then((response) => {
                    if (response.status === 200) {
                        message.success('User Updated Successfully..');
                    }
                    navigate(Routepaths.userHome);
                })
                .catch((error) => {
                    message.error(error.message);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setIsLoading(true);
            await axios.post(POST_USER, payload)
                .then((response) => {
                    if (response.status === 200) {
                        message.success('User Added Successfully..');
                    }
                    navigate(Routepaths.userHome);
                })
                .catch((error) => {
                    message.error(error.message);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }

    return (
        <>
            <div className="container">
                {
                    !isLoading ? (
                        <Tabs
                            activeKey={currentTab}
                            type="card"
                        >
                            <Tabs.TabPane tab="Basic Details" key="basic">
                                <BasicDetails getBasicDetails={getBasicDetails} userData={user} />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Bank Details" key="bank">
                                <BankDetails getBankDetails={getBankDetails} userData={user} />
                            </Tabs.TabPane>
                        </Tabs>
                    ) : (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 400
                            }}
                        >
                            <BeatLoader color="#1890ff" />
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default AddEmployees;
import { useEffect, useState } from "react";
import { message, Modal } from "antd";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { IUpdateModal } from "../../../Types/Profile";
import AccountNoContainer from "../../Users/AddEditEmployee/BankDetails/AccountNoContainer";
import BankNameContainer from "../../Users/AddEditEmployee/BankDetails/BankNameContainer";
import IfscContainer from "../../Users/AddEditEmployee/BankDetails/IfscContainer";
import { UpdateModalWrapper } from "./style";
import { Button } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { USER_API } from "../../../Constants/Endpoints";

const UpdateModal: React.FC<IUpdateModal> = ({
    showModal,
    userData,
    closeUpdateModal,
    updateUser
}) => {

    const methods = useForm();
    const { setValue } = methods;
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (userData) {
            setValue('bankName', userData.bankName);
            setValue('accountNo', userData.accountNo);
            setValue('ifscCode', userData.ifscCode);
        }
    }, [userData]);

    const handleFormSubmit = async (values: FieldValues) => {
        const payload = {
            ...userData,
            bankName: values.bankName,
            accountNo: values.accountNo,
            ifscCode: values.ifscCode
        };
        setLoading(true);
        await axios.put(`${USER_API}/${userData?._id}`, payload)
            .then((response) => {
                if (response.status === 200) {
                    updateUser(response.data);
                    message.success('Bank Details updated successfully');
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
            title={<span className="modal-title">Bank Deatils</span>}
            open={showModal}
            onCancel={closeUpdateModal}
            footer={null}
        >
            <UpdateModalWrapper>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
                        <div className="md-row">
                            <BankNameContainer methods={methods} />
                        </div>
                        <div className="md-row">
                            <AccountNoContainer methods={methods} />
                        </div>
                        <div className="md-row">
                            <IfscContainer methods={methods} />
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
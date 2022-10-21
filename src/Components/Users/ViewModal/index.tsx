import { Modal } from "antd";
import { IViewModalContainerProps } from "../../../Types/users";
import { ViewModalWrapper } from "./style";
import { BeatLoader } from "react-spinners";
import PersonalInfo from "./PersonalInfo";
import BankInfo from "./BankInfo";
import Credentials from "./Credentials";

const ViewModal: React.FC<IViewModalContainerProps> = ({
    showModal,
    closeViewModal,
    isLoading,
    userData
}) => {

    return (
        <Modal
            title={!isLoading && "Profile Details"}
            open={showModal}
            footer={null}
            onCancel={closeViewModal}
        >
            <ViewModalWrapper>
                {isLoading ? (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <BeatLoader color="#1890ff" />
                    </div>
                ) : (
                    <div>
                        <div className="title">
                            Personal Details
                        </div>
                        <div style={{ margin: '5%' }}>
                            <PersonalInfo userData={userData} />
                        </div>
                        <div className="title">
                            Bank Details
                        </div>
                        <div style={{ margin: '5%' }}>
                            <BankInfo userData={userData} />
                        </div>
                        <div className="title">
                            Credentials
                        </div>
                        <div style={{ margin: '5%' }}>
                            <Credentials userData={userData} />
                        </div>
                    </div>
                )}
            </ViewModalWrapper>
        </Modal>
    );
};

export default ViewModal;
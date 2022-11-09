import { useState } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { IProfileDetails } from "../../../Types/Profile";
import { IEmployeeInfo } from "../../../Types/users";
import { BankDetailsWrapper } from "./style";
import UpdateModal from "./UpdateModal";

const BankDetails: React.FC<IProfileDetails> = ({
    userData,
}) => {

    const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
    const [user, setUser] = useState<IEmployeeInfo | undefined>(userData);

    const closeUpdateModal = () => {
        setShowUpdateModal(false);
    }

    const updateDetails = (data: IEmployeeInfo) => {
        setUser(data);
    }

    return (
        <BankDetailsWrapper>
            <div className="title">
                <span>Bank Details</span>
                <OverlayTrigger
                    key="editDetails"
                    placement="left"
                    overlay={
                        <Tooltip id={`tooltip-left`}>
                            Edit Bank Details
                        </Tooltip>
                    }
                >
                    <Button
                        type={"button"}
                        className="title-button"
                        onClick={() => setShowUpdateModal(true)}
                    >
                        <FaPencilAlt />
                    </Button>
                </OverlayTrigger>
            </div>
            <div className="info-content">
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Salary</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.salary}</span>
                    </div>
                </div>
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Bank Name</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.bankName}</span>
                    </div>
                </div>
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Account No.</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.accountNo}</span>
                    </div>
                </div>
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>IFSC Code</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{user?.ifscCode}</span>
                    </div>
                </div>
            </div>
            <UpdateModal
                showModal={showUpdateModal}
                closeUpdateModal={closeUpdateModal}
                userData={user}
                updateUser={updateDetails}
            />
        </BankDetailsWrapper>
    );
};

export default BankDetails;
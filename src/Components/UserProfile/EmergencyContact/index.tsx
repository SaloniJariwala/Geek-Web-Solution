import { useState } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { IEmergencyContact, IProfileDetails } from "../../../Types/Profile";
import { EmergencyContactWrapper } from "./style";
import UpdateModal from "./UpdateModal";

const EmergencyContact: React.FC<IProfileDetails> = ({
    userData,
}) => {

    const [contactDetails, setContactDetails] = useState<IEmergencyContact | undefined>(userData?.emergencyDetails);
    const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);

    const updateEmergencyConatctDetails = (data: IEmergencyContact) => {
        setContactDetails(data);
    }

    const closeUpdateModal = () => {
        setShowUpdateModal(false);
    }

    return (
        <EmergencyContactWrapper>
            <div className="title">
                <span>Emergency Contact</span>
                <OverlayTrigger
                    key="editDetails"
                    placement="left"
                    overlay={
                        <Tooltip id={`tooltip-left`}>
                            Edit Emergency Contact Details
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
                {!contactDetails ? (
                    <div className="blank-details">
                        Emergency Contact Not Found!
                    </div>
                ) : (
                    <>
                        <div className="pr-row">
                            <div className="pr-col col-title">
                                <span>Name</span>
                                <AiOutlineRight />
                            </div>
                            <div className="pr-col col-info">
                                <span>{contactDetails?.name}</span>
                            </div>
                        </div>
                        <div className="pr-row">
                            <div className="pr-col col-title">
                                <span>Email</span>
                                <AiOutlineRight />
                            </div>
                            <div className="pr-col col-info">
                                <span>{contactDetails?.email}</span>
                            </div>
                        </div>
                        <div className="pr-row">
                            <div className="pr-col col-title">
                                <span>Phone No.</span>
                                <AiOutlineRight />
                            </div>
                            <div className="pr-col col-info">
                                <span>{contactDetails?.phoneNo}</span>
                            </div>
                        </div>
                        <div className="pr-row">
                            <div className="pr-col col-title">
                                <span>Address</span>
                                <AiOutlineRight />
                            </div>
                            <div className="pr-col col-info">
                                <span>{contactDetails?.address}</span>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <UpdateModal
                showModal={showUpdateModal}
                closeUpdateModal={closeUpdateModal}
                updateEmergencyContactDetails={updateEmergencyConatctDetails}
                userData={userData}
            />
        </EmergencyContactWrapper>
    );
};

export default EmergencyContact;
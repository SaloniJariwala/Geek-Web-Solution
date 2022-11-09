import { useState } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { IProfileDetails } from "../../../Types/Profile";
import { CredentialWrapper } from "./style";

const CredentialContainer: React.FC<IProfileDetails> = ({
    userData,
}) => {

    const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);

    return (
        <CredentialWrapper>
            <div className="title">
                <span>Credentials</span>    
            </div>
            <div className="info-content">
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Gmail Id</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{userData?.companyEmail}</span>
                    </div>
                </div>
                <div className="pr-row">
                    <div className="pr-col col-title">
                        <span>Skype Id</span>
                        <AiOutlineRight />
                    </div>
                    <div className="pr-col col-info">
                        <span>{userData?.companyEmail}</span>
                    </div>
                </div>
            </div>
        </CredentialWrapper>
    );
};

export default CredentialContainer;
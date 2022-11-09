import { useState } from "react";
import { IProfileDetails } from "../../../Types/Profile";
import { IdProofWrapper } from "./style";

const IdProofContainer: React.FC<IProfileDetails> = ({
    userData,
}) => {

    return (
        <IdProofWrapper>
            <div className="title">
                <span>Emergency Contact</span>
            </div>
            <div className="info-content">
                <div className="blank-details">
                    No ID proof uploaded!
                </div>
            </div>
        </IdProofWrapper>
    );
};

export default IdProofContainer;
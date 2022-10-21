import { IPersonalInfoContainerProps } from "../../../Types/users";
import { PersonalInfoWrapper } from "./style";

const BankInfo: React.FC<IPersonalInfoContainerProps> = ({
    userData,
}) => {
    return (
        <PersonalInfoWrapper>
            <div className="row-line">
                <div className="label">
                    <div>Salary</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.salary}
                </div>
            </div>
            <div className="row-line">
                <div className="label">
                    <div>Bank Name</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.bankName}
                </div>
            </div>
            <div className="row-line">
                <div className="label">
                    <div>Account No.</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.accountNo}
                </div>
            </div>
            <div className="row-line">
                <div className="label">
                    <div>IFSC Code</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.ifscCode}
                </div>
            </div>
        </PersonalInfoWrapper>
    );
};

export default BankInfo;
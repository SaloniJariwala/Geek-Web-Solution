import { IPersonalInfoContainerProps } from "../../../Types/users";
import { PersonalInfoWrapper } from "./style";

const Credentials: React.FC<IPersonalInfoContainerProps> = ({
    userData,
}) => {
    return (
        <PersonalInfoWrapper>
            <div className="row-line">
                <div className="label">
                    <div>Gmail Id</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.companyEmail}
                </div>
            </div>
            <div className="row-line">
                <div className="label">
                    <div>Skype Id</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.companyEmail}
                </div>
            </div>
        </PersonalInfoWrapper>
    );
};

export default Credentials;
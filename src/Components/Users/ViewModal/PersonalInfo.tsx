import { IPersonalInfoContainerProps } from "../../../Types/users";
import { PersonalInfoWrapper } from "./style";

const PersonalInfo: React.FC<IPersonalInfoContainerProps> = ({
    userData,
}) => {

    return (
        <PersonalInfoWrapper>
            <div className="row-line">
                <div className="label">
                    <div>Name</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.name}
                </div>
            </div>
            <div className="row-line">
                <div className="label">
                    <div>Personal Email</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.personalEmail}
                </div>
            </div>
            <div className="row-line">
                <div className="label">
                    <div>Company Email</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.companyEmail}
                </div>
            </div>
            <div className="row-line">
                <div className="label">
                    <div>Phone No.</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.phoneNo}
                </div>
            </div>
            <div className="row-line">
                <div className="label">
                    <div>User Role</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.userRole}
                </div>
            </div>
            <div className="row-line">
                <div className="label">
                    <div>Date of Birth</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.birthdate}
                </div>
            </div>
            <div className="row-line">
                <div className="label">
                    <div>Gender</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.gender}
                </div>
            </div>
            <div className="row-line">
                <div className="label">
                    <div>Designation</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.designation}
                </div>
            </div>
            <div className="row-line">
                <div className="label">
                    <div>Joining Date</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.joiningDate}
                </div>
            </div>
            <div className="row-line">
                <div className="label">
                    <div>Address</div>
                    <div>:</div>
                </div>
                <div className="value">
                    {userData?.address}
                </div>
            </div>
        </PersonalInfoWrapper>
    );
};

export default PersonalInfo;
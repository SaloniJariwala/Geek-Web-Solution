import { AlignType } from "react-bootstrap/esm/types";
import { FieldValues } from "react-hook-form";
import { IMemoisedComponentProps } from "./common";
import { IEmergencyContact } from "./Profile";

export interface IOption {
    _id: string;
    name: string;
}

export interface IOptionContainerProps extends IMemoisedComponentProps {
    designationData?: IOption[];
    userRoleData?: IOption[];
}

export interface IBankDetailsContainerProps {
    getBankDetails: (data: IBankDetails) => void;
    userData?: IEmployeeInfo;
}

export interface IBasicDetailsContainerProps {
    getBasicDetails: (data: FieldValues) => void;
    userData?: IEmployeeInfo;
}

export interface IBasicDetails {
    photo?: string | undefined;
    name?: string | undefined;
    phoneNo?: string | undefined;
    personalEmail?: string | undefined;
    companyEmail?: string | undefined;
    password?: string | undefined;
    birthdate?: string | undefined;
    gender?: string | undefined;
    designationId?: string | undefined;
    joiningDate?: string | undefined;
    userRoleId?: string | undefined;
    address?: string | undefined;
}

export interface IBankDetails {
    salary?: string | undefined;
    bankName?: string | undefined;
    accountNo?: string | undefined;
    ifscCode?: string | undefined;
}

export interface IEmployeeInfo extends IBankDetails, IBasicDetails {
    _id?: string | undefined;
    designation?: string;
    userRole?: string;
    emergencyDetails?: IEmergencyContact;
}

export interface IColumnType {
    title: string;
    key: string;
    render: (record: IEmployeeInfo) => any;
    width?: string | number;
}

export interface IViewModalContainerProps {
    showModal: boolean;
    closeViewModal: () => void;
    userData: IEmployeeInfo | undefined;
    isLoading: boolean;
}

export interface IPersonalInfoContainerProps {
    userData: IEmployeeInfo | undefined;
}
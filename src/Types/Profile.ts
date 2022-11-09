import { IEmployeeInfo } from "./users";

export interface IProfileDetails {
    userData: IEmployeeInfo | undefined;
}

export interface IProfileInfo {
    title: string;
    value: string | undefined;
}

export interface IUpdateModal extends IProfileDetails {
    showModal: boolean;
    closeUpdateModal: () => void;
    updateUser: (data: IEmployeeInfo) => void;
}

export interface IUpdateEmergencyContactDetailsModal extends IProfileDetails {
    showModal: boolean;
    closeUpdateModal: () => void;
    updateEmergencyContactDetails: (data: IEmergencyContact) => void;
}

export interface IEmergencyContact {
    name: string;
    phoneNo: string;
    email: string;
    address: string;
}

export interface IChangePasswordModal extends IProfileDetails {
    showModal: boolean;
    closeChangePasswordModal: () => void;
}
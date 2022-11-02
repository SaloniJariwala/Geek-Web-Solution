import React from "react";

export interface ILayout {
    MainComponent: React.ReactNode;
}

export interface ISideMenu {
    title: string;
    link: string;
    icon: React.ReactNode;
}

export interface IPageHeaderContainerProps {
    title: string;
}

export interface ISideBarContainerProps {
    show: boolean;
    handleClose: () => void;
}

export interface IMemoisedComponentProps {
    methods: any;
}

export interface ISignInUser {
    token: string;
    name: string;
    id: string;
}
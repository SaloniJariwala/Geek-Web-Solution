import { useState } from "react";
import styled from "styled-components";
import { IPageHeaderContainerProps } from "../Types/common";
import SideBar from "./SideBar";

const HeaderWrapper = styled.div`
    width: 100%;
    background-color: white;
    font-weight: bolder;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const PageHeader: React.FC<IPageHeaderContainerProps> = ({ title }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ display: 'flex', alignItems: 'center', height: 70 }}>
            <div>
                <img
                    src="/images/short_logo.png"
                    alt="logo"
                    height={70}
                    width={70}
                    onClick={handleShow}
                    style={{ cursor: 'pointer' }}
                />
                <SideBar show={show} handleClose={handleClose} />
            </div>
            <HeaderWrapper>
                {title}
            </HeaderWrapper>
        </div>

    );
};

export default PageHeader;
import styled from "styled-components";

export const SideBarWrapper = styled.div`
    font-family: 'Roboto Slab', serif;  
    .side-menus {
        width: 100%;
        background-color: #2f323e;
        color: white;
        height: 70px;
        display: flex;
        padding: 0 20px;
        justify-content: flex-start;
        align-items: center;
        font-size: 18px;
        cursor: pointer;
        font-family: 'Rubik', sans-serif;
        &:hover {
            background-color: #007bff;
        }
    }
    .menu-icon {
        margin-right: 20px;
        font-size: 28px;
    }
    .profile-menus {
        width: 100%;
        background-color: #2f323e;
        color: white;
        /* height: 70px; */
        display: flex;
        /* margin: 5px 0px; */
        padding: 5px 20px;
        padding-left: 75px;
        justify-content: flex-start;
        align-items: center;
        font-size: 18px;
        cursor: pointer;
        font-family: 'Rubik', sans-serif;
        &:hover {
            background-color: black;
        }
    }
    .profile-header-outer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .profile-header-inner {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`;
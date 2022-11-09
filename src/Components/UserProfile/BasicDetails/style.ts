import styled from "styled-components";

export const BasicDetailsWrapper = styled.div`
    position: relative;
    border-radius: 6px;
    display: block;
    width: 55%;
    margin: 0 auto 30px auto;
    background-color: #fff;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    .title {
        width: 100%;
        position: relative;
        display: flex;
        align-content: center;
        justify-content: space-between;
        background: #0675e8;
        padding: 10px 15px;
        color: white;
        font-size: 18px;
        line-height: 30px;
        border-radius: 6px 6px 0 0;
    }
    .title-button {
        background: rgba(255, 255, 255, 1);
        color: black;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        
    }
    .button-row {
        width: auto;
        display: flex;
        justify-content: space-between;
    }
    .profile-pic {
        position: relative;
        /* display: block; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 15px;
        background: #ffffff;
        &::before {
            content: '';
            position: absolute;
            top: -15px;
            /* left: 50%; */
            /* transform: translate(-50%, -50%); */
            height: 125px;
            width: 100%;
            display: block;
            background: #0675e8;
        }
    }
    .profile-img-box {
        position: relative;
        display: inline-block;
        border: 10px solid #ffffff;
        border-radius: 50%;
        background: #fff;
    }
    .profile-img {
        position: relative;
        height: 200px;
        width: 200px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
        overflow: hidden;
    }
    .profile-update {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .user-info {
        border-radius: 0 0 6px 6px;
        padding: 10px 30px;
    }
    .pr-row {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        width: 100%;
        background: #fff;
        padding: 5px 10px;
    }
    .pr-col {
        width: 50%;
    }
    .col-title {
        display: flex;
        width: 50%;
        padding-right: 25px;
        justify-content: space-between;
        align-items: baseline;
        line-height: 1.5;
        font-size: 17px;
        font-weight: 600;
    }
    .col-info {
        font-size: 17px;
        display: flex;
        align-items: flex-start;
    }
`;

export const ModalWrapper = styled.div`
    font-family: 'Rubik', sans-serif;;
    .md-row {
        padding: 10px;
    }
`;

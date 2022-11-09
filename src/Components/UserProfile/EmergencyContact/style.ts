import styled from "styled-components";

export const EmergencyContactWrapper = styled.div`
    border-radius: 6px;
    width: 55%;
    background-color: #fff;
    margin: 0 auto 30px auto;
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
    .info-content {
        display: block;
        padding: 20px;  
    }
    .blank-details {
        width: 100%;
        text-align: center;
        border: 1px dashed #000;
        padding: 15px;
       font-size: 17px;
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

export const UpdateModalWrapper = styled.div`
    font-family: 'Rubik', sans-serif;;
    .md-row {
        padding: 10px;
    }
`;
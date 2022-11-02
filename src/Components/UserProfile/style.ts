import styled from "styled-components";

export const ProfileWrapper = styled.div`
    background-color: #dbdbdb;
    height: max-content;
    .row {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        background-color: #dbdbdb;
    }
    .col {
        width: 50%;
        display: flex;
        justify-content: center;
    }
`;

export const BasicDetailsWrapper = styled.div`
    border-radius: 6px;
    display: block;
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
        width: 100%;
        position: relative;
        display: flex;
        align-content: center;
        justify-content: space-between;
        background: #0675e8;
        padding: 10px 15px;
    }
`;
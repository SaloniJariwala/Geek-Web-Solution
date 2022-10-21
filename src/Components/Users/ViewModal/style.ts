import styled from "styled-components";

export const ViewModalWrapper = styled.div`
    .title {
        font-size: 20px;
        font-family: rubik, 'sans-serif';
        text-decoration: underline;
        font-weight: bold;
    }
`;

export const PersonalInfoWrapper = styled.div`
    .row-line {
        display: flex;
        align-items: center;
        height: 40px;
    }
    .label {
        font-size: 16px;
        font-weight: bold;
        width: 40%;
        display: flex;
        justify-content: space-between;
        margin-right: 5%;
    }
    .value {
        font-size: 16px;
    }
`;
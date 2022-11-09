import styled from "styled-components";

export const IdProofWrapper = styled.div`
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
`;
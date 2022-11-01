import styled from "styled-components";
import {Button} from "react-bootstrap";

export const SignInWrapper = styled.div`
  display: flex;
  .bg-image {
    height: 100vh;
    width: 100%;
  }
`;

export const LoginComWrapper = styled.div`
    padding: 33px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .title {
        font-size: 32px;
        font-weight: 700;
        color: #212121;
        margin: 0 0 50px 0;
    }
    .copyright {
      font-size: 14px;
      display: block;
    }
`;

export const Link = styled.a`
  color: black;
  text-align: end;
  :hover {
    color: black;
  }
`;

export const SignInBtn = styled(Button)`
  display: block;
  font-size: 16px;
  padding: 10px 36px;
  line-height: 26px;
  color: white;
  background-color: #007bff;
  border-color: #007bff;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 30px;
`;

export const FormWrapper = styled.div`
  .row {
      margin-bottom: 1.5em;
    }
`;
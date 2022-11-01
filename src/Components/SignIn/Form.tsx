import React from "react";
import { useNavigate } from "react-router-dom";
import {FieldValues, FormProvider, useForm} from "react-hook-form";
import EmailContainer from "./EmailContainer";
import PasswordContainer from "./PasswordContainer";
import {FormWrapper, SignInBtn} from "./style";
import axios from "axios";
import {SIGNIN_API} from "../../Constants/Endpoints";
import {Routepaths} from "../../Routes/Routepaths";
import {message} from "antd";

const Form: React.FC = () => {

    const methods = useForm();
    const navigate = useNavigate();

    const handleOnSubmit = (values: FieldValues) => {
        axios.post(SIGNIN_API, values)
            .then((response) => {
                localStorage.setItem('LogInToken', response.data.token);
                navigate(Routepaths.dashboard);
            })
            .catch((error) => {
                message.error(error.message);
            });
    };

    return (
        <FormWrapper>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
                    <div className="row">
                        <EmailContainer methods={methods} />
                    </div>
                    <div className="row">
                        <PasswordContainer methods={methods} />
                    </div>
                    <SignInBtn type='submit'>Sign In</SignInBtn>
                </form>
            </FormProvider>
        </FormWrapper>
    );
};

export default Form;
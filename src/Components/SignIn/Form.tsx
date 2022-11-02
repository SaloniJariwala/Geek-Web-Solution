import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import EmailContainer from "./EmailContainer";
import PasswordContainer from "./PasswordContainer";
import { FormWrapper, SignInBtn } from "./style";
import axios from "axios";
import { SIGNIN_API } from "../../Constants/Endpoints";
import { Routepaths } from "../../Routes/Routepaths";
import { message } from "antd";
import { ClipLoader } from "react-spinners";
import { ISignInUser } from "../../Types/common";

const Form: React.FC = () => {

    const methods = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    const handleOnSubmit = (values: FieldValues) => {
        setLoading(true);
        axios.post(SIGNIN_API, values)
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem('LoginToken', response.data.token);
                    localStorage.setItem('name', response.data.user.name);
                    localStorage.setItem('id', response.data.user._id);
                    navigate(Routepaths.dashboard);
                } else {
                    message.error(response.data);
                }
            })
            .catch((error) => {
                message.error(error.message);
            })
            .finally(() => {
                setLoading(false);
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
                    <SignInBtn type='submit' disabled={loading}>
                        {loading ? (
                            <ClipLoader color="white" size={30} />
                        ) : (
                            <>Sign In</>
                        )}
                    </SignInBtn>
                </form>
            </FormProvider>
        </FormWrapper>
    );
};

export default Form;
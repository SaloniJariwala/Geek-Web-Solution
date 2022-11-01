import React from 'react';
import {Link, LoginComWrapper, SignInBtn} from "./style";
import Form from "./Form";

const LoginCom: React.FC = () => {
    return (
        <LoginComWrapper>
            <img src="/images/geekwebsolution.png"  alt="logo" height="44px" width="280px" />
            <div>
                <div>
                    <h2 style={{ marginBottom: 0 }}>Welcome Back!</h2>
                    <h2 className="title">
                        Sign into your Account
                    </h2>
                </div>
                <Form />
            </div>
            <div className="copyright">&copy; Copyright 2016 - 2021 by
                <Link href="https://geekwebsolution.com/" target="_blank" style={{ color: 'black' }}> Geek Web Solution</Link>
            </div>
        </LoginComWrapper>
    );
};

export default LoginCom;
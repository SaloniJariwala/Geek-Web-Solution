import React from "react";
import {SignInWrapper} from "./style";
import LoginCom from "./LoginCom";

const SignIn: React.FC = () => {
    return (
        <SignInWrapper>
            <div style={{ width: '50%' }}>
                <img
                    className="bg-image"
                    src={'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=' +
                    'MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
                    alt={'login'}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                <LoginCom />
            </div>
        </SignInWrapper>
    );
};

export default SignIn;
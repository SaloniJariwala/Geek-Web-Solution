import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../Types/common";
import { FloatingLabel, Form } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import React from "react";
import {Link} from "./style";

const PasswordContainer: React.FC<IMemoisedComponentProps> = ({ methods }) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <Controller
                control={control}
                name="password"
                rules={{ required: 'Enter Password' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                    >
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </FloatingLabel>
                )}
            />
            {errors.password && errors.password.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.password.message}
                </div>
            )}
            <div style={{ textAlign: 'end' }}>
                <Link>Forgot Password</Link>
            </div>
        </div>
    );
};

export default PasswordContainer;
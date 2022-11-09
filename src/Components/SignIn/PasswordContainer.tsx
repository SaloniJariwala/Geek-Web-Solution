import React, { ChangeEvent, useState } from "react";
import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../Types/common";
import { FloatingLabel, Form } from "react-bootstrap";
import { AiOutlineExclamationCircle, AiFillEye } from "react-icons/ai";
import { Link } from "./style";

const PasswordContainer: React.FC<IMemoisedComponentProps> = ({ methods }) => {

    const {
        control,
        formState: { errors },
    } = methods;

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setShowPassword(true);
        } else {
            setShowPassword(false);
        }
    }

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
                            type={showPassword ? 'text' : 'password'}
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Form.Check
                    label="Show Password"
                    name="showPassword"
                    onChange={handleRadioChange}
                    id={`showPassword`}
                />
                <Link>Forgot Password</Link>
            </div>
        </div>
    );
};

export default PasswordContainer;
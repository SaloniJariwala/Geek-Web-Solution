import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../Types/common";
import { FloatingLabel, Form } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import React from "react";

const EmailContainer: React.FC<IMemoisedComponentProps> = ({
    methods,
}) => {

    const {
        control,
        formState: { errors },
    } = methods;

    const isValidEmail = (email: string) => {
        return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
            .test(email);
    };

    return (
        <div>
            <Controller
                control={control}
                name="email"
                rules={{
                    required: 'Enter email address',
                    validate: (value) => isValidEmail(value)
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                    >
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </FloatingLabel>
                )}
            />
            {errors.email && errors.email.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.email.message}
                </div>
            )}
        </div>
    );
};

export default EmailContainer;
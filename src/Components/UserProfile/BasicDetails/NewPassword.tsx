import { useState } from "react";
import { FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineExclamationCircle } from "react-icons/ai";
import { IMemoisedComponentProps } from "../../../Types/common";

const NewPasswordContainer: React.FC<IMemoisedComponentProps> = ({
    methods
}) => {

    const {
        control,
        formState: { errors }
    } = methods;
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div>
            <Controller
                control={control}
                name="newPassword"
                rules={{ required: 'Enter New Password' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputGroup>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="New Password"
                        >
                            <Form.Control
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter password"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        </FloatingLabel>
                        <InputGroup.Text
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ cursor: 'pointer' }}
                        >
                            {!showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </InputGroup.Text>
                    </InputGroup>
                )}
            />
            {errors.newPassword && errors.newPassword.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.newPassword.message}
                </div>
            )}
        </div>
    );
};

export default NewPasswordContainer;
import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../../../Types/common";
import { FloatingLabel, Form } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const IfscContainer: React.FC<IMemoisedComponentProps> = ({ methods }) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <Controller
                control={control}
                name="ifscCode"
                rules={{
                    required: 'Enter IFSC Code',
                    maxLength: {
                        value: 11,
                        message: 'Enter valid IFSC Code'
                    },
                    minLength: {
                        value: 11,
                        message: 'Enter valid IFSC Code'
                    }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FloatingLabel
                        controlId="floatingInput"
                        label="IFSC Code"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Enter IFSC Code"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </FloatingLabel>
                )}
            />
            {errors.ifscCode && errors.ifscCode.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.ifscCode.message}
                </div>
            )}
        </div>
    );
};

export default IfscContainer;
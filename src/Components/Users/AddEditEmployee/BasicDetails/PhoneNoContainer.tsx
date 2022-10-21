import { Controller } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FloatingLabel, Form } from "react-bootstrap";
import { IMemoisedComponentProps } from "../../../../Types/common";

const PhoneNoContainer: React.FC<IMemoisedComponentProps> = ({ methods }) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <Controller
                control={control}
                name="phoneNo"
                rules={{
                    required: `Enter employee's phone number`,
                    maxLength: {
                        value: 10,
                        message: 'Enter valid number'
                    },
                    minLength: {
                        value: 10,
                        message: 'Enter valid number'
                    }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Phone No."
                    >
                        <Form.Control
                            type="text"
                            placeholder="Enter phone number"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </FloatingLabel>
                )}
            />
            {errors.phoneNo && errors.phoneNo.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.phoneNo.message}
                </div>
            )}
        </div>
    );
};

export default PhoneNoContainer;
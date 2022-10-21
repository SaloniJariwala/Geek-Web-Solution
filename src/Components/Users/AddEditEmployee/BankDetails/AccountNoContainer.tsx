import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../../../Types/common";
import { FloatingLabel, Form } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const AccountNoContainer: React.FC<IMemoisedComponentProps> = ({ methods }) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <Controller
                control={control}
                name="accountNo"
                rules={{
                    required: 'Enter account number',
                    maxLength: {
                        value: 18,
                        message: 'Enter valid account number'
                    },
                    minLength: {
                        value: 9,
                        message: 'Enter valid account number'
                    }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Account No."
                    >
                        <Form.Control
                            type="text"
                            placeholder="Enter accountNo"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </FloatingLabel>
                )}
            />
            {errors.accountNo && errors.accountNo.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.accountNo.message}
                </div>
            )}
        </div>
    );
};

export default AccountNoContainer;
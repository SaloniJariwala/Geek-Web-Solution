import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../../../Types/common";
import { FloatingLabel, Form } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const BankNameContainer: React.FC<IMemoisedComponentProps> = ({ methods }) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <Controller
                control={control}
                name="bankName"
                rules={{ required: 'Enter bank name' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Bank Name"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Enter bank name"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </FloatingLabel>
                )}
            />
            {errors.bankName && errors.bankName.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.bankName.message}
                </div>
            )}
        </div>
    );
};

export default BankNameContainer;
import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../../../Types/common";
import { FloatingLabel, Form } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const ComapnyEmailContainer: React.FC<IMemoisedComponentProps> = ({
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
                name="companyEmail"
                rules={{
                    required: 'Enter company email address',
                    validate: (value) => isValidEmail(value)
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Company Email"
                    >
                        <Form.Control
                            type="email"
                            placeholder="Enter company email"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </FloatingLabel>
                )}
            />
            {errors.companyEmail && errors.companyEmail.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.companyEmail.message}
                </div>
            )}
        </div>
    );
};

export default ComapnyEmailContainer;
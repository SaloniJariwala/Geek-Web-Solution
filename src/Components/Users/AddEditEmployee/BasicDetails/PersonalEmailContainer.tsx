import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../../../Types/common";
import { FloatingLabel, Form } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const PersonalEmailContainer: React.FC<IMemoisedComponentProps> = ({
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
                name="personalEmail"
                rules={{
                    required: 'Enter personal email address',
                    validate: (value) => isValidEmail(value)
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Personal Email"
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
            {errors.personalEmail && errors.personalEmail.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.personalEmail.message}
                </div>
            )}
        </div>
    );
};

export default PersonalEmailContainer;
import { FloatingLabel, Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IMemoisedComponentProps } from "../../../../Types/common";

const BirthdateContainer: React.FC<IMemoisedComponentProps> = ({ methods }) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <Controller
                control={control}
                name="birthdate"
                rules={{ required: 'Select Birthdate' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Birthdate"
                    >
                        <Form.Control
                            type="date"
                            placeholder="Select birthdate"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </FloatingLabel>
                )}
            />
            {errors.birthdate && errors.birthdate.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.birthdate.message}
                </div>
            )}
        </div>
    );
};

export default BirthdateContainer;
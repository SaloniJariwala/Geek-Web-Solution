import { FloatingLabel, Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IMemoisedComponentProps } from "../../../../Types/common";

const JoiningDateContainer: React.FC<IMemoisedComponentProps> = ({ methods }) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <Controller
                control={control}
                name="joiningDate"
                rules={{ required: 'Select Birthdate' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Joining Date"
                    >
                        <Form.Control
                            type="date"
                            placeholder="Select joining date"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </FloatingLabel>
                )}
            />
            {errors.joiningDate && errors.joiningDate.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.joiningDate.message}
                </div>
            )}
        </div>
    );
};

export default JoiningDateContainer;
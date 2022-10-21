import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../../../Types/common";
import { FloatingLabel, Form } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const SalaryContainer: React.FC<IMemoisedComponentProps> = ({ methods }) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <Controller
                control={control}
                name="salary"
                rules={{ required: 'Enter Salary' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Salary"
                    >
                        <Form.Control
                            type="number"
                            step={1000}
                            placeholder="Enter salary"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </FloatingLabel>
                )}
            />
            {errors.salary && errors.salary.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.salary.message}
                </div>
            )}
        </div>
    );
};

export default SalaryContainer;
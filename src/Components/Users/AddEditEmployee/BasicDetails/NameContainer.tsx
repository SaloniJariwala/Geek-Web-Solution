import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../../../Types/common";
import { FloatingLabel, Form } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const NameContainer: React.FC<IMemoisedComponentProps> = ({ methods }) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <Controller
                control={control}
                name="name"
                rules={{ required: 'Enter Employee name' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Full Name"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Enter Full Name"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </FloatingLabel>
                )}
            />
            {errors.name && errors.name.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.name.message}
                </div>
            )}
        </div>
    );
};

export default NameContainer;
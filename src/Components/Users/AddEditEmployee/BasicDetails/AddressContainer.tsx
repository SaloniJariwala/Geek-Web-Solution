import { Controller } from "react-hook-form";
import { ExclamationOutlined } from "@ant-design/icons";
import { FloatingLabel, Form } from "react-bootstrap";
import { IMemoisedComponentProps } from "../../../../Types/common";

const AddressContainer: React.FC<IMemoisedComponentProps> = ({ methods }) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <Controller
                control={control}
                name="address"
                rules={{ required: 'Enter Employee Address' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Address"
                    >
                        <Form.Control
                            as="textarea"
                            placeholder="Enter address"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    </FloatingLabel>
                )}
            />
            {errors.address && errors.address.message && (
                <div className="error-message">
                    <ExclamationOutlined />
                    {errors.address.message}
                </div>
            )}
        </div>
    );
};

export default AddressContainer;
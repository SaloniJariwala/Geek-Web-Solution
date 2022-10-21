import React from "react";
import { FloatingLabel } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IOptionContainerProps } from "../../../../Types/users";

const DesignationContainer: React.FC<IOptionContainerProps> = ({
    methods,
    designationData = []
}) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <Controller
                control={control}
                name="designationId"
                rules={{ required: 'Select Designation' }}
                render={({ field: { onChange, value } }) => (
                    <>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Designation"
                        >
                            <select
                                className="form-select"
                                id="floatingSelectGrid"
                                aria-label="Floating label select example"
                                onChange={onChange}
                                defaultValue="default"
                                value={value}
                            >
                                <option value="default" disabled>Select Designation</option>
                                {
                                    designationData.map((item) => (
                                        <option value={item._id} key={item._id}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </FloatingLabel>
                    </>
                )}
            />
            {errors.designationId && errors.designationId.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.designationId.message}
                </div>
            )}
        </div>
    );
};

export default DesignationContainer;
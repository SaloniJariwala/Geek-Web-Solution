import React from "react";
import { FloatingLabel } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IMemoisedComponentProps } from "../../../../Types/common";

const GenderContainer: React.FC<IMemoisedComponentProps> = ({ methods }) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <Controller
                control={control}
                name="gender"
                rules={{ required: 'Select Gender' }}
                render={({ field: { onChange, value } }) => (
                    <>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Gender"
                        >
                            <select
                                className="form-select"
                                id="floatingSelectGrid"
                                aria-label="Floating label select example"
                                onChange={onChange}
                                defaultValue="default"
                                value={value}
                            >
                                <option value="default" disabled>Select Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Others">Others</option>
                            </select>
                        </FloatingLabel>
                    </>
                )}
            />
            {errors.gender && errors.gender.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.gender.message}
                </div>
            )}
        </div>
    );
};

export default GenderContainer;
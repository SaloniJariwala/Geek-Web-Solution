import React from "react";
import { FloatingLabel } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IOptionContainerProps } from "../../../../Types/users";

const UserRoleContainer: React.FC<IOptionContainerProps> = ({
    methods,
    userRoleData
}) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <div>
            <Controller
                control={control}
                name="userRoleId"
                rules={{ required: 'Select user role' }}
                render={({ field: { onChange, value } }) => (
                    <>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="User Role"
                        >
                            <select
                                className="form-select"
                                id="floatingSelectGrid"
                                aria-label="Floating label select example"
                                onChange={onChange}
                                defaultValue="default"
                                value={value}
                            >
                                <option value="default" disabled>Select User Role</option>
                                {
                                    userRoleData?.map((item) => (
                                        <option key={item._id} value={item._id}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </FloatingLabel>
                    </>
                )}
            />
            {errors.userRoleId && errors.userRoleId.message && (
                <div className="error-message">
                    <AiOutlineExclamationCircle />
                    {errors.userRoleId.message}
                </div>
            )}
        </div>
    );
};

export default UserRoleContainer;
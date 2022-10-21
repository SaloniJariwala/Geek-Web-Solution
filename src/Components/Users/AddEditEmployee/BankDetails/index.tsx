import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Routepaths } from "../../../../Routes/Routepaths";
import { IBankDetailsContainerProps } from "../../../../Types/users";
import { AddEditWrapper } from "../style";
import AccountNoContainer from "./AccountNoContainer";
import BankNameContainer from "./BankNameContainer";
import IfscContainer from "./IfscContainer";
import SalaryContainer from "./SalaryContainer";

const BankDetails: React.FC<IBankDetailsContainerProps> = ({
    getBankDetails,
    userData
}) => {

    const methods = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if (userData) {
            methods.setValue('salary', userData.salary);
            methods.setValue('bankName', userData.bankName);
            methods.setValue('accountNo', userData.accountNo);
            methods.setValue('ifscCode', userData.ifscCode);
        }
    }, []);

    const handleOnSubmit = (values: any) => {
        getBankDetails(values);
    }

    return (
        <AddEditWrapper>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
                    <div className="row">
                        <div className="col">
                            <SalaryContainer methods={methods} />
                        </div>
                        <div className="col">
                            <BankNameContainer methods={methods} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <AccountNoContainer methods={methods} />
                        </div>
                        <div className="col">
                            <IfscContainer methods={methods} />
                        </div>
                    </div>
                    <div className="button-row">
                        <Button
                            variant="outline-primary"
                            type="submit"
                            style={{ width: '15%', marginRight: 20 }}
                        >
                            {userData ? 'Update' : 'Add'}
                        </Button>
                        <Button
                            style={{ width: '15%' }}
                            variant="outline-secondary"
                            onClick={() => navigate(Routepaths.userHome)}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </AddEditWrapper>
    );
};

export default BankDetails;
import AddEmployees from "../Components/Users/AddEditEmployee";
import PageFooter from "../UIComponents/PageFooter";
import PageHeader from "../UIComponents/PageHeader";

const AddEmployee: React.FC = () => {
    return (
        <>
            {/* <Layout MainComponent={<DashboardCom />} /> */}
            <PageHeader title="Employee Management" />
            <AddEmployees />
            <PageFooter />
        </>
    );
};

export default AddEmployee;
import AddEmployees from "../Components/Users/AddEditEmployee";
import PageHeader from "../UIComponents/PageHeader";

const AddEmployee: React.FC = () => {
    return (
        <>
            {/* <Layout MainComponent={<DashboardCom />} /> */}
            <PageHeader title="Employee Management" />
            <AddEmployees />
        </>
    );
};

export default AddEmployee;
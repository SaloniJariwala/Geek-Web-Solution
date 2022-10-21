import PageHeader from "../UIComponents/PageHeader";
import AddEmployees from "../Components/Users/AddEditEmployee";

const EditEmployee: React.FC = () => {
    return (
        <>
            {/* <Layout MainComponent={<DashboardCom />} /> */}
            <PageHeader title="Employee Management" />
            <AddEmployees />
        </>
    );
};

export default EditEmployee;
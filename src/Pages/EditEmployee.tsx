import PageHeader from "../UIComponents/PageHeader";
import AddEmployees from "../Components/Users/AddEditEmployee";
import PageFooter from "../UIComponents/PageFooter";

const EditEmployee: React.FC = () => {
    return (
        <>
            {/* <Layout MainComponent={<DashboardCom />} /> */}
            <PageHeader title="Employee Management" />
            <AddEmployees />
            <PageFooter />
        </>
    );
};

export default EditEmployee;
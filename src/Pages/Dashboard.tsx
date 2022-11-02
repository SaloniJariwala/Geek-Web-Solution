import DashboardCom from "../Components/Dashboard";
import PageFooter from "../UIComponents/PageFooter";
import PageHeader from "../UIComponents/PageHeader";

const Dashboard: React.FC = () => {
    return (
        <>
            {/* <Layout MainComponent={<DashboardCom />} /> */}
            <PageHeader title="Dashboard" />
            <DashboardCom />
            <PageFooter />
        </>
    );
};

export default Dashboard;
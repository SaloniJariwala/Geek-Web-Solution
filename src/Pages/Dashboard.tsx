import DashboardCom from "../Components/Dashboard";
import PageHeader from "../UIComponents/PageHeader";

const Dashboard: React.FC = () => {
    return (
        <>
            {/* <Layout MainComponent={<DashboardCom />} /> */}
            <PageHeader title="Dashboard" />
            <DashboardCom />
        </>
    );
};

export default Dashboard;
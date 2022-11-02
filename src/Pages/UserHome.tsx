import UserHomeCom from "../Components/Users/index";
import PageFooter from "../UIComponents/PageFooter";
import PageHeader from "../UIComponents/PageHeader";

const UserHome: React.FC = () => {
    return (
        <>
            {/* <Layout MainComponent={<UserHomeCom />} /> */}
            <PageHeader title="Employee Management" />
            <UserHomeCom />
            <PageFooter />
        </>
    );
};

export default UserHome;
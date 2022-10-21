import UserHomeCom from "../Components/Users/index";
import PageHeader from "../UIComponents/PageHeader";

const UserHome: React.FC = () => {
    return (
        <>
            {/* <Layout MainComponent={<UserHomeCom />} /> */}
            <PageHeader title="Employee Management" />
            <UserHomeCom />
        </>
    );
};

export default UserHome;
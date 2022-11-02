import PageHeader from "../UIComponents/PageHeader";
import UserProfileCom from "../Components/UserProfile";
import PageFooter from "../UIComponents/PageFooter";

const UserProfile: React.FC = () => {
    return (
        <>
            {/* <Layout MainComponent={<DashboardCom />} /> */}
            <PageHeader title="Profile Page" />
            <UserProfileCom />
            <PageFooter />
        </>
    );
};

export default UserProfile;
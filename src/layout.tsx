import { Row, Col } from "react-bootstrap";
import { ILayout } from "./Types/common";
import SideBar from "./UIComponents/SideBar";

const Layout: React.FC<ILayout> = (props) => {

    const { MainComponent } = props;

    return (
        <div>
            {/* <SideBar /> */}
            {MainComponent}
        </div>
    );
};

export default Layout;
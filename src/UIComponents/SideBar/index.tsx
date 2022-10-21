import { Offcanvas } from "react-bootstrap";
import { SideBarWrapper } from "./style";
import { Routepaths } from "../../Routes/Routepaths";
import { useNavigate } from "react-router-dom";
import { ISideBarContainerProps, ISideMenu } from "../../Types/common";
import { FaUsers } from "react-icons/fa";

const sideMenus: ISideMenu[] = [
    {
        title: "Employees",
        link: Routepaths.userHome,
        icon: <FaUsers />
    }
]

const SideBar: React.FC<ISideBarContainerProps> = ({
    show = false,
    handleClose
}) => {

    const navigate = useNavigate();

    const redirect = (event: React.MouseEvent<HTMLElement>, link: string): void => {
        navigate(link);
    }

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton >
                    <div
                        onClick={(event) => redirect(event, Routepaths.dashboard)}
                        style={{
                            fontFamily: 'ui-rounded',
                            fontWeight: 'bold',
                            fontSize: 35,
                            cursor: 'pointer'
                        }}
                    >
                        Geek Web Solution
                    </div>
                </Offcanvas.Header>
                <SideBarWrapper>
                    {sideMenus.map((item, index) => (
                        <div
                            className="side-menus"
                            key={index}
                            onClick={(event) => redirect(event, item.link)}
                        >
                            <div className="menu-icon">
                                {item.icon}
                            </div>
                            {item.title}
                        </div>
                    ))}
                </SideBarWrapper>
            </Offcanvas>
        </>
    );
};

export default SideBar;
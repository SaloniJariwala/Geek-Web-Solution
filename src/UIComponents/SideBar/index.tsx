import { useState, useEffect } from 'react';
import { Offcanvas } from "react-bootstrap";
import { SideBarWrapper } from "./style";
import { Routepaths } from "../../Routes/Routepaths";
import { useNavigate } from "react-router-dom";
import { ISideBarContainerProps, ISideMenu, ISignInUser } from "../../Types/common";
import { FaUsers, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

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
    const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

    const redirect = (event: React.MouseEvent<HTMLElement>, link: string): void => {
        navigate(link);
    }

    const handleLogOut = (): void => {
        localStorage.removeItem('LoginToken');
        localStorage.removeItem('name');
        localStorage.removeItem('id');
        navigate(Routepaths.signin);
    }

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
                    <div
                        onClick={(event) => redirect(event, Routepaths.dashboard)}
                        style={{
                            fontFamily: 'ui-rounded',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        {/* Geek Web Solution */}
                        <img src='/images/geekwebsolution.png' alt="logo" height='90%' width='90%' />
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
                    <div
                        className="side-menus"
                        key="profile"
                        onClick={() => { setShowProfileMenu(!showProfileMenu) }}
                    >
                        <div className='profile-header-outer'>
                            <div className='profile-header-inner'>
                                <div className="menu-icon">
                                    <CgProfile color='white' />
                                </div>
                                {localStorage.getItem('name')}
                            </div>
                            <div>
                                {!showProfileMenu ? (
                                    <FaAngleDown />
                                ) : (
                                    <FaAngleUp />
                                )}
                            </div>
                        </div>
                    </div>
                    {showProfileMenu && (
                        <>
                            <div
                                className='profile-menus'
                                key={"profile"}
                                onClick={() => navigate(Routepaths.profile)}
                            >
                                Profile
                            </div>
                            <div
                                className="profile-menus"
                                key={"logout"}
                                onClick={handleLogOut}
                            >
                                logout
                            </div>
                        </>
                    )}
                </SideBarWrapper>
            </Offcanvas >
        </>
    );
};

export default SideBar;
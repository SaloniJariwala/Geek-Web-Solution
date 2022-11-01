import React, { useState, useEffect } from "react";
import { message, Modal, Table } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DESIGNATION_API, GET_ALL_USERS, USER_API, USER_ROLE_API } from "../../Constants/Endpoints";
import { Routepaths } from "../../Routes/Routepaths";
import { IColumnType, IEmployeeInfo, IOption } from "../../Types/users";
import { UserHomeWrapper } from "./style";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import ViewModal from "./ViewModal";

const Users: React.FC = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoadingView, setIsLoadingView] = useState<boolean>(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);
    const [allUsersData, setAllUsersData] = useState<IEmployeeInfo[]>([]);
    const [designationData, setDesignationData] = useState<IOption[]>([]);
    const [userRoleData, setUserRoleData] = useState<IOption[]>([]);
    const [selectedUser, setSelectedUser] = useState<IEmployeeInfo>();
    const [showViewModal, setShowViewModal] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [idToBeDeleted, setIdToBeDeleted] = useState<string | undefined>('');

    const getAllUsers = () => {
        setIsLoading(true);
        axios.get(GET_ALL_USERS)
            .then((response) => {
                setAllUsersData(response.data);
            })
            .catch((error) => {
                message.error(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    useEffect(() => {
        const getDesignation = async () => {
            axios.get(DESIGNATION_API)
                .then((response) => {
                    setDesignationData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        getDesignation();
    }, []);

    useEffect(() => {
        const getUserRole = async () => {
            axios.get(USER_ROLE_API)
                .then((response) => {
                    setUserRoleData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        getUserRole();
    }, []);

    const getDesignationById = (id: string | undefined) => {
        const desig = designationData.find((item: IOption) => item._id === id);
        return desig?.name;
    }

    const getUserRoleById = (id: string | undefined) => {
        const userRole = userRoleData.find((item: IOption) => item._id === id);
        return userRole?.name;
    }

    const handleClick = (id: string | undefined, name: string) => {
        let desig, userRole: string | undefined;
        setIsLoadingView(true);
        axios.get(`${USER_API}/${id}`)
            .then((response) => {
                desig = getDesignationById(response.data.designationId);
                userRole = getUserRoleById(response.data.userRoleId);
                setSelectedUser({
                    ...response.data,
                    designation: desig,
                    userRole: userRole
                });
            })
            .catch((error) => {
                message.error(error.message);
            })
            .finally(() => {
                setIsLoadingView(false);
            });
        if (name === 'view') {
            setShowViewModal(true);
        } else if (name === 'edit') {
            navigate(`/edit-user/${id}`);
        } else {
            setIdToBeDeleted(id);
            setShowDeleteModal(true);
        }
    }

    const handleDelete = async (id: string | undefined) => {
        setIsLoadingDelete(true);
        await axios.delete(`${USER_API}/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    message.success(response.data.message);
                }
            })
            .catch((error) => {
                message.error(error.message);
            })
            .finally(() => {
                setIsLoadingDelete(false);
            });
        setShowDeleteModal(false);
        getAllUsers();
    }

    const closeViewModal = () => {
        setShowViewModal(false);
    }

    const renderActions = (id: string | undefined) => {
        return (
            <div className="button-column">
                <OverlayTrigger
                    key="view"
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            View
                        </Tooltip>
                    }
                >
                    <Button
                        variant="outline-dark"
                        onClick={() => handleClick(id, 'view')}
                        size="sm"
                    >
                        <AiOutlineEye />
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    key="edit"
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }
                >
                    <Button
                        variant="outline-warning"
                        onClick={() => handleClick(id, 'edit')}
                        size="sm"
                    >
                        <AiOutlineEdit />
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    key="delete"
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }
                >
                    <Button
                        variant="outline-danger"
                        onClick={() => handleClick(id, 'delete')}
                        size="sm"
                    >
                        <AiOutlineDelete />
                    </Button>
                </OverlayTrigger>
            </div>
        )
    }

    const columns: IColumnType[] = [
        {
            title: "User ID",
            key: "_id",
            render: (record: IEmployeeInfo) => record._id,
            width: 300,
        },
        {
            title: "Name",
            key: "name",
            render: (record: IEmployeeInfo) => record.name,
            width: 250,
        },
        {
            title: "User Role",
            key: "userRole",
            render: (record: IEmployeeInfo) => getUserRoleById(record.userRoleId),
            width: 200,
        },
        {
            title: "Employee Designation",
            key: "designation",
            render: (record: IEmployeeInfo) => getDesignationById(record.designationId),
            width: 200,
        },
        {
            title: "",
            key: "action",
            render: (record: IEmployeeInfo) => renderActions(record._id),
            width: 150,
        }
    ]

    return (
        <>
            <UserHomeWrapper>
                <Button
                    variant="outline-primary"
                    type="submit"
                    onClick={() => navigate(Routepaths.addUser)}
                    style={{ marginBottom: '2%' }}
                >
                    + Add New Employee
                </Button>
                {
                    <Table
                        columns={columns}
                        dataSource={allUsersData}
                        loading={isLoading}
                        size={"large"}
                        bordered
                    />
                }
            </UserHomeWrapper>
            <ViewModal
                showModal={showViewModal}
                closeViewModal={closeViewModal}
                userData={selectedUser}
                isLoading={isLoadingView}
            />
            <Modal
                title="Delete User"
                centered
                open={showDeleteModal}
                onOk={() => handleDelete(idToBeDeleted)}
                onCancel={() => setShowDeleteModal(false)}
                okButtonProps={{
                    loading: isLoadingDelete
                }}
                cancelButtonProps={{
                    disabled: isLoadingDelete
                }}
            >
                <p>Are You Sure you want to delete this user ?</p>
            </Modal>
        </>
    );
};

export default Users;
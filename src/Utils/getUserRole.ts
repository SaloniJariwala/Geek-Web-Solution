import axios from "axios";
import { USER_ROLE_API } from "../Constants/Endpoints";
import { IOption } from "../Types/users";

export const getUserRoleById = async (id: string | undefined) => {
    let userRoles: IOption[] = [];
    await axios.get(USER_ROLE_API)
        .then((response) => {
            userRoles = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    const userRole = userRoles.find((item: IOption) => item._id === id);
    return userRole?.name;
}
import axios from "axios";
import { DESIGNATION_API } from "../Constants/Endpoints";
import { IOption } from "../Types/users";

export const getDesignationById = async (id: string | undefined) => {

    let designations: IOption[] = [];
    await axios.get(DESIGNATION_API)
        .then((response) => {
            designations = response.data;
        })
        .catch((error) => {
            console.log(error);
        });

    const desig = designations.find((item: IOption) => item._id === id);
    return desig?.name;
}
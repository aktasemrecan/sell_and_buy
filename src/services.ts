import { addDoc, collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "./firebase";

interface dataType {
    advertTitle: string,
    companyName: string,
    modelName: string,
    year: string,
    km: string,
    fuelType: string,
    power: string,
    author:string,
    timeStamp: any
}
export const addVehicleFs = async (data: dataType) => {
    try {
        await addDoc(collection(db, "vehicles"), data);
        toast.success("Advert has been successfully added!");

    } catch (err: any) {
        toast.error("Failed to add an Advert!"+ err.message);
    }
};

export const getVehiclesFs = async()=>{
    try {
        return await getDocs(collection(db,"vehicles"));
    } catch (err:any) {
        toast.error("Not possible to see Vehicles!"+ err.message);
    }
};
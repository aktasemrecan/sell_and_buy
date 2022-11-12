import { addDoc, arrayUnion, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "./firebase";

interface dataType {
    advertTitle: string,
    companyName: string,
    modelName: string,
    year: string,
    km: string,
    fuelType: string,
    power: string,
    author:string,
    creatingTime: any,
    photoURLS: any
}
export const addVehicleFs = async (data: dataType) => {
    try {
        const newDocInfo =await addDoc(collection(db, "vehicles"), data);
        updateDoc(doc(db,"users",auth.currentUser?.uid!),{
            vehicleAdverts: arrayUnion(newDocInfo.id)
        })


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
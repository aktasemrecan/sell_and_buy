import { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "./firebase";



export const getUserDocFs = async (userId: string) => {
    try {
        return (await getDoc(doc(db, "users", userId))).data();
    } catch (err: any) {
        toast.error("User document couldn't fetch from database!" + err.message);
    }
};

interface dataType {
    advertTitle: string,
    companyName: string,
    modelName: string,
    year: string,
    km: string,
    fuelType: string,
    power: string,
    author: string,
    creatingTime: any,
    photoURLS: any,
    price: string
}
export const addVehicleFs = async (data: dataType) => {
    try {
        const newDocInfo = await addDoc(collection(db, "vehicles"), data);
        updateDoc(doc(db, "users", auth.currentUser?.uid!), {
            vehicleAdverts: arrayUnion(newDocInfo.id)
        })


        toast.success("Advert has been successfully added!");

    } catch (err: any) {
        toast.error("Failed to add an Advert!" + err.message);
    }
};

export const getVehiclesFs = async () => {
    try {
        return await getDocs(collection(db, "vehicles"));
    } catch (err: any) {
        toast.error("Not possible to see Vehicles!" + err.message);
    }
};

export const getVehicleFs = async (vehicleId: string) => {
    try {
        return (await getDoc(doc(db, "vehicles", vehicleId))).data();
    } catch (err: any) {
        toast.error("Not possible to see this vehicle!" + err.message);
    }

};

export const getVehicleAuthorFs = async (vehicleAuthor: string) => {
    try {
        return (await getDoc(doc(db, "users", vehicleAuthor))).data();
    } catch (err: any) {
        toast.error("Not possible to see this vehicle's author!" + err.message);
    }
}

export const getAdvertsFromUserFs = async () => {
    const advertLists = await getUserDocFs(auth.currentUser?.uid!).then((doc) => (doc!.vehicleAdverts));

    const result = await Promise.all(await (advertLists!.map(async (vehicleId: string) => {
        return (await getDoc(doc(db, "vehicles", vehicleId)));
    })));
    return result;
};

export const deleteAdvert = async (docId: string) => {
    await deleteDoc(doc(db, "vehicles", docId));
    await updateDoc(doc(db, "users", auth.currentUser?.uid!), {
        vehicleAdverts: arrayRemove(docId)
    })
};

export const addFavoriteVehicle = async (docId:string)=>{
    const docData = (await getDoc(doc(db,"users",auth.currentUser?.uid!))).data();
    const favs = (docData!.favorites as Array<string>);
    const favCheck = favs.includes(docId);
   if(favCheck){
    await updateDoc(doc(db,"users",auth.currentUser?.uid!),{
        favorites: arrayRemove(docId)
    })
    toast("Product has been deleted from favorites!");
   }else{
    await updateDoc(doc(db,"users",auth.currentUser?.uid!),{
        favorites: arrayUnion(docId)
    })
    toast("Product has been added to favorites!");
   }
};
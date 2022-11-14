import { getVehicleAuthorFs } from "../services";
import { useState, useEffect} from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function ProductDetailAuthor(props:any) {

    const [vehicleAuthor, setVehicleAuthor] = useState<any>();

    const getVehicleAuthor = async () => {
        const authorData = await getVehicleAuthorFs(props.authorId);
        setVehicleAuthor(authorData);
        
    };

    useEffect(()=>{
        getVehicleAuthor();
    },[]);

    const renderedList = ()=>{
        return <div style={{ "backgroundColor": "#3F475F" }} className="text-white rounded-xl shadow-xl w-[40%] justify-center text-center h-72 py-16">
        <h2 className="font-semibold pb-4 text-2xl">
            {vehicleAuthor.name}
        </h2>
        <button className="border-2 text-lg border-orange-400 rounded-xl py-2 px-2 mb-2">Contact with Email</button><button className="border-2 text-lg border-red-400 rounded-xl py-2 px-2">Contact with Phone</button>
    </div>;
    };

  return (
    <>{vehicleAuthor ? renderedList() : <LoadingSpinner/>}</>
  )
}

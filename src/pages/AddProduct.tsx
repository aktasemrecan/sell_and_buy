import AddProductDiv from "../design/AddProductDiv";
import DefaultGreenButton from "../design/DefaultGreenButton";
import { useState } from "react";
import { addVehicleFs } from "../services";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import { serverTimestamp } from "firebase/firestore";

export default function AddProduct() {
    const navigate = useNavigate();
    const [advertTitle, setAdvertTitle] = useState<string>();
    const [companyName, setCompanyName] = useState<string>();
    const [modelName, setModelName] = useState<string>();
    const [year, setYear] = useState<string>();
    const [power, setPower] = useState<string>();
    const [km, setKm] = useState<string>();
    const [fuelType, setFuelType] = useState<string>();

    const onClick = async () => {
        if(auth){
            await addVehicleFs({ advertTitle: advertTitle!, companyName: companyName!, modelName: modelName!, year: year!, km: km!, fuelType: fuelType!,power: power!,author: auth.currentUser?.uid!,timeStamp: serverTimestamp()}).then(()=>navigate("/"));
        }
        
    };

    return (
        <div style={{ "backgroundColor": "#3F475F" }} className="mx-auto mt-10 rounded-xl w-[35%] py-7 px-10 shadow-lg text-white">
            <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-2">
                <AddProductDiv text="Advert Title" placeHolder="BMW 428i clear and without accident" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAdvertTitle(e.target.value)} value={advertTitle!} />
                <div className="flex space-x-5">
                    <AddProductDiv text="Company Name" placeHolder="BMW" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)} value={companyName!} />
                    <AddProductDiv text="Model Name" placeHolder="428i" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setModelName(e.target.value)} value={modelName!} />
                </div>
                <div className="flex space-x-5">
                    <AddProductDiv text="Year" placeHolder="2014" type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYear(e.target.value)} value={year!} />
                    <AddProductDiv text="KM" type="number" placeHolder="54.351" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKm(e.target.value)} value={km!} />
                </div>
                <div className="flex space-x-5">
                <AddProductDiv text="Motor Power" placeHolder="136 PS" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPower(e.target.value)} value={power!} />
                <AddProductDiv text="Fuel Type" placeHolder="Benzin" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFuelType(e.target.value)} value={fuelType!} />
                </div>
                <p className="text-2xl" >Car Photos</p>
                <input type="file" className="border-2 border-green-500 rounded-xl w-full py-1 px-1" />
                <div className=" justify-center mt-3">
                    <DefaultGreenButton extraClass="mx-auto py-2 px-2 text-xl font-semibold" onClick={onClick} text="Add Advert" />
                </div>
            </form>
        </div>
    )
}

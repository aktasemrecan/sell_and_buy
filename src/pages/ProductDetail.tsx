import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { getVehicleFs } from "../services";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductDetailAuthor from "../components/ProductDetailAuthor";


export default function ProductDetail() {
    const { id } = useParams();
    const [vehicleData, setVehicleData] = useState<any>();

    const getVehicle = async () => {
        const docData = await getVehicleFs(id!);
        setVehicleData(docData);
    };

    useEffect(() => {
        getVehicle();
    }, []);

    const renderedList = () => {

        return <div className='pl-32 pt-3 min-h-screen justify-between bg-white rounded-xl shadow-lg'>
            <h2 className="text-2xl font-semibold mb-3">
                {vehicleData.advertTitle}
            </h2>
            <div className="flex">
                <div className="w-[44%]">
                    <img className="h-96 rounded-lg w-full object-contain" src={vehicleData.photoURLs[0]} alt="car" />
                </div>
                <div className="w-[52%] flex justify-around items-center">
                    <div className="pl-8 w-[49%] ">
                        <h2 className="font-bold text-2xl pb-4">{vehicleData.price} Euro</h2>
                        <div className="text-xl">
                            <p>Advert No: 12312312312</p>
                            <hr />
                            <p>Company: <span>{vehicleData.companyName}</span></p>
                            <hr />
                            <p>Model: <span>{vehicleData.modelName}</span></p>
                            <hr />
                            <p>Year: <span>{vehicleData.year}</span></p>
                            <hr />
                            <p>Gear: Manuel</p>
                            <hr />
                            <p>Motor Power: <span>{vehicleData.power}</span></p>
                            <hr />
                            <p>Motor Volume: 1598 cc</p>
                            <hr />
                            <p>Fuel: <span>{vehicleData.fuelType}</span></p>
                            <hr />
                            <p>Color: Yellow</p>
                        </div>
                    </div>
                    <ProductDetailAuthor authorId={vehicleData.author}/>
                </div>
            </div>
        </div>
    };

    return (
        <>{(vehicleData) ? renderedList() : <LoadingSpinner />}</>
    )
}

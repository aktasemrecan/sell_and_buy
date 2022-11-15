import FavoriteButton from "../design/buttons/FavoriteButton";
import DefaultGreenButton from "../design/buttons/DefaultGreenButton";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

interface dataType {
    advertTitle: string,
    companyName?: string,
    modelName?: string,
    year: string,
    km: string,
    fuelType: string,
    power: string,
    imageURL: string,
    productId: string,
    price: string
}

export default function ProductCard(props: dataType) {

    const navigate = useNavigate();

    return (
        <div>
            <div className="flex p-2 justify-between relative">
                <div className="flex">
                    <div className="max-w-6xl items-center ">
                        <img onClick={() => navigate(`/vehicles/${props.productId}`)} className="cursor-pointer w-64 h-52 object-contain" src={props.imageURL} alt="car" />
                    </div>
                    <div className="w-full space-y-6 pl-4">
                        <div className="cursor-pointer" onClick={() => navigate(`/vehicles/${props.productId}`)}>
                            <h1 className=" text-lg font-medium">{props.advertTitle}</h1>
                            <div className="w-full">
                                <p>-{props.year}</p>
                                <p>-{props.km}</p>
                                <p>-{props.power}</p>
                                <p>-{props.fuelType}</p>
                            </div>
                        </div>
                        <div className="flex w-[90%] mx-auto justify-between ">
                            <div className="cursor-pointer" onClick={() => navigate(`/vehicles/${props.productId}`)}><p className="header-title pl-2 text-2xl">{props.price} €</p></div>
                            <div className=" bottom-4 right-2  flex  items-center space-x-2">
                                {auth.currentUser! && <div><FavoriteButton productId={props.productId} /></div>}
                                <div><DefaultGreenButton extraClass="py-1 px-3" onClick={() => navigate(`/vehicles/${props.productId}`)} text="Review" /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="shadow-2xl " />
        </div>
    )
}

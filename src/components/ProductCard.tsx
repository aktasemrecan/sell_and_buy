import FavoriteButton from "../design/buttons/FavoriteButton";
import DefaultGreenButton from "../design/buttons/DefaultGreenButton";
import { auth } from "../firebase";

interface dataType {
    advertTitle: string,
    companyName?: string,
    modelName?: string,
    year: string,
    km: string,
    fuelType: string,
    power: string,
    imageURL: string
}

export default function ProductCard(props: dataType) {

    return (
        <div>
            <div className="flex p-3 justify-between relative">
                <div className="flex ">
                    <div className=" items-center">
                        <img className="w-52 h-40 object-contain" src={props.imageURL} alt="car" />
                    </div>
                    <div className="pl-5">
                        <h1 className="text-lg font-medium">{props.advertTitle}</h1>
                        <div>
                            <p>-{props.year}</p>
                            <p>-{props.km}</p>
                            <p>-{props.power}</p>
                            <p>-{props.fuelType}</p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-4 right-2  flex  items-center space-x-2">
                    {auth.currentUser! && <div><FavoriteButton /></div>}
                    <div><DefaultGreenButton extraClass="py-1 px-3" onClick={() => { }} text="Review" /></div>
                </div>
            </div>
            <hr className="shadow-2xl " />
        </div>
    )
}

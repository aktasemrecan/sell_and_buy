import FavoriteButton from "../design/FavoriteButton";
import DefaultGreenButton from "../design/DefaultGreenButton";

interface dataType {
    advertTitle: string,
    companyName?: string,
    modelName?: string,
    year: string,
    km: string,
    fuelType: string,
    power: string
}

export default function ProductCard(props: dataType) {

    return (
        <div>
            <div className="flex p-3 justify-between relative">
                <div className="flex ">
                    <div className=" items-center">
                        <img className="w-52 h-40 object-fill" src="https://img.classistatic.de/api/v1/mo-prod/images/23/23260a72-e800-4d0d-899a-ef6997288ae5?rule=mo-640.jpg" alt="car" />
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
                    <div><FavoriteButton /></div>
                    <div><DefaultGreenButton extraClass="py-1 px-3" onClick={() => { }} text="Review" /></div>
                </div>
            </div>
            <hr className="shadow-2xl " />
        </div>
    )
}

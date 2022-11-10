import FavoriteButton from "../design/FavoriteButton";
import GoToProductButton from "../design/GoToProductButton";

export default function ProductCard() {
    return (
        <div>
            <div className="flex p-3 justify-between relative">
                <div className="flex ">
                    <div className=" items-center">
                        <img className="w-52 h-40 object-fill" src="https://img.classistatic.de/api/v1/mo-prod/images/23/23260a72-e800-4d0d-899a-ef6997288ae5?rule=mo-640.jpg" alt="car" />
                    </div>
                    <div className="pl-5">
                        <h1 className="text-lg font-medium">Renault Twingo Zen SCe 65 SITZHEIZUNG+KLIMA+BLUETOOTH</h1>
                        <div>
                            <p>-08/2021</p>
                            <p>-11.255 km</p>
                            <p>-122 ps</p>
                            <p>-Benzin</p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-4 right-2  flex  items-center ">
                    <div><FavoriteButton /></div>
                    <div><GoToProductButton/></div>
                </div>
            </div>
            <hr className="shadow-2xl " />
        </div>
    )
}

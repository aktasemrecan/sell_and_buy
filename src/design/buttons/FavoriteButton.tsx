import { MdFavoriteBorder } from "react-icons/md"
import { toast } from "react-toastify";
import { addFavoriteVehicle } from "../../services";

interface Props {
    productId:string
}

export default function FavoriteButton(props: Props) {

    const onClick = async()=>{
        try {
            await addFavoriteVehicle(props.productId);
           
        } catch (err:any) {
            toast.error("Product has been not added to favorites!"+err.message);
        }
    };

    return (
        <button onClick={onClick} className="rounded-xl border-red-600 border-2 text-white shadow-lg hover:shadow-xl hover:border-white  bg-white py-2 px-8 transition duration-200 ease-in-out" ><MdFavoriteBorder className="text-red-600 text-xl hover:text-red-500" /></button>
    )
}

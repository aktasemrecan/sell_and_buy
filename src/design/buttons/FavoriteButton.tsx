import { MdFavoriteBorder } from "react-icons/md"

interface Props {

}

export default function FavoriteButton(props: Props) {
    return (
        <button className="rounded-xl border-red-600 border-2 text-white shadow-lg hover:shadow-xl hover:border-white  bg-white py-2 px-8 transition duration-200 ease-in-out" ><MdFavoriteBorder className="text-red-600 text-xl hover:text-red-500" /></button>
    )
}

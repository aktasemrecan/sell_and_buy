import { AiFillDelete } from "react-icons/ai"

interface Props {
    onClick: React.MouseEventHandler<SVGElement> 
}

export default function DeleteButton(props: Props) {
    return (
        <button className="rounded-xl border-red-600 border-2 text-white shadow-lg hover:shadow-xl hover:border-white  bg-white py-2 px-4 transition duration-200 ease-in-out" ><AiFillDelete className="text-red-600 text-xl hover:text-red-500" onClick={props.onClick} /></button>
    )
}

import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { deleteAdvert, getAdvertsFromUserFs } from "../services";
import DeleteButton from "../design/buttons/DeleteButton";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function ProfileAdverts() {

    const navigate = useNavigate();
    const [adverts, setAdverts] = useState<any[]>();
    const getAdverts = async () => {
        const advertLists = await getAdvertsFromUserFs();
        setAdverts(advertLists);
    }

    const onDeleteClick = async(docId:string)=>{
        await deleteAdvert(docId).then(
            ()=>{
                toast("Vehicle has been successfully deleted!")
            }
        );
    };


    const advertList = () => {
        return adverts?.map((doc: DocumentData) => {

            const d = doc.data();
            <div className=" w-[40%]  shadow-lg"></div>
            return <tr key={doc.id} className="bg-gray-100 border-b ">
                <td  className="whitespace-nowrap text-sm font-medium text-gray-900">
                    <img onClick={() => navigate(`/vehicles/${doc.id}`)} className="pl-2 py-2 h-24 w-24 cursor-pointer" src={d.photoURLs[0]} alt={d.advertTitle} />
                </td>
                <td onClick={() => navigate(`/vehicles/${doc.id}`)} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointer">
                    <p>{d.advertTitle}</p>
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Otto
                </td>
                <td className="text-sm   text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <DeleteButton onClick={()=>onDeleteClick(doc.id)} />
                </td>
            </tr>
        })
    };

    useEffect(() => {
        getAdverts();
    }, [auth.currentUser!]);

    return (
        <div className="flex flex-col mx-auto  px-8">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                <div className=" inline-block min-w-full sm:px-6 lg:px-8 ">
                    <div className="overflow-hidden rounded-xl">
                        <table className="min-w-full">
                            <thead style={{ "backgroundColor": "#3F475F" }} className=" border-b">
                                <tr className="text-orange-500 text-lg">
                                    <th scope="col" className=" px-6 py-4 text-left">
                                        Photo
                                    </th>
                                    <th scope="col" className=" font-medium  px-6 py-4 text-left">
                                        Advert Title
                                    </th>
                                    <th scope="col" className=" font-medium  px-6 py-4 text-left">
                                       Views 
                                    </th>
                                    <th scope="col" className="font-medium  px-6 py-4 text-left">
                                        Handle
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {advertList()}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

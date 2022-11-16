import { useState } from "react"
import { fetchQuery } from "../services";

export default function HomePageSearch() {

    const [searchTerm, setSearchTerm] = useState<string>();

    const onChange = async(e:any)=>{
        setSearchTerm(e.target.value);
        fetchQuery(e.target.value);
    };

    return (
        <div className="mx-32 bg-orange-500 rounded-xl mb-4  py-3">
            <div className="w-[40%] mx-auto justify-center">
                <input type="text" onChange={onChange} value={searchTerm} className="w-full mx-auto rounded-xl" />
            </div>
        </div>
    )
}

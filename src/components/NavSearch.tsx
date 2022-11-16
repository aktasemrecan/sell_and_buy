import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { fetchQuery } from "../services";

export default function NavSearch() {

  const [searchTerm, setSearchTerm] = useState<string>();

  const onChange = async (e: any) => {
    setSearchTerm(e.target.value);
    fetchQuery(e.target.value);
  };

  return (
    <div className="flex  w-[52%] mr-5">
      <input type="text" onChange={onChange} value={searchTerm} className=" w-full border-orange-500 rounded-xl py-1 border-2 px-2 text-gray-800" placeholder="BMW 428i Benzin 2017" />
      <BsSearch className="relative -bottom-2 text-xl ml-4 text-orange-500 " />
    </div>
  )
}

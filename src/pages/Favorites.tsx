import { useEffect, useState } from "react";
import { fetchFavorites } from "../services";
import { useSelector } from "react-redux";
import { DocumentData } from "firebase/firestore";
import LoadingSpinner from "../components/LoadingSpinner";
import FavoriteButton from "../design/buttons/FavoriteButton";
import DefaultGreenButton from "../design/buttons/DefaultGreenButton";
import { useNavigate } from "react-router";

export default function Favorites() {

  const navigate = useNavigate();
  const [favoriteDocs, setFavoriteDocs] = useState<any>();
  const authState = useSelector((state: any) => state.authReducer);

  const getFavorites = async () => {
    if (authState) {
      const result = await fetchFavorites(authState.uid!);
      setFavoriteDocs(result);
    }

  };

  useEffect(() => {
    getFavorites();
  }, [authState])

  const renderedList = () => {
    return favoriteDocs.map((favoriteDoc: DocumentData) => {
      const doc = favoriteDoc.data();
      return <>
        <div className="my-2 px-3 py-3 flex space-x-10 w-full" key={favoriteDoc.id}>
          <div className="w-[30%]">
            <img className="h-44 w-52 object-contain bg-gray-200 rounded-lg shadow-xl" src={doc.photoURLs[0]} alt={doc.companyName} />
          </div>
          <div className="w-full">
            <div className="flex items-center  justify-between">
              <h1 className="text-xl font-semibold">{doc.advertTitle}</h1>
              <p className="font-bold text-orange-600 text-2xl pr-2">{doc.price} €</p>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="pt-2 text-xl ">
                <p>- {doc.year}</p>
                <p>- {doc.fuelType}</p>
                <p>- {doc.power}</p>
                <p>- {doc.companyName}</p>
                <p>- {doc.modelName}</p>
              </div>
              <div className="items-center text-center justify-end space-y-2">
                <div><FavoriteButton productId={favoriteDoc.id} /></div>
                <div><DefaultGreenButton extraClass="py-1 px-3" onClick={() => navigate(`/vehicles/${favoriteDoc.id}`)} text="Review" /></div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </>
    })
  };

  return (
    <div className="mx-16 justify-center my-10 bg-orange-400 rounded-xl py-8 px-10 shadow-lg ">
      <div className="bg-white rounded-lg shadow-xl">
        {favoriteDocs ? renderedList() : <LoadingSpinner />}
      </div>

    </div>
  )
}

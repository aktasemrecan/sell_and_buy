import LeftNav from "../components/LeftNav";
import ProductCard from "../components/ProductCard";
import { getVehiclesFs } from "../services";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function HomePage() {


    const [products, setProducts] = useState<any>();

    const getProducts = async () => {
        const querySnapshot = await getVehiclesFs()
        const productsArray = querySnapshot?.docs.map((doc) => (
            {
                id: doc.id, ...doc.data()
            }
        ));
        setProducts(productsArray);
    };

    const renderedProducts = () => {
        return products.map((doc: any, id: string) => {
            return <ProductCard key={id} price={doc.price} imageURL={doc.photoURLs[0]} advertTitle={doc.advertTitle} fuelType={doc.advertTitle} km={doc.km} power={doc.power} year={doc.year} productId={doc.id} />
        })
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className='mx-32 flex justify-between'>
            <div className="w-[24%] border px-2 py-3 rounded-lg bg-white" >
                <LeftNav />
            </div>
            <div className="w-[74%] border shadow-lg px-2 pt-2 rounded-lg bg-white " >
                {products ? renderedProducts() : <LoadingSpinner />}
            </div>
        </div>
    )
}

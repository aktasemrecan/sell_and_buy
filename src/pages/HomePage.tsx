import LeftNav from "../components/LeftNav";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
    return (
        <div className='mx-32 flex justify-between'>
            <div className="w-[24%] border px-2 py-3 rounded-lg bg-white" >
                <LeftNav />
            </div>
            <div className="w-[73%] border shadow-lg px-2 pt-2 rounded-lg bg-white " >
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}

export default function ProductDetail() {
    return (
        <div className='pl-32 min-h-screen justify-between bg-white rounded-xl shadow-lg'>
            <h2 className="text-2xl font-semibold mb-3">Sahibinden 171.000 Km'de 2012 Model 8 İleri Bmw 1.16i Işık Paket</h2>
            <div className="flex">
                <div className="w-[44%]">
                    <img className="h-full rounded-lg w-full object-fill bg-red-500    " src="https://img.classistatic.de/api/v1/mo-prod/images/23/23260a72-e800-4d0d-899a-ef6997288ae5?rule=mo-640.jpg" alt="car" />
                </div>
                <div className="w-[52%] flex justify-around items-center">
                <div className="pl-8 w-[49%] ">
                    <h2 className="font-bold text-2xl pb-4">17.000 Euro</h2>
                    <div className="text-xl">
                        <p>Advert No: 12312312312</p>
                        <hr />
                        <p>Company: Renault</p>
                        <hr />
                        <p>Model: Twingo</p>
                        <hr />
                        <p>Year: 2012</p>
                        <hr />
                        <p>Gear: Manuel</p>
                        <hr />
                        <p>Motor Power: 136 hp</p>
                        <hr />
                        <p>Motor Volume: 1598 cc</p>
                        <hr />
                        <p>Fuel: Benzin</p>
                        <hr />
                        <p>Color: Yellow</p>
                    </div>
                </div>
                <div style={{"backgroundColor":"#3F475F"}} className="text-white rounded-xl shadow-xl w-[40%] justify-center text-center h-72 py-16">
                    <h2 className="font-semibold pb-4 text-2xl">Emrecan Aktaş</h2>
                    <button className="border-2 text-lg border-orange-400 rounded-xl py-2 px-2 mb-2">Contact with Email</button><button className="border-2 text-lg border-red-400 rounded-xl py-2 px-2">Contact with Phone</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default function LeftNav() {
  return (
    <div>
        <h2  className="text-3xl header-title text-orange-500" >Brands</h2>
        <hr className="border-2 rounded-full mt-2 mb-1 w-full" style={{ "borderColor": "#3F475F" }} />
        <ul style={{ "color": "#3F475F" }} className="text-xl pl-2">
          <li>-Mercedes</li>
          <li>-Bmw</li>
          <li>-Audi</li>
          <li>-Volkswagen</li>
          <li>-Opel</li>
        </ul>
        
        <h2 style={{ "color": "#38E54D" }} className="text-3xl pt-2 font-semibold" >Popular</h2>
        <hr className="border-2 rounded-full mt-2 mb-1 w-full" style={{ "borderColor": "#3F475F" }} />
        <ul style={{ "color": "#3F475F" }} className="text-xl pl-2">
          <li>-Car</li>
          <li>-Jeep</li>
          <li>-Truck</li>
          <li>-Tractor</li>
        </ul>
      
    </div>
  )
}

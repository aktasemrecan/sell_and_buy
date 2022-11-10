export default function LeftNav() {
  return (
    <div>
      <div      >
        <h2 style={{ "color": "#38E54D" }} className="text-3xl font-semibold" >Catagories</h2>
        <ul style={{ "color": "#3F475F" }} className="text-xl pl-2">
          <li>-Car</li>
          <li>-Jeep</li>
          <li>-Truck</li>
          <li>-Tractor</li>
        </ul>
        <hr className="border-2 rounded-full mt-2 mb-1 w-full" style={{ "borderColor": "#3F475F" }} />
        <h2 style={{ "color": "#38E54D" }} className="text-3xl font-semibold" >Popular</h2>
        <ul style={{ "color": "#3F475F" }} className="text-xl pl-2">
          <li>-Car</li>
          <li>-Jeep</li>
          <li>-Truck</li>
          <li>-Tractor</li>
        </ul>
      </div>
    </div>
  )
}



interface Props {
    text: any,
    onClick: VoidFunction,
    extraClass?: string
}


export default function DefaultGreenButton(props: Props) {
    return (
        <button onClick={props.onClick} className={`flex  text-xl items-center bg-white text-green-500 border-green-500 hover:text-green-800 rounded-xl shadow-lg border-2 ${props.extraClass}`}><span className="mx-2">{props.text}</span></button>
       
    )
}


//
//  <button style={{"backgroundColor":"#38E54D","borderColor":"#38E54D","color":"white"}}  className="rounded-xl font-semibold shadow-lg hover:shadow-xl  border-2 border-blue-500 py-2 px-4 ml-2 transition duration-200 ease-in-out" >{props.text}</button>
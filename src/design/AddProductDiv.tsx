interface Props{
    text:string,
    placeHolder:string,
    onChange: any,
    value: string,
    type?: string
}

export default function AddProductDiv(props:Props) {
    return (
        <div>
            <p className="text-2xl">{props.text}</p>
            <input type={props.type ? props.type : "text" } placeholder={props.placeHolder} onChange={props.onChange} value={props.value} className="border-2 rounded-xl text-green-800 outline-green-500 border-green-400 w-full px-2 py-1 text-lg" />
        </div>
    )
}

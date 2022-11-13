interface ButtonProps {
    text?: string
}

export default function NavbarButton(props: ButtonProps) {
  return (
    <button style={{"borderColor":"#38E54D","color": "#3F475F"}} className="px-2 mr-3 text-lg font-semibold items-center border-2 rounded-xl">{props.text}</button>
  )
}

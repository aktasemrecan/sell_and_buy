

interface Props {
  text: string,
  secondText: string
}
export default function ProfileText(props: Props) {
  return (
    <p className="text-2xl text-center text-white pt-4" ><span className="font-semibold">{props.secondText}</span>: {props.text}</p>
  )
}



interface Props {
  text: string,
  secondText: string
}
export default function ProfileText(props: Props) {
  return (
    <div className="text-2xl text-center font-sans text-white pt-4">
      <p className="font-semibold">{props.secondText}</p>
      <p>{props.text}</p>
    </div>
  )
}

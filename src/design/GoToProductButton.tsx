interface Props {

}


export default function FavoriteButton(props: Props) {
    return (
        <button style={{"backgroundColor":"#38E54D","borderColor":"#38E54D","color":"white"}} id="favoriteButton" className="favoriteButton rounded-xl font-semibold shadow-lg hover:shadow-xl  border-2 border-blue-500 py-2 px-4 ml-2 transition duration-200 ease-in-out" >Review</button>
    )
}

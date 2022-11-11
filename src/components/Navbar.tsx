import NavbarButton from "../design/NavbarButton";
import { GrSearch } from "react-icons/gr";
import LoginButton from "../design/LoginButton";
import { useSelector } from "react-redux/es/exports";
import ProfileButton from "../design/ProfileButton";
import { useNavigate } from "react-router";

export default function Navbar() {

    const navigate = useNavigate();

    interface RootState{
        authReducer:any 
    }
    const authReducer = useSelector((state:RootState)=>state.authReducer);

    return (
        <>
            <div className='w-full py-1 items-center' style={{ "backgroundColor": "#38E54D" }}>
                <div className=" flex justify-end mx-20">
                    {authReducer ? <ProfileButton/> : <LoginButton text="Login" />}
                </div>
            </div>
            <div className='sticky top-0 z-50 shadow-xl flex mb-4 w-full px-32 justify-around' style={{ "backgroundColor": "white" }}>
                <div onClick={()=>navigate("/")} className='w-[30%] py-3 cursor-pointer'><h2 className='text-5xl font-semibold' style={{ "color": "#38E54D" }}>Sell & Buy</h2></div>
                <div className="w-[50%] items-center flex justify-around">
                    <NavbarButton text="Güncel"></NavbarButton>
                    <NavbarButton text="Dünya"></NavbarButton>
                    <NavbarButton text="Ekonomi"></NavbarButton>
                    <NavbarButton text="Sağlık"></NavbarButton>
                    <NavbarButton text="Teknoloji"></NavbarButton>
                    <button><GrSearch className="text-xl items-center ml-2" /></button>
                </div>
            </div>
        </>
    )
}

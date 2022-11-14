import NavbarButton from "../design/buttons/NavbarButton";
import { GrSearch } from "react-icons/gr";
import LoginButton from "../design/buttons/LoginButton";
import { useSelector } from "react-redux/es/exports";
import ProfileButton from "../design/buttons/ProfileButton";
import { useNavigate } from "react-router";

export default function Navbar() {

    const navigate = useNavigate();

    interface RootState {
        authReducer: any
    }
    const authReducer = useSelector((state: RootState) => state.authReducer);

    return (
        <>
            <div className='flex justify-end w-full py-1 items-center bg-orange-500  ' >
                {authReducer && <><div onClick={()=>navigate("/favorites")}>
                    <span className="text-xl items-center text-white font-sans mr-2 cursor-pointer" >Favorites</span>
                </div>
                    <p className="header-title text-xl text-white">|</p></>}
                <div className="flex ml-2 mr-20">
                    {authReducer ? <ProfileButton /> : <LoginButton text="Login" />}
                </div>
            </div>
            <div className='sticky top-0 z-50 shadow-xl flex mb-4 w-full px-32 justify-around' style={{ "backgroundColor": "white" }}>
                <div onClick={() => navigate("/")} className='w-[30%] py-3 cursor-pointer'><h2 className='text-5xl header-title text-orange-500' >Sell & Buy</h2></div>
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

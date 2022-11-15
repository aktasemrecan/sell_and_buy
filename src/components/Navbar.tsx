import LoginButton from "../design/buttons/LoginButton";
import { useSelector } from "react-redux/es/exports";
import ProfileButton from "../design/buttons/ProfileButton";
import { useNavigate } from "react-router";
import NavSearch from "./NavSearch";

export default function Navbar() {

    const navigate = useNavigate();

    interface RootState {
        authReducer: any
    }
    const authReducer = useSelector((state: RootState) => state.authReducer);

    return (
        <>
            <div className='flex justify-end w-full py-1 items-center bg-orange-500  ' >
                {/* {authReducer && <><div onClick={()=>navigate("/favorites")}>
                    <span className="text-xl items-center text-white font-sans mr-2 cursor-pointer" >Favorites</span>
                </div>
                    <p className="header-title text-xl text-white">|</p></>}
                <div className="flex ml-2 mr-20">
                    {authReducer ? <ProfileButton /> : <LoginButton text="Login" />}
                </div> */}
            </div>
            <div className='sticky top-0 z-50 shadow-xl flex mb-4 w-full pl-32 justify-between' style={{ "backgroundColor": "white" }}>
                <div onClick={() => navigate("/")} className='w-[30%] py-3 cursor-pointer'>
                    <h2 className='text-5xl header-title text-orange-500' >
                        Sell & Buy
                    </h2>
                </div>
                <div className="w-[80%] items-center flex justify-end">
                    <div className="justify-between space-x-3 flex items-center w-full">
                        <NavSearch />
                        <div className="flex"> {authReducer && <><div onClick={() => navigate("/favorites")}>
                            <span className="text-xl items-center text-orange-500 font-sans mr-2 cursor-pointer" >Favorites</span>
                        </div>
                            <p className="header-title text-xl text-orange-500">|</p></>}
                            <div className="flex ml-2 mr-20">
                                {authReducer ? <ProfileButton /> : <LoginButton text="Login" />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

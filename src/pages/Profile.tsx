import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileText from "../design/ProfileText";
import { FaSignOutAlt } from "react-icons/fa";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { signOutAction } from "../redux/actions";
import { useNavigate } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import DefaultGreenButton from "../design/DefaultGreenButton";



export default function Profile() {

  interface RootState {
    authReducer: any
  }
  const authReducer = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    photoURL: ""
  });

  const { name, email, photoURL } = profileData;


  const onSignOutClick = async () => {
    await auth.signOut().then(() => {
      dispatch(signOutAction());
      navigate("/");

    });
  };


  const profileDiv = () => {
    return <div style={{ "backgroundColor": "#3F475F" }} className="mx-auto mt-20 rounded-xl w-[40%] py-8 px-10 shadow-lg">
      <div className="w-full "><img className="w-24 h-24 mx-auto" src={photoURL} alt={name} /></div>
      <div><ProfileText text={name} secondText="Name" /></div>
      <div><ProfileText text={email} secondText="Email" /></div>
      <div className="flex mx-auto justify-center space-x-7">
        <DefaultGreenButton extraClass="mt-3 px-2 py-2" onClick={()=>navigate("/add-product")} text="New Advert" />
        <button onClick={onSignOutClick} className="flex  mt-3 text-xl items-center px-2 py-2 bg-white text-red-500 border-red-500 hover:text-red-800 rounded-xl shadow-lg border-2 "><span className="mx-2"><FaSignOutAlt /></span> Sign Out</button></div>
    </div>;
  };

  useEffect(() => {
    if (authReducer) {
      setProfileData({
        name: authReducer.displayName,
        email: authReducer.email,
        photoURL: authReducer.photoURL
      });
    }
  }, [authReducer]);

  const advertList = ()=>{
     return null;
  };

  return (
    <div className="w-full">
      {authReducer !== null ? <div>
        <div>{profileDiv()}</div>
        <div>{advertList()}</div>
      </div> : <LoadingSpinner />}
    </div>
  );
}

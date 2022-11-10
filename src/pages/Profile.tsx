import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileText from "../design/ProfileText";
import { FaSignOutAlt} from "react-icons/fa";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { signOutAction } from "../redux/actions";
import { useNavigate } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";



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


  const onSignOutClick = async()=> {
    await auth.signOut().then(()=>{
      dispatch(signOutAction());
      navigate("/");

    });
    
  };

  const profileDiv = () => {
    return <div  style={{ "backgroundColor": "#3F475F" }} className="mx-auto mt-20 rounded-xl w-[40%] py-8 px-10 shadow-lg">
      <div className="w-full "><img className="w-24 h-24 mx-auto" src={photoURL} alt={name} /></div>
      <div><ProfileText text={name} secondText="Name" /></div>
      <div><ProfileText text={email} secondText="Email" /></div>
      <button onClick={onSignOutClick} className="flex mx-auto mt-3 text-xl items-center px-2 py-2 bg-white text-green-500 border-green-500 hover:text-green-800 rounded-xl shadow-lg border-2 "><span className="mx-2"><FaSignOutAlt/></span> Sign Out</button>
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

  return (
    <div className="w-full">
      {authReducer !== null  ? profileDiv() : <LoadingSpinner/>}
    </div>
  );
}

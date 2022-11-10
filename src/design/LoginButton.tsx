import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginSuccessAction } from "../redux/actions";



interface Props {
    text: string
}

export default function LoginButton(props: Props) {
    const googleProvider = new GoogleAuthProvider();
    const dispatch = useDispatch();

    const onClick = async() => {
        try {
            await signInWithPopup(auth, googleProvider);
            dispatch(loginSuccessAction());
            
        } catch (err: any) {
            toast.error(err.message);
        }
    };


    return (
        <button onClick={onClick} className="text-center border-2  rounded-xl py-1 px-2 text-xl" style={{
            "borderColor": "#BCCEF8", "color": "#FAF7F0"
        }}>{props.text}</button>
    )
}

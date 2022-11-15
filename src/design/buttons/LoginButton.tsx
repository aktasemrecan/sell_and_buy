import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginSuccessAction } from "../../redux/actions";
import { addDoc, doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";



interface Props {
    text: string
}

export default function LoginButton(props: Props) {
    const googleProvider = new GoogleAuthProvider();
    const dispatch = useDispatch();

    const onClick = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            const docControl = await getDoc(doc(db, "users", auth.currentUser?.uid!));

            if (!docControl.exists()) {
                setDoc(doc(db, "users", auth.currentUser?.uid!), {
                    name: auth.currentUser?.displayName,
                    email: auth.currentUser?.email,
                    emailVerified: auth.currentUser?.emailVerified,
                    phoneNumber: auth.currentUser?.phoneNumber,
                    photoURL: auth.currentUser?.photoURL,
                    creatingTime: serverTimestamp(),
                    lastSeen: serverTimestamp()
                });
            } else {
                updateDoc(doc(db, "users", auth.currentUser?.uid!), {
                    lastSeen: serverTimestamp()
                });
                console.log("11");
            }

            dispatch(loginSuccessAction());

        } catch (err: any) {
            toast.error(err.message);
        }
    };


    return (
        <button onClick={onClick} className="text-center border-2  rounded-xl py-1 px-2 text-xl text-orange-500" style={{ "borderColor": "#BCCEF8" }}>
            {props.text}
        </button>
    )
}

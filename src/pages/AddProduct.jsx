import AddProductDiv from "../design/AddProductDiv";
import DefaultGreenButton from "../design/buttons/DefaultGreenButton";
import { useState } from "react";
import { addVehicleFs } from "../services";
import { useNavigate } from "react-router";
import { auth, storage } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function AddProduct() {
  const navigate = useNavigate();
  const [advertTitle, setAdvertTitle] = useState();
  const [companyName, setCompanyName] = useState();
  const [modelName, setModelName] = useState();
  const [year, setYear] = useState();
  const [power, setPower] = useState();
  const [km, setKm] = useState();
  const [fuelType, setFuelType] = useState();

  const [imageUrls, setImageUrls] = useState([]);

  const onClick = async () => {
    if (auth) {
      if (imageUrls.length>0) {
        await addVehicleFs({
          advertTitle: advertTitle,
          companyName: companyName,
          modelName: modelName,
          year: year,
          km: km,
          fuelType: fuelType,
          power: power,
          author: auth.currentUser.uid,
          creatingTime: serverTimestamp(),
          photoURLs: imageUrls,
        }).then(() => navigate("/"));
      }else{
        toast("Please first upload photos!");
      }
    }
  };

  const onChange = async (e) => {
    if (!e.target.files) {
      toast("Please first upload photos!");
    }

    Array.from(e.target.files).map((image) => {
      const storageRef = ref(storage, `/images/vehicles/${image.name}`);
      const uploadImages = uploadBytesResumable(storageRef, image);
      uploadImages.on(
        "state_changed",
        null,
        (err) => {
          toast.error(err.message);
        },
        () => {
          getDownloadURL(uploadImages.snapshot.ref).then((downloadURL) => {
            setImageUrls((prevState) => [...prevState, downloadURL]);
          });
        }
      );
    });
  };

  return (
    <div
      style={{ backgroundColor: "#3F475F" }}
      className="mx-auto mt-10 rounded-xl w-[35%] py-7 px-10 shadow-lg text-white"
    >
      <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-2">
        <AddProductDiv
          text="Advert Title"
          placeHolder="BMW 428i clear and without accident"
          onChange={(e) => setAdvertTitle(e.target.value)}
          value={advertTitle}
        />
        <div className="flex space-x-5">
          <AddProductDiv
            text="Company Name"
            placeHolder="BMW"
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
          />
          <AddProductDiv
            text="Model Name"
            placeHolder="428i"
            onChange={(e) => setModelName(e.target.value)}
            value={modelName}
          />
        </div>
        <div className="flex space-x-5">
          <AddProductDiv
            text="Year"
            placeHolder="2014"
            type="number"
            onChange={(e) => setYear(e.target.value)}
            value={year}
          />
          <AddProductDiv
            text="KM"
            type="number"
            placeHolder="54.351"
            onChange={(e) => setKm(e.target.value)}
            value={km}
          />
        </div>
        <div className="flex space-x-5">
          <AddProductDiv
            text="Motor Power"
            placeHolder="136 PS"
            onChange={(e) => setPower(e.target.value)}
            value={power}
          />
          <AddProductDiv
            text="Fuel Type"
            placeHolder="Benzin"
            onChange={(e) => setFuelType(e.target.value)}
            value={fuelType}
          />
        </div>
        <p className="text-2xl">Car Photos</p>

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={onChange}
          className="border-2 border-green-500 rounded-xl w-full py-1 px-1"
        />

        <div className=" justify-center mt-3">
          <DefaultGreenButton
            extraClass="mx-auto py-2 px-2 text-xl font-semibold"
            onClick={onClick}
            text="Add Advert"
          />
        </div>
      </form>
    </div>
  );
}

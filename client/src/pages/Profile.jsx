import { useQuery } from "@tanstack/react-query";
import getUser from "../services/apiUser";
import { useCookies } from "react-cookie";
import Loader from "../ui/Loader";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../src/firebase";
export const Profile = () => {
  const [cookie] = useCookies();
  const fileRef = useRef();
  const [image, setImage] = useState(undefined);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUser(cookie.access_token),
  });
  function handleImageUpload(image) {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    console.log(formData);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress);
      (error) => {
        console.log(error);
        setImageError(true);
      },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            console.log(downloadUrl);
            setFormData({ ...formData, profilePicture: downloadUrl });
          });
        };
    });
  }

  useEffect(() => {
    if (image) {
      handleImageUpload(image);
    }
  }, []);
  if (isLoading) return <Loader />;
  return (
    <div className="mt-[60px] flex flex-col justify-center items-center">
      <div className="text-center">
        <form>
          <input
            type="file"
            hidden
            ref={fileRef}
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <img
            src={data.userimage}
            onClick={() => fileRef.current.click()}
            className="h-30 w-30 rounded-full"
          />
        </form>
        <h1 className="font-bold">{data.username}</h1>
        <span className="font-semibold">{data.email}</span>
        <div className="my-4">
          <button className="bg-blue-700 text-white px-3 py-2 font-semibold">
            <NavLink to="updateprofile">Update Profile</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

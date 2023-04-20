import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
const usePhoneLoggedInUser = () => {
  const [user] = useAuthState(auth);
  const phoneNumber = user?.phoneNumber;
  const [phoneLoggedInUser, setPhoneLoggedInUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/phoneLoggedInUser?phoneNumber=${phoneNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setPhoneLoggedInUser(data);
      });
  }, [phoneNumber, phoneLoggedInUser]);

  return [phoneLoggedInUser, setPhoneLoggedInUser];
};

export default usePhoneLoggedInUser;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import '../Page.css'
import Mainpage from "./Mainpage/Mainpage";
const Profile =() =>{

    const [user]=useAuthState(auth);



    return(
        <div className="profilepage" >
            <Mainpage user={user}/>
        </div>
    )
}
export default Profile;
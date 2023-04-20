import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useNavigate } from "react-router-dom";
import auth from "../firebase.init.js";
import Pageloading from "../Components/Login/Pageloading";
const Protectedroutes=({children})=>{
    const [user, isLoading] = useAuthState(auth);
    const navigate = useNavigate();

    if(isLoading){
        return <Pageloading/>;
    }
    if(!user){
        navigate('/Login')
    }
    return children;
}

export default Protectedroutes;
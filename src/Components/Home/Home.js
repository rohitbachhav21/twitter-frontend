

import { signOut } from 'firebase/auth'
import auth from '../../firebase.init';
import React from 'react';
import Sidebar from '../sidebar/Sidebar'
import Feed from '../Feed/Feed'
import { Outlet } from 'react-router-dom';
 
import { useAuthState } from 'react-firebase-hooks/auth';
import './Home.css'
import useLoggedInUser from '../../Hooks/useLoggedInUser';
import Widgets from '../Widgets/Widgets';
const Home = () => {
    const user = useAuthState(auth);
    const [loggedInUser] = useLoggedInUser();
   
    console.log(loggedInUser);
    
    const handleLogout = () => {
        signOut(auth)
    }

    return (
        <div className='app'>


            <Sidebar handleLogout={handleLogout} user={user}  />
            <Outlet/>
            <Widgets/>
            

        </div>
    );
};

export default Home;
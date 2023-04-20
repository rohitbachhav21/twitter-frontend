import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import {
     
    Routes,
    Route,
    
  } from "react-router-dom";
import Signup from './Components/Login/Signup';
import Protectedroutes from './Components/Protectedroutes';
import Pageloading from './Components/Login/Pageloading';
import Feed from './Components/Feed/Feed';
import Explore from './Components/Explore/Explore';
import Notification from './Components/Notification/Notification';
import Message from './Components/Message/Message';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import List from './Components/List/List';
import Profile from './Components/Profile/Profile';
import More from './Components/More/More'
import PhoneLogin from './Components/Login/PhoneLogin';


function App() {
  return (
    <div className="App">
      

      <Routes>

                
                <Route exact path='/' element={<Protectedroutes> <Home/> </Protectedroutes>}>

                  <Route exact path='/Feed' element={<Feed/>}></Route>
                  <Route exact path='/Explore' element={<Explore/>}></Route>
                  <Route exact path='/Notification' element={<Notification/>}></Route>
                  <Route exact path='/Message' element={<Message/>}></Route>
                  <Route exact path='/Bookmarks' element={<Bookmarks/>}></Route>
                  <Route exact path='/List' element={<List/>}></Route>
                  <Route exact path='/Profile' element={<Profile/>}></Route>
                  <Route exact path='/More' element={<More/>}></Route>

                </Route>
                
                <Route exact path ='/Login' element={<Login/>} />
                <Route exact path='/PhoneLogin' element={<PhoneLogin/>}></Route>
                <Route exact path ='/Signup' element={<Signup/>} />
                <Route exact path ='/Pageloading' element={<Pageloading/>} />

        </Routes>
        
      
    </div>
  );
}

export default App;


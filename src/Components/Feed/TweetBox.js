import { Alert, Avatar, Button } from "@mui/material";
import { React, useState, useEffect } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import './TweetBox.css';
import axios from 'axios';
import useLoggedInUser from "../../Hooks/useLoggedInUser";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const TweetBox = () => {

    const [plan, setPlan] = useState(null);
    
        const [post, setPost] = useState('');
        const [imageURL, setIMageURL] = useState('');
        const [isLoading, setIsLoading] = useState('');
        const [loggedInUser] = useLoggedInUser();
        const [name, setName] = useState('');
        const [username, setUsername] = useState('');
        const [user] = useAuthState(auth);
        const email = user?.email;

    const [dailyTweetCount, setDailyTweetCount] = useState(0); 
  const MAX_DAILY_TWEETS_Silver = 5;
  const MAX_DAILY_TWEETS_Free = 1; 
  


  

  const handleTweetButtonClick = () => {
    if (plan === 'Silver Plan' && dailyTweetCount > MAX_DAILY_TWEETS_Silver) {
        alert("You exceeded the daily tweet limit")
      console.log('Tweet action for Silver Plan');
    } else if (plan === 'Free Plan' && dailyTweetCount > MAX_DAILY_TWEETS_Free) {
        alert("You exceeded the daily tweet limit")
        console.log('Tweet action for Free Plan');
    } 
  };





    const useProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : "http://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"


    const handleUploadImage = (e) => {
        setIsLoading(true)
        const image = e.target.files[0];
        const formData = new FormData();
        formData.set('image', image)

        axios.post("https://api.imgbb.com/1/upload?key=537e28daafd140c97e00e0b288477abe", formData)
            .then(res => {
                setIMageURL(res.data.data.display_url)
                console.log(res.data.data.display_url)
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false);

            })
    }



    const handleTweet = (e) => {
        e.preventDefault();
        setDailyTweetCount(prevCount => prevCount + 1);
        if (user.providerData[0].providerId === 'password') {
            // fetch(`http://localhost:5000/loggedInUser?email=${email}`)
            fetch(`https://twitter-backend-project.onrender.com/loggedInUser?email=${email}`)

                .then(res => res.json())
                .then(data => {
                    setName(data[0]?.name)
                    setUsername(data[0]?.username)
                })
        }
        else {
            setName(user?.displayName)
            setUsername(email?.split('@')[0])
        }

        if (name) {
            const userPost = {
                profilePhoto: useProfilePic,
                post: post,
                photo: imageURL,
                username: username,
                name: name,
                email: email
            }

          
            setPost('')
            setIMageURL('')

            // fetch(`http://localhost:5000/post`, {
            fetch(`https://twitter-backend-project.onrender.com/post`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userPost)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

   


    return (
        <div className="tweetBox" 
        
        >
            <form onSubmit={handleTweet}>
                <div className="tweetBox_input">
                    <Avatar src={loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage : "http://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}/>
                    <input type="text"
                        placeholder="What's happening?"
                        onChange={(e) => setPost(e.target.value)}
                        value={post}
                        required
                    />
                </div>
                <div className="imageIcon_tweetButton">
                    <label htmlFor="image" className="imageIcon">
                        {isLoading ? <p>Uploading Image</p> : <p>{imageURL ? 'image uploaded' : <AddPhotoAlternateIcon />}</p>}
                    </label>
                    <input type="file"
                        id="image"
                        className="imageInput"
                        onChange={handleUploadImage}
                    />
                    </div>
                    <Button className="tweetBox_tweetButton" type="submit" onClick={handleTweetButtonClick}
                    disables={{ condition: dailyTweetCount > MAX_DAILY_TWEETS_Silver || dailyTweetCount > MAX_DAILY_TWEETS_Free }}
                    >Tweet</Button>
            </form>
        </div>
    )

}
export default TweetBox;





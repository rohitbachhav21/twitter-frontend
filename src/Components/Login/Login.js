import React, { useState } from "react";
import twitterImage from "../../assets/images/twitter.jpeg";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { GoogleButton } from "react-google-button";

import { useNavigate } from "react-router-dom";
import "./style.css";
import Pageloading from "./Pageloading";
import { Button } from "react-bootstrap";

const Login = () => {
   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

  if (user || googleUser) {
    navigate("/Feed");
    console.log(user);
    console.log(googleUser);
  }

  if (error) {
    console.log(error.message);
  }
  if (loading) {
    return <Pageloading />;
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password).catch((error) => {
      setErrorMessage(error.message);
    });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };
  const handleNavigate = () => {
    <Pageloading />;
    navigate("/PhoneLogin");
  };

  return (
    <div className="login-container" >
      <div className="image-container">
        <img src={twitterImage} alt="" />
      </div>

      <div className="form-container" style={{margin:"1rem auto",paddingLeft:"1rem auto"}}>
        <TwitterIcon className="twittericon" />
        <h2>
          <strong>Happening Now</strong>
        </h2>
        <form onSubmit={handleSubmit} >
          <input
            type="email"
            className="input-form"
            placeholder="Email Address"
            style={{ outline: "none" }}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            className="input-form"
            placeholder="Password"
            style={{ outline: "none" }}
            onChange={(event) => setPassword(event.target.value)}
          />

          <center>
            <div>
              <button className="btn-login" type="submit" >
                Login
              </button>
            </div>
          </center>
        </form>

        <hr />

        <center>
          <div>
            <Button
              className="btn-phone"
              variant="dark"
              style={{ width: "90%" }}
              onClick={handleNavigate}
              onTouchStart={handleNavigate}
            >
              signin with phone
            </Button>
          </div>
        </center>
        <hr />

        <center>
          <GoogleButton
            onClick={handleSignInWithGoogle}
            className="g-btn"
            type="light"
          />
        </center>
        <div>
          Don't have an account?
          <a
            href="./Signup"
            style={{
              textDecoration: "none",
              color: "skyblue",
              fontWeight: "600",
              marginLeft: "5px",
            }}
          >
            SignUp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;




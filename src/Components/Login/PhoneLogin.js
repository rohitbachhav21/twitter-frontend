import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link, useNavigate } from "react-router-dom";
import twitterImage from "../../assets/images/twitter.jpeg";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./PhoneLogin.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Button, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import axios from "axios";

const PhoneLogin = ({name,username,email}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  ///////

  function setUPRecaptcha(phoneNumber) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
  }

  const getOtp = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (phoneNumber === "" || phoneNumber === undefined)
      return setErrorMessage("Please enter a valid phone number!");

    try {
      const response = await setUPRecaptcha(phoneNumber);
      console.log(response);
      setConfirmObj(response);
      setFlag(true);
    } catch (err) {
      setErrorMessage(err.message);
    }
    console.log(phoneNumber);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp === "" || otp === null) return;
    try {
      setErrorMessage("");
      await confirmObj.confirm(otp);
      navigate("/Feed");
    } catch (err) {
      setErrorMessage(err.message);
    }

    const user = {
        name:name,
        username:username,
        email:email,
        phoneNumber: phoneNumber,

    };
    // const data = axios.post(`http://localhost:5000/register`, user);
    const data = axios.post(`https://twitter-backend-project.onrender.com/register`, user);

    console.log(data);
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };

  if (googleUser) {
    navigate("/Feed");
  }

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={twitterImage} alt="" />
      </div>
      <div className="phone-container">
        <TwitterIcon className="twittericon" />
        <h2>
          <strong>Happening Now</strong>
        </h2>

        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <PhoneInput
              style={{ border: "0.3rem solid transparent" }}
              className="phone-input"
              value={phoneNumber}
              onChange={setPhoneNumber}
              placeholder="Enter Phone Number"
            />

            <center>
              <div id="recaptcha-container" style={{ marginTop: "10px" }}></div>
            </center>
          </Form.Group>
          <div className="button-right">
            <div className="bt1">
              <Link to="/Login">
                <Button
                  style={{ marginRight: "20px", height: "3rem", width: "6rem" }}
                  variant="secondary"
                >
                  CANCEL
                </Button>
              </Link>
            </div>

            <div className="bt2">
              <Button
                type="submit"
                style={{
                  height: "3rem",
                  width: "8rem",
                  backgroundColor: "#00acee",
                }}
              >
                SEND OTP
              </Button>
            </div>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicotp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
              className="input-form"
              style={{ marginLeft: "17px" }}
            />

            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <div className="bt1">
              <Link to="/Login">
                <Button
                  variant="secondary"
                  style={{ marginRight: "20px", height: "3rem", width: "6rem" }}
                >
                  Cancel
                </Button>
              </Link>
            </div>
            <div className="bt2">
              <Button
                type="submit"
                style={{
                  height: "3rem",
                  width: "8rem",
                  backgroundColor: "#00acee",
                }}
              >
                Verify OTP
              </Button>
            </div>
          </div>
        </Form>

        <hr />

        <center>
          <GoogleButton
            onClick={handleSignInWithGoogle}
            className="g-btn"
            type="light"
          />
        </center>
      </div>
    </div>
  );
};
export default PhoneLogin;

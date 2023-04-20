
import { useState } from "react";
import Sidebaropt from "../sidebar/Sidebaropt";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreIcon from "@mui/icons-material/More";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import React, { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import CustomLink from "./CustomLink";
import useLoggedInUser from "../../Hooks/useLoggedInUser";
import CloseIcon from "@mui/icons-material/Close";
import TweetBox from "../Feed/TweetBox";
import TwitterBlue from "./TwitterBlue";
import Pageloading from "../Login/Pageloading";

const Sidebar = ({ user }) => {
  const [anchore1, setAnchorE1] = useState(null);
  const [anchore2, setAnchorE2] = useState(null);
  const [anchore3, setAnchorE3] = useState(null);

  const openMenu = Boolean(anchore1);
  const openCard = Boolean(anchore2);
  const openBlueCard = Boolean(anchore3);
  const navigate = useNavigate();
  const [loggedInUser] = useLoggedInUser();

 

  const useProfilePic = loggedInUser[0]?.profileImage
    ? loggedInUser[0]?.profileImage
    : "http://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
  const handleClick = (element) => {
    setAnchorE1(element.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };
  const handleClick1 = (element) => {
    setAnchorE2(element.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorE2(null);
  };

  const handleClick2 = (element) => {
    setAnchorE3(element.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE3(null);
  };



  const handleLogout = () => {
    <Pageloading />;
    navigate("/Login");
  };
  

  // dont change
  const email = user.email || ""; // set email to an empty string if it's null or undefined
  const emailSplit = user[0].email ? user[0].email.split("@")[0] : null;

  const phoneNumber = user.phoneNumber || "";
  const phonenum = user[0].phoneNumber ? user[0].phoneNumber : null;

  return (
    <div className="Sidebar">
      <div className="flexbox">
        <TwitterIcon
          className="Twittericon"
          
          style={{ marginBottom: "1.25rem", marginTop: "1.25rem",cursor:"pointer" }}
        />
      </div>

      <CustomLink to="/Feed">
        <Sidebaropt className="icon" active Icon={HomeIcon} text="Home" />
      </CustomLink>

      <CustomLink to="/Explore">
        <Sidebaropt className="icon" active Icon={SearchIcon} text="Explore" />
      </CustomLink>

      <CustomLink to="/Notification">
        <Sidebaropt
          className="icon"
          active
          Icon={NotificationsIcon}
          text="Notifications"
        />
      </CustomLink>

      <CustomLink to="/Message">
        <Sidebaropt
          className="icon"
          active
          Icon={MailOutlineIcon}
          text="Message"
        />
      </CustomLink>

      <CustomLink to="/Bookmarks">
        <Sidebaropt
          className="icon"
          active
          Icon={BookmarkBorderIcon}
          text="Bookmarks"
        />
      </CustomLink>

      <CustomLink to="/Profile">
        <Sidebaropt
          className="icon"
          active
          Icon={PermIdentityIcon}
          text="Profile"
        />
      </CustomLink>

      <CustomLink to="More">
        <Sidebaropt className="icon" active Icon={MoreIcon} text="More" />
      </CustomLink>

      <div
        className="Edit-subscribe-btn"
        text="Twitter Blue"
        aria-controls={openBlueCard ? "basic-card-blue" : undefined}
        aria-haspopup="true"
        aria-expanded={openBlueCard ? "true" : undefined}
        onClick={handleClick2}
      >
        Twitter Blue
      </div>
      <Menu
        id="basic-card-blue"
        anchore3={anchore3}
        open={openBlueCard}
        style={{
          zIndex: 9999,
          opacity: 9999,
          borderRadius: "1rem",
          marginLeft: "338px",
        }}
      >
        <center>
          <CloseIcon
            style={{
              float: "right",
              cursor: "pointer",
              backgroundColor: "white",
            }}
            onClick={handleClose2}
          />
          <TwitterBlue />
        </center>
      </Menu>

      <button
        varient="outline"
        className="sidebar_tweet"
        aria-controls={openCard ? "basic-card" : undefined}
        aria-haspopup="true"
        aria-expanded={openCard ? "true" : undefined}
        onClick={handleClick1}
      >
        Tweet
      </button>

      <div className="temp">
        <div className="Profile_info">
          <Avatar src={useProfilePic} />

          <div className="user_info">
            <h6>
              {loggedInUser[0]?.name
                ? loggedInUser[0]?.name
                : user && user?.displayName}
            </h6>
            <p>@{emailSplit}</p>
          </div>
        </div>
        <IconButton
          className="iconButton"
          size="small"
          sx={{ ml: 2 }}
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>

        <Menu
          id="basic-menu"
          anchore1={anchore1}
          open={openMenu}
          style={{ zIndex: 9999, opacity: 9999, borderRadius: "1.25rem" ,
          marginTop:'15rem',marginLeft:"10rem"
          }}
        >
          <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
          <MenuItem onClick={handleLogout}>Log Out {emailSplit}</MenuItem>
        </Menu>
      </div>

      <Menu
        id="basic-card"
        anchore2={anchore2}
        open={openCard}
        style={{
          zIndex: 9999,
          opacity: 9999,
          borderRadius: "10px",
          marginLeft: "338px",
          width: "100%",
          height: "500vh",
        }}
      >
        <center>
          <CloseIcon
            style={{ float: "right", cursor: "pointer" }}
            onClick={handleClose1}
          />
          <TweetBox />
        </center>
      </Menu>
    </div>
  );
};

export default Sidebar;

//working fine for email
// {loggedInUser[0]?.name && (

// <div className="Profile_info">
//   <Avatar src={useProfilePic} />
//   <div className="user_info">
//     <h6>
//       {loggedInUser[0]?.name}
//     </h6>
//     {loggedInUser[0]?.email ? (
//       <p>@{emailSplit}</p>
//     ) : (
//       <p>@{phonenum}</p>
//     )}
//   </div>
// </div>
// )}

//usable
// {loggedInUser[0]?.name && (
//   <div className="Profile_info">
//     <Avatar src={useProfilePic} />
//     <div className="user_info">
//       <h6>
//         {loggedInUser[0]?.name}
//       </h6>
//       <p>@{emailSplit}</p>
//     </div>
//   </div>
// )}
// {phoneLoggedInUser[0]?.phoneNumber && (

// <div className="Profile_info">
//   <Avatar src={useProfilePic} />
//   <div className="user_info">
//     <h6>
//       {phoneLoggedInUser[0]?.name}
//     </h6>
//     <p>@{phoneLoggedInUser[0]?.phoneNumber}</p>
//   </div>
// </div>
// )}

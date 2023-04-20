import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import * as React from "react";
import { IconButton, TextField } from "@mui/material";
import './Editprofile.css'
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import axios from "axios";
import useLoggedInUser from "../../../Hooks/useLoggedInUser";
// import {Text} from "react-native"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50% ,-50%)',
    width: 600,
    height: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 8
}

function EditChild({ dob, setDob }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <React.Fragment>
            <div className="birthdate-section" onClick={handleOpen}>
                <text>
                    Edit
                </text>
            </div>
            <Modal
                hideBackdrop
                onClose={handleClose}
                open={open}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 300, height: 330 }}>
                    <div className="text">
                        <h2>Edit date of birth</h2>
                        <p>This can only be changed a tew times. <br />
                            make sure you enter the age of the <br />
                            person using account
                        </p>
                        <input type="date" onChange={e => setDob(e.target.value)} />
                        <button className="e-button" onClick={() => { setOpen(false) }}>Cancel</button>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    )
}

export default function Editprofile({ user }) {
    const [open, setOpen] = React.useState(false)
    const [name, setName] = React.useState('');
    const [username ,setUsername] = React.useState('');
    const [bio, setBio] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [website, setWebsite] = React.useState('');
    const [dob, setDob] = React.useState('');
    const [loggedInUser] = useLoggedInUser('')

    const handleSave = async () => {
        const editInfo = {
            name,
            username,
            bio,
            location,
            website,
            dob,
        }
        if (editInfo) {
            //  axios.patch(`http://localhost:5000/userUpdates/${user?.email}`, editInfo)
            axios.patch(`https://twitter-backend-project.onrender.com/userUpdates/${user?.email}`, editInfo)
            setOpen(false);
        }
    }



    return (
        <div>
            <button className="Edit-profile-btn" style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>Set up profile</button>

            <Modal open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <Box sx={style} className='Modal'>
                    <div className="header">
                        <IconButton onClick={() => { setOpen(false) }}><CloseIcon /></IconButton>
                        <h2 className="header-title">Edit Profile</h2>
                        <button className="save-btn" onClick={handleSave}>Save</button>
                    </div>
                    <form className="fill-content">

                        <TextField className="text-field" fullWidth placeholder='Name' is='fullWidth' variant="filled"
                            onChange={(e) => setName(e.target.value)} defaultValue={loggedInUser[0]?.name ? loggedInUser[0]?.name : ""} />

                        <TextField className="text-field" fullWidth placeholder='Username' is='fullWidth' variant="filled"
                            onChange={(e) => setUsername(e.target.value)} defaultValue={loggedInUser[0]?.username ? loggedInUser[0]?.username : ""} />

                        <TextField className="text-field" fullWidth placeholder='Bio' is='fullWidth' variant="filled"
                            onChange={(e) => setBio(e.target.value)} defaultValue={loggedInUser[0]?.bio ? loggedInUser[0]?.bio : ""} />

                        <TextField className="text-field" fullWidth placeholder='Location' is='fullWidth' variant="filled"
                            onChange={(e) => setLocation(e.target.value)} defaultValue={loggedInUser[0]?.location ? loggedInUser[0]?.location : ""} />

                        <TextField className="text-field" fullWidth placeholder='Website' is='fullWidth' variant="filled"
                            onChange={(e) => setWebsite(e.target.value)} defaultValue={loggedInUser[0]?.website ? loggedInUser[0]?.website : ""} />






                    </form>

                    <div className="birthDate-section">
                        <p>Birth Date</p>
                        <p>.</p>
                        <EditChild dob={dob} setDob={setDob} />
                    </div>
                    <div className="last-section">
                        {
                            loggedInUser[0]?.dob ?
                                <h2>{loggedInUser[0]?.dob}</h2> :
                                <h2>
                                    {
                                        dob ? dob : "Add your date of birth"
                                    }
                                </h2>

                        }
                        <div className="last-btn">
                            <h2>Switch to professional</h2>
                            <ChevronRightIcon />
                        </div>
                    </div>

                </Box>
            </Modal>

        </div>
    )
}




import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter'

const Pageloading = () => {
    

    return(
        <div style={{display:'flex',minHeight:'100vh',justifyContent:'center',alignItems:'center' }}>
            <div>
                <TwitterIcon style={{color: '#00acee'}}/>
                <h4 style={{color:'#00acee'}}>Loading...</h4>
            </div>
        </div>
    )
}
export default Pageloading;
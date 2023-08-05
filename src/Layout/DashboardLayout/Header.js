import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CustomizedInputBase from './searchBar';
import React from "react";
import { red } from '@mui/material/colors';
import { Outlet } from 'react-router-dom';
import TotalUser from "../../Images/TotalUser.svg"
import TotalMalls from "../../Images/TotalMalls.svg"
import TotalStores from "../../Images/TotalStores.svg"
import {  useSelector } from 'react-redux';
import Profile from "../../Images/profile.jpg"
import { useNavigate } from "react-router-dom"


const Header = () => {
    const headerTag=useSelector((state)=>state.PageHeader.header)
    const navigate = useNavigate()

    const profileNavigate=()=>{
        navigate(`/app/profile`);
    }
    return (
        <>
            <div style={{ display: "flex" }}>
                <h1 style={{ display: "inline", marginLeft: "30px",fontFamily:'Poppins',fontSize: "32px",width:"30%",fontWeight:"500" }}>{headerTag}</h1>
                  
                <div style={{ display: "-webkit-inline-flex", height: "49px", width: "387px", paddingLeft: "10px",paddingRight:"10px", marginLeft: "38.5%", paddingTop: "8px",backgroundColor:"white",borderRadius:"28px" ,marginTop:"20px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}>
                    <CustomizedInputBase />
                    <NotificationsNoneIcon sx={{ paddingLeft: "20px", paddingTop: "7px" }} />
                    <ErrorOutlineIcon sx={{ paddingLeft: "20px", paddingTop: "7px" }} />
                    <div style={{height:"42px",width:"42px",marginLeft:"39px",borderRadius:"21px",overflow:"hidden"}}>
                        <img src={Profile} onClick={profileNavigate} style={{height:"100%",width:"100%"}}/>
                    </div>
                </div>                
            </div>

            <div style={{ height: "100px", width: "95%", marginLeft: "1%", backgroundColor: "#dfccf2", borderRadius: "10px",display:"flex",justifyContent:"space-around",marginTop:"20px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}>
                <div style={{ display: "-webkit-inline-flex"}}>
                    <div style={{height:'56%',width:"56%",marginTop:"20px"}}>
                    <img src={TotalUser} alt='TotalUser' style={{height:"100%",width:"100%"}} />
                    </div>
                    <div style={{ marginLeft: "0px",width:"120px" }}>
                        <h3 style={{opacity:".4"}}>Total User</h3>
                        <h2 style={{ marginTop: "-15px" }}>1200</h2>
                    </div>
                </div>
                <div style={{ display: "-webkit-inline-flex"}}>
                    <div style={{height:'56%',width:"56%",marginTop:"20px"}}>
                    <img src={TotalMalls} alt='TotalUser' style={{height:"100%",width:"100%"}} />
                    </div>
                    <div style={{ marginLeft: "0px",width:"120px" }}>
                        <h3 style={{opacity:".4"}}>Total User</h3>
                        <h2 style={{ marginTop: "-15px" }}>1200</h2>
                    </div>
                </div>
                <div style={{ display: "-webkit-inline-flex"}}>
                    <div style={{height:'56%',width:"56%",marginTop:"20px"}}>
                    <img src={TotalStores} alt='TotalUser' style={{height:"100%",width:"100%"}} />
                    </div>
                    <div style={{ marginLeft: "0px",width:"120px" }}>
                        <h3 style={{opacity:".4"}}>Total User</h3>
                        <h2 style={{ marginTop: "-15px" }}>1200</h2>
                    </div>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}
export default Header;
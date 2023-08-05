import React, { useState, useEffect } from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CustomizedInputBase from "./searchBar";
import profile from "../../Images/profile.jpg";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';

const Profile = () => {
  const [value, setValue] = useState("janeDoe@domain.com");
  const [editMode, setEditMode] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [profileFormValue, SetprofileFormValue] = useState({
    FullName: "",
    Email: "",
    UserName: "",
    Phone: ""
  })

  const handleFormData = (event) => {
    let currentFieldName = event.target.name;
    let value = event.target.value;
    SetprofileFormValue({
      ...profileFormValue,
      [currentFieldName]: value
    });

  };

  // const handleMouseOver = (event) => {
  //   if (!mouseOver) {
  //     setMouseOver(true);
  //   }
  // };

  // const handleMouseOut = (event) => {
  //   // The problem is here!!!
  //   if (mouseOver) {
  //     setMouseOver(false);
  //   }
  // };

  const handleClick = () => {
    setEditMode(!editMode);
    setMouseOver(false);
  };

  const handleSubmit = () => {
    console.log("...........Profile Data.................", profileFormValue);
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <h1 style={{ display: "inline", marginLeft: "30px", fontFamily: 'Poppins', fontSize: "32px", width: "30%",fontWeight:"500" }}>Admin Profile</h1>

        <div style={{ display: "-webkit-inline-flex", height: "49px", width: "387px", paddingLeft: "10px", paddingRight: "10px", marginLeft: "40%", paddingTop: "8px", backgroundColor: "white", borderRadius: "28px", marginTop: "20px" }}>
          <CustomizedInputBase />
          <NotificationsNoneIcon sx={{ paddingLeft: "20px", paddingTop: "7px" }} />
          <ErrorOutlineIcon sx={{ paddingLeft: "20px", paddingTop: "7px" }} />
          <div style={{ height: "42px", width: "42px", marginLeft: "39px", borderRadius: "21px", overflow: "hidden" }}>
            <img src={profile} style={{ height: "100%", width: "100%" }} />
          </div>
        </div>
      </div>

      <div style={{ height: "650px", width: "65%", marginTop: "100px", marginLeft: "15%", borderRadius: "10px", display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "15px" }}>
          <div style={{ height: "200px", width: "200px", display: "inline", backgroundColor: "blue", borderRadius: "100px", overflow: "hidden" }}>
            <img src={profile} style={{ height: "100%", width: "100%" }} />
          </div>
          <button style={{ width: "117px", height: "37px", backgroundColor: "rgba(176,174,247,0.738532913165266)", borderRadius: "8px", border: "1px solid black", color: "white", marginTop: "20px" }}>Edit Photo</button>
        </div>

        <div style={{ width: "100%", paddingLeft: "130px" }}>
          <div>
            <label style={{ marginLeft: "7px" }} className="paragraph_container">Full Name</label><br />
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 545 }}>
              <TextField
                id="standard-basic"
                variant="outlined"
                name="FullName"
                disabled={!editMode}
                defaultValue={value}
                onChange={handleFormData}
              />
            </FormControl>
            <CreateTwoToneIcon onClick={handleClick} sx={{ marginLeft: "20px", marginTop: "15px" }} />
          </div>

          <div style={{ marginTop: "25px" }}>
            <label style={{ marginLeft: "7px" }} className="paragraph_container">Email Address</label><br />
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 545 }}>
              <TextField
                id="standard-basic"
                variant="outlined"
                name="Email"
                disabled={!editMode}
                onChange={handleFormData}

              // onChange={}
              // value={createCycleFormValues.assets}
              />
            </FormControl>
            <CreateTwoToneIcon onClick={handleClick} sx={{ marginLeft: "20px", marginTop: "15px" }} />
          </div>

          <div style={{ marginTop: "25px" }}>
            <label style={{ marginLeft: "7px" }} className="paragraph_container">User Name</label><br />
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 545 }}>
              <TextField
                id="standard-basic"
                variant="outlined"
                name="UserName"
                // defaultValue={'ALL'}
                disabled={!editMode}
                onChange={handleFormData}
              // value={createCycleFormValues.assets}
              />
            </FormControl>
            <CreateTwoToneIcon onClick={handleClick} sx={{ marginLeft: "20px", marginTop: "15px" }} />
          </div>

          <div style={{ marginTop: "25px" }}>
            <label style={{ marginLeft: "7px" }} className="paragraph_container">Phone Number</label><br />
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 545 }}>
              <TextField
                id="standard-basic"
                variant="outlined"
                name="Phone"
                // defaultValue={'ALL'}
                disabled={!editMode}
                onChange={handleFormData}
              // value={createCycleFormValues.assets}
              />
            </FormControl>
            <CreateTwoToneIcon onClick={handleClick} sx={{ marginLeft: "20px", marginTop: "15px" }} />
          </div>
          <button onClick={handleSubmit} style={{ width: "117px", height: "37px", backgroundColor: "rgba(176,174,247,0.738532913165266)", borderRadius: "8px", border: "1px solid black", color: "white", marginTop: "20px", marginLeft: "7px" }}>SAVE</button>
        </div>
      </div>

    </>
  )
}

export default Profile;
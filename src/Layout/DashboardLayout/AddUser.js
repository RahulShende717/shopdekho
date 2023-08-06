import { React, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import axios from "axios"
import Grid from "@mui/material/Grid";
import ShopingGirl from "../../Images/salePic.jpg"
import TextField from '@mui/material/TextField';
import { FormControl } from "@mui/material";

import {

    useParams
} from "react-router-dom";

export default function AddUser() {
    const [userData, setuserData] = useState([]);
    
    let { parameter } = useParams();
    console.log("kkkkkkkkkkkkkkk", parameter);
    useEffect(() => {
        getUsers()
    }, [])

    const [userFormData, SetUserFormData] = useState({
        FirstName: "",
        LastName: "",
        UserName: "",
        Email: "",
        Password: "",
        Phone: "",
    })

    const handleFormData = (event) => {
        let currentFieldName = event.target.name;
        let value = event.target.value;
        SetUserFormData({
            ...userFormData,
            [currentFieldName]: value
        });
    };

    const getUsers = async () => {
        console.log("use Effect Is called To Update", parameter)
        console.log("use Effect Is called To Update", typeof (parameter))
        try {
            if (parameter == "false") {
                setuserData("");
            }
            else {
                const id = parameter
                const response = await axios.get(`http://localhost:30001/users/${id}`);
                console.log(">>>>>>>>>", response.data);
                let assignData=response.data;
                setuserData(response.data);
                userFormData.FirstName=assignData.firstname;
                userFormData.LastName=assignData.lastname;
                userFormData.UserName=assignData.username;
                userFormData.Email=assignData.email;
                userFormData.Password=assignData.password;
                userFormData.Phone=assignData.phone;
            }
        } catch (error) {
            console.log(error)
        }
    }
   
    const payload = {
        username: userFormData.UserName,
        firstname: userFormData.LastName,
        lastname: userFormData.UserName,
        email: userFormData.Email,
        password: userFormData.Password,
        phone: userFormData.Phone,
    }



    let button = userData ? "UPADATE" : "SAVE";

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("==================================", userFormData);
        if (button == "SAVE") {
            console.log("payload.........", payload)
            console.log("subit is trigger.........", userFormData);
            try {
                const response = await axios.post(`http://localhost:30001/users`, payload);
                if (response.data) {
                    console.log("0000000000000000000000000", response.data)
                }
            } catch (error) {
          console.log(error)
            }
        }
        else {
            const payload={
                username:userFormData.UserName,
                firstname:userFormData.FirstName,
                lastname:userFormData.LastName,
                email:userFormData.Email,
                password:userFormData.Password,
                phone:userFormData.Phone
            }
            console.log("parameter.....",parameter);
            console.log("=+++++++++++++++++++++", userFormData);
            try {         
                const response = await axios.put(`http://localhost:30001/users/${parameter}`,payload);
                console.log("response...by Update",response.data);
            } catch (error) {
                
            }
        }
    }


    return (
        <>
            <div style={{ display: "inline-block", marginLeft: "89px", marginTop: "50px", fontFamily: 'Poppins', fontSize: "36px" }}>Add Your User</div>
            <Box sx={{ flexGrow: 1, marginTop: "35px", backgroundColor: 'rgba(255, 255, 255, 0.5)', width: "90%", alignSelf: "center", marginLeft: "5%", borderRadius: "20px", boxShadow: " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }}>
                <form type="submit" autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container spacing={0}>
                        <Grid item xs={2} md={2} lg={3}>
                            <div style={{ height: "100%", widoverflow: "hidden", }}>
                                <img src={ShopingGirl} style={{ height: "100%", width: "100%" }} />

                            </div>
                        </Grid>

                        <Grid xs={10} md={10} lg={9} container spacing={0}>
                            <div style={{ paddingLeft: "4%", marginTop: "30px", marginBottom: "35px", height: "100%", width: "100%" }}>
                                <Box
                                    component="form"
                                    sx={{ '& .MuiTextField-root': { m: 5, width: '50ch' } }}
                                    noValidate
                                    autoComplete="off"
                                >

                                    <div>
                                            <TextField id="outlined-basic" Label="firstname"name="FirstName"
                                                onChange={handleFormData}
                                                value={userFormData.FirstName}
                                                variant="outlined"
                                                label="First Name"
                                                />

                                        <TextField
                                            // id="standard-error-helper-text"
                                            label="Last Name"
                                            name="LastName"
                                            // defaultValue="Hello World"
                                            variant="outlined"
                                            onChange={handleFormData}
                                            value={userFormData.LastName}
                                            // set inputProps={"aria-readonly"}

                                        />
                                    </div>

                                    <div>
                                        <TextField
                                            id="standard-error"
                                            // label="User Name"
                                            name="UserName"
                                            // defaultValue="Hello World"
                                            variant="outlined"
                                            onChange={handleFormData}
                                            value={userFormData.UserName}

                                        />
                                        <TextField
                                            id="standard-error-helper-text"
                                            // label="Email"
                                            name="Email"
                                            // defaultValue="Hello World"
                                            variant="outlined"
                                            onChange={handleFormData}
                                            required
                                            value={userFormData.Email}

                                        />
                                    </div>

                                    <div>
                                        <TextField
                                            id="standard-error"
                                            // label="Password"
                                            name="Password"
                                            // defaultValue="Hello World"
                                            variant="outlined"
                                            onChange={handleFormData}
                                            required
                                            value={userFormData.Password}


                                        />
                                        <TextField
                                            id="standard-error-helper-text"
                                            // label="Mobile No."
                                            name="Phone"
                                            // defaultValue={userData.phone}
                                            variant="outlined"
                                            onChange={handleFormData}
                                            value={userFormData.Phone}


                                        />
                                    </div>

                                    <div style={{ marginLeft: "550px", display: "-webkit-inline-flex" }}>
                                        <button type="submit" onClick={handleSubmit} style={{ width: "200px", height: "37px", backgroundColor: "rgba(176,174,247,0.738532913165266)", borderRadius: "8px", border: "1px solid black", color: "white", marginTop: "20px", marginLeft: "7px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", color: "black" }}>{button}</button>
                                        {/* <button style={{ width: "200px", height: "37px", backgroundColor: "rgba(176,174,247,0.738532913165266)", borderRadius: "8px", border: "1px solid black", color: "white", marginTop: "20px", marginLeft: "7px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",color:"black" }}>CLEAR</button> */}
                                    </div>
                                </Box>


                            </div>

                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    );
}

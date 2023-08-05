import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ShopingGirl from "../../Images/salePic.jpg"
import TextField from '@mui/material/TextField';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";



export default function AddUser(props) {

    // const parameterValue = props;
    // console.log(".........................",props);

    let { parameter } = useParams();
        console.log(".........................",parameter);



    return (
        <>
        <div style={{display:"inline-block",marginLeft: "89px", marginTop: "50px", fontFamily: 'Poppins', fontSize: "36px"}}>Add Your User</div>
        <Box sx={{ flexGrow: 1, marginTop: "35px", backgroundColor: 'rgba(255, 255, 255, 0.5)', width: "90%", alignSelf: "center", marginLeft: "5%", borderRadius:"20px",boxShadow:" rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }}>
            <Grid container spacing={0}>
                <Grid item xs={2} md={2} lg={3}>
                    <div style={{ height: "100%", widoverflow: "hidden", }}>
                        <img src={ShopingGirl} style={{ height: "100%", width: "100%" }} />

                    </div>
                </Grid>

                <Grid xs={10} md={10} lg={9} container spacing={0}>
                    <div style={{ paddingLeft: "4%",marginTop:"30px", marginBottom: "35px", height: "100%", width: "100%" }}>
                        <Box
                            component="form"
                            sx={{ '& .MuiTextField-root': { m: 5, width: '50ch' } }}
                            noValidate
                            autoComplete="off"
                        >

                            <div>
                                <TextField
                                    id="standard-error"
                                    label="FirstName"
                                    defaultValue="Hello World"
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-error-helper-text"
                                    label="LastName"
                                    defaultValue="Hello World"
                                    variant="standard"
                                />
                            </div>

                            <div>
                                <TextField
                                    id="standard-error"
                                    label="FirstName"
                                    defaultValue="Hello World"
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-error-helper-text"
                                    label="LastName"
                                    defaultValue="Hello World"
                                    variant="standard"
                                />
                            </div>

                            <div>
                                <TextField
                                    id="standard-error"
                                    label="FirstName"
                                    defaultValue="Hello World"
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-error-helper-text"
                                    label="LastName"
                                    defaultValue="Hello World"
                                    variant="standard"
                                />
                            </div>

                            <div>
                                <TextField
                                    id="standard-error"
                                    label="FirstName"
                                    defaultValue="Hello World"
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-error-helper-text"
                                    label="LastName"
                                    defaultValue="Hello World"
                                    variant="standard"
                                />
                            </div>

                            <div>
                                <TextField
                                    id="standard-error"
                                    label="FirstName"
                                    defaultValue="Hello World"
                                    variant="standard"
                                />
                                <TextField
                                    id="standard-error-helper-text"
                                    label="LastName"
                                    defaultValue="Hello World"
                                    variant="standard"
                                />
                            </div>
                            <div style={{marginLeft:"550px", display:"-webkit-inline-flex"}}>
                            <button style={{ width: "200px", height: "37px", backgroundColor: "rgba(176,174,247,0.738532913165266)", borderRadius: "8px", border: "1px solid black", color: "white", marginTop: "20px", marginLeft: "7px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",color:"black" }}>SAVE</button>
                            <button style={{ width: "200px", height: "37px", backgroundColor: "rgba(176,174,247,0.738532913165266)", borderRadius: "8px", border: "1px solid black", color: "white", marginTop: "20px", marginLeft: "7px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",color:"black" }}>CLEAR</button>
                        </div>
                        </Box>
                       

                    </div>

                </Grid>
            </Grid>
        </Box>
        </>
    );
}

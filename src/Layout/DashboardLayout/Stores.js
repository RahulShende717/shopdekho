import React, { useState, useEffect } from "react";
import { setHeader } from "../../ReduxStore/HeaderReducer";
import { useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Add from "../../../src/Images/ADD.svg";
import More from "../../../src/Images/More.svg";
import CloseIcon from '@mui/icons-material/Close';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import { useNavigate } from "react-router-dom"

const Stores=()=>{

    const dispatch=useDispatch();

    useEffect(()=>{
        setHeaderFun();
    },[])

   const setHeaderFun=()=>{

    console.log("setHeaderFun called..............")
    dispatch(setHeader({headerTag:"Stores Management"}))
      
   }

   
   let FiltredData = [
    {
        Name: "rahul shende",
        UserName: "Rstar29",
        Email: "rahulshende785@gmail.com",
        Phone: "9422993386",

    },
    {
        Name: "rahul shende",
        UserName: "Rstar29",
        Email: "rahulshende785@gmail.com",
        Phone: "9422993386",

    },
    {
        Name: "rahul shende",
        UserName: "Rstar29",
        Email: "rahulshende785@gmail.com",
        Phone: "9422993386",

    },
    {
        Name: "rahul shende",
        UserName: "Rstar29",
        Email: "rahulshende785@gmail.com",
        Phone: "9422993386",

    },
    {
        Name: "rahul shende",
        UserName: "Rstar29",
        Email: "rahulshende785@gmail.com",
        Phone: "9422993386",

    },
    {
        Name: "rahul shende",
        UserName: "Rstar29",
        Email: "rahulshende785@gmail.com",
        Phone: "9422993386",

    },
    {
        Name: "rahul shende",
        UserName: "Rstar29",
        Email: "rahulshende785@gmail.com",
        Phone: "9422993386",

    },
    {
        Name: "rahul shende",
        UserName: "Rstar29",
        Email: "rahulshende785@gmail.com",
        Phone: "9422993386",

    },
    {
        Name: "rahul shende",
        UserName: "Rstar29",
        Email: "rahulshende785@gmail.com",
        Phone: "9422993386",

    },
    {
        Name: "rahul shende",
        UserName: "Rstar29",
        Email: "rahulshende785@gmail.com",
        Phone: "9422993386",

    },
    {
        Name: "rahul shende",
        UserName: "Rstar29",
        Email: "rahulshende785@gmail.com",
        Phone: "9422993386",

    }
]
const [isFundActive, setIsFundActive] = useState(true);
const navigate = useNavigate()
const addStore=()=>{
    navigate(`/app/addStores/${false}`);

}
const upadateStore=()=>{
    navigate(`/app/addStores/${true}`);
}

return(
    <div style={{ height: "600px", width: "95%", backgroundColor: "white", marginTop: "20px", marginLeft: "1%", borderRadius: "10px" }}>

    <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ display: "-webkit-inline-flex", marginLeft: "31px", marginTop: "19px", fontFamily: 'Poppins', fontSize: "32px", fontFamily: 'Poppins', fontSize: 30,fontWeight:"500" }}>STORES</h1>
        <div style={{ display: "-webkit-inline-flex", flexDirection: "row", marginRight: "31px" }}>
            <img src={Add} onClick={addStore} style={{ marginTop: "8%", paddingRight: "10px" }} />
            <img src={More} />
        </div>

    </div>

    <>
        {isFundActive === true ? (
            <>
                <div style={{ marginTop: "10px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
                    <Paper sx={{ width: "100%", overflow: "hidden" }}>
                        <TableContainer component={Paper} sx={{ maxHeight: 630 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>checked</TableCell>
                                        <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>Name</TableCell>
                                        <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>User Name</TableCell>
                                        <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>Phone</TableCell>
                                        <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>Email</TableCell>
                                        <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {FiltredData.map((step, ind) => (
                                        <TableRow
                                            sx={{  borderRadius: "10px" }} key={ind}
                                        >
                                            <TableCell align="center">
                                                <Checkbox
                                                    name={step.Name}
                                                    value={step.Name}
                                                    inputProps={{ "aria-label": "controlled" }}
                                                />
                                            </TableCell>
                                            <TableCell align="center">{step.Name}</TableCell>
                                            <TableCell align="center">{step.UserName}</TableCell>
                                            <TableCell align="center">{step.Phone}</TableCell>
                                            <TableCell align="center">{step.Email}</TableCell>
                                            <TableCell align="center"><CloseIcon sx={{ color: 'red' }} /><CreateTwoToneIcon onClick={upadateStore} sx={{ color: 'black',paddingLeft:"30px" }} /></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                      
                    </Paper>
                </div>
            </>
        ) : (
            <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                        <div>
                            {/* <img src={defaultIMG} /> */}
                        </div>
                        <h1>No User</h1>
                    </div>
                </div>
            </>
        )}
    </>

</div>
)}

export default Stores;
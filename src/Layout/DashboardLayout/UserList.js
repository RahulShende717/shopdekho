import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { setHeader } from "../../ReduxStore/HeaderReducer";
import Add from "../../../src/Images/ADD.svg";
import More from "../../../src/Images/More.svg";
import CloseIcon from '@mui/icons-material/Close';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import TablePagination from '@mui/material/TablePagination';
import { useNavigate } from "react-router-dom"
import axios from "axios";


const UserList = () => {

    const [UserListData, setUserListData]= useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("setHeaderFun called..............")
        dispatch(setHeader({ headerTag: "User Management" }))  
      }, [])

  useEffect ( () => {
    getUsers()
  },[])
   

const getUsers = async()=>{
        try {           
            const response = await axios.get(`http://localhost:30001/users`); 
            console.log("Response From Api......",response.data);
            if(response.data)
            {
                setUserListData(response.data);
            }
        } catch (error) {
            console.log(error)
        }
    
}

    
    const [isFundActive, setIsFundActive] = useState(true);
    const navigate = useNavigate();

    const rahul="Rstar29"
    
    const addUsers=()=>{
        navigate(`/app/addUsers/${false}`);
    }

    const upadateUser=(id)=>{
        console.log("---------------------------------",id);
        navigate(`/app/addUsers/${id}`);
    }





    const deleteUser= async (id)=>{
        console.log(".......................................",id) 
    try {
        const response = await axios.delete(`http://localhost:30001/users/${id}`)
        if(response.data){
            console.log("users data deleted succesful.....",response.data)
        }
    } catch (error) {
        console.log(error)
    }












    }


    return (
        <div style={{ height: "600px", width: "95%", backgroundColor: "white", marginTop: "20px", marginLeft: "1%", borderRadius: "10px" }}>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ display: "-webkit-inline-flex", marginLeft: "31px", marginTop: "19px", fontFamily: 'Poppins', fontSize: 30,fontWeight:"500"}}>USERS</p>
                <div style={{ display: "-webkit-inline-flex", flexDirection: "row", marginRight: "31px" }}>
                    <img src={Add} onClick={addUsers} style={{ marginTop: "8%", paddingRight: "10px" }} />
                    <img src={More} />
                </div>

            </div>

            <>
                {isFundActive === true ? (
                    <>
                        <div style={{ marginTop: "10px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
                            <Paper sx={{ width: "100%", overflow: "hidden"  }}>
                                <TableContainer component={Paper} sx={{ maxHeight: 630}}>
                                    <Table stickyHeader aria-label="sticky table" >
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300",backgroundColor:"rgba(186,120,203,0.8701855742296919) " }}>Check</TableCell>
                                                <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>Name</TableCell>
                                                <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300",backgroundColor:"rgba(186,120,203,0.8701855742296919) " }}>User Name</TableCell>
                                                <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>Phone</TableCell>
                                                <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>Email</TableCell>
                                                <TableCell align="center" style={{ fontFamily: "poppins",fontSize:18, fontWeight:"300" ,backgroundColor:"rgba(186,120,203,0.8701855742296919) "}}>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody >
                                            {UserListData.map((step, ind) => (
                                                <TableRow
                                                key={step._id}
                                                sx={{ borderRadius:'80px' ,"&:hover": { bgcolor:"rgba(186,120,203,0.5701855742296919) " , scale:'101%' , borderRadius:'8px'} }} key={ind}
                                                >
                                                    <TableCell align="center" >
                                                        <Checkbox
                                                            name={step.Name}
                                                            value={step.Name}
                                                            inputProps={{ "aria-label": "controlled" }}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="center">{step.firstname}</TableCell>
                                                    <TableCell align="center">{step.username}</TableCell>
                                                    <TableCell align="center">{step.phone}</TableCell>
                                                    <TableCell align="center">{step.email}</TableCell>
                                                    <TableCell align="center"><CloseIcon  onClick={()=>deleteUser(step._id)} sx={{ color: 'red' }} /><CreateTwoToneIcon onClick={() => upadateUser(step._id)} sx={{ color: 'black',paddingLeft:"30px" }} /></TableCell>
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
    )
}

export default UserList;
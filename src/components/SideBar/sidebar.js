

import React, { PureComponent, useState, useEffect } from 'react';
import Container from "@mui/material/Container";
import "./sidebar.css"
import { Button } from "@mui/material";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
function SideBar() {
    const [userdata,setuserdata]=useState([]);


    useEffect(() => {
        const getUsers = async () => {
          const users = await axios.get("http://localhost:8000/data");
          setuserdata(users.data);
        };
        getUsers();
      }, []);

  return (
    <Container
        className="side"
    >
    {
        userdata.map(key => {
            return (
                <div key={key.id}>
                    <img src={key.image}  style={{width:"200px"}}/>
                <h1>{key.title}</h1>
                <div style={{marginLeft:"auto", marginRight:"auto" , width:"250px"}}>{key.subtitle}</div>
                <Card sx={{ minWidth: 275 , marginTop:"50px"}}>
                             <CardContent>
                {
                key.tags.map(tag =>{
                    return(
                       
                    <Button style={{color:"black", borderColor:"black" , margin:"10px"}} variant="outlined" >{tag}</Button>
                   
                    
                )})
                
                }
                </CardContent>
                    </Card>
                </div>
            )
        })
    }
    </Container>
  );
}

export default SideBar;
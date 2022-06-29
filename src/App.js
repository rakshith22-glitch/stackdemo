import React, { useMemo, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Graph from "./components/Graph/graph";
import SideBar from "./components/SideBar/sidebar";
import TableData from "./components/TableData/table";
import NavBar from "./components/NavBar/nav";
import Container from "@mui/material/Container";
import './App.css';

function App() {
  return (
    
    <div >
      <NavBar/>
    <div className="container">
    <div className="fixed" style={{margin:"20px"}}><SideBar/></ div>
    <div className="flex-item">
      <div style={{margin:"50px"}}><Graph/></div>
      <div> <TableData/></div>
      </div>
      </ div>
    </div>
  );
}

export default App;

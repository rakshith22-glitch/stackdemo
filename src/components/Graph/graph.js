import { Container } from '@mui/system';
import React, { PureComponent, useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import SideData from "../../stackline_frontend_assessment_data_2021.json";
import "./graph.css"
import axios from 'axios';

function Graph() {

    const [ userdata,setuserdata]=useState([]);
    useEffect(() => {
        axios.get('https://stacklinebackend.herokuapp.com/data', {
          })
          .then(function (response) {
            console.log(response);
            setuserdata(response.data)
           
          })

        }, [])


    

    return (
        
        <div    className="side" style={{textAlign:"center"}}>
            <p style={{textAlign:"left", margin:"30px", fontSize:"32px"}}> Retails Sales vs Wholesale Sales </p>
        {
        userdata.map(data => {
            return (
            <div style={{marginTop:"50px"}} key={data.sales}>
            <LineChart
            width={1400}
            height={300}
            data={data.sales}  
         
            >
          
          <Tooltip/>
          <Legend />
          <Line
            type="monotone"
            dataKey="wholesaleSales"
            stroke="pink" strokeWidth="5" dot={{fill:"pink",stroke:"pink",strokeWidth: 2,r:5}} activeDot={{fill:"pink",stroke:"pink",strokeWidth: 5,r:10}}
          />
          <Line type="monotone" dataKey="retailSales"  stroke="#8884d8" strokeWidth="5" dot={{fill:"#8884d8",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#8884d8",stroke:"#8884d8",strokeWidth: 5,r:10}} />
          <XAxis dataKey="weekEnding"  />
             
        </LineChart>
        <hr></hr>
       <div className='box'>
        <div className="child">JAN</div>
        <div className="child">FEB</div>
        <div className="child">MAR</div>
        <div className="child">APR</div>
        <div className="child">MAY</div>
        <div className="child">JUN</div>
        <div className="child">JUL</div>
        <div className="child">AUG</div>
        <div className="child">OCT</div>
        <div className="child">NOV</div>
        <div className="child">DEV</div>
        
       </div>
        </div>
         )}
        )
            }
        </div>
      );
}

export default Graph;
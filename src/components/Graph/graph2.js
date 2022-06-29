import { Container } from '@mui/system';
import React, { PureComponent, useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import SideData from "../../stackline_frontend_assessment_data_2021.json";
import "./graph.css"
import ApexCharts from 'apexcharts';
import axios from 'axios';

function Graph2() {

    const [ userdata,setuserdata]=useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/data', {
          })
          .then(function (response) {
            console.log(response);
            setuserdata(response.data)
          })
        }, [])

    return (
        
        <div    className="side" style={{textAlign:"center"}}>
            <h2 style={{textAlign:"left", margin:"30px"}}> Retails Sales vs Wholesale Sales </h2>
        {
        userdata.map(data => {
            return (
            <div key={data.sales}>
            <LineChart
            width={1200}
            height={300}
            data={data.sales}  
            margin={{
                top: 50,
                right: 30,
                left: 20,
                bottom: 5,
              }}  
            >
          <XAxis tick={{fill:"#fff"}}  dataKey="weekEnding" style={{marginTop:"50px"}} />
          <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
          <Legend />
          <Line
            type="monotone"
            dataKey="wholesaleSales"
            stroke="lightblue"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="retailSales"  stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}}/>

             
        </LineChart>
       
        </div>
         )}
        )
            }
        </div>
      );
}

export default Graph2;
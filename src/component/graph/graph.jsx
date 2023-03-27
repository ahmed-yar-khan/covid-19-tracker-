import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./graph.css"
export const MylineChart = (props) => {
  console.log(props.coviddata)
  const covdata = [
  
    {
      "name": "recovered",
      "Totalcase":parseInt(props.coviddata["Total Recovered_text"]),
      "Deathcase": parseInt(props.coviddata["Total Deaths_text"]),
    },
    {
      "name": "recovered",
      "Totalcase":100,
      "Deathcase": 20,
    },
 
    {
       "name": "recovered",
      "Totalcase":parseInt(props.coviddata["Total Recovered_text"]),
      "Deathcase": parseInt(props.coviddata["Total Deaths_text"]),
    },
  ];
  
  return <>
  {/* <div className="chart-container"> */}
  {/* <ResponsiveContainer width= "50vw" height={300} > */}
     <LineChart width={500} height={300} data={covdata}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Totalcase" stroke="#8884d8" />
    <Line type="monotone" dataKey="Deathcase" stroke="#82ca9d" />
  </LineChart>
  {/* </ResponsiveContainer> */}
  {/* </div > */}
  </>

}; 
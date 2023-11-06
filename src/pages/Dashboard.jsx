import React from 'react'
import "../componentStyle/dashStyle.css"
import { Pie } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement,Tooltip,Legend} from 'chart.js'
import { BiSolidPlaneAlt } from "react-icons/bi";;
import { FaRegCalendarAlt, FaEnvelope } from "react-icons/fa";;
import { AiOutlineUsergroupDelete } from "react-icons/ai";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  // Tooltip,
  // Legend,
  
  ResponsiveContainer,
} from "recharts";
import { mycontext } from '../components/context/ContextProvider';
ChartJS.register(ArcElement, Tooltip, Legend);
function Dashboard() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const { card_data, userData, user_data } = mycontext();
  const pieData = {
    labels: ["Loss", "Income", "Expenses"],
    datasets: [
      {
        data: [20, 50, 30],
        backgroundColor: ["#FF0938", "#84E2BB", "#FCCA51"],
      },
    ],
  };
  const options ={}

  return (
    <div className="home-dash">
      <div className="dash-statistic-card">
        <div className="tour-numbers">
          
          <BiSolidPlaneAlt style={{ marginRight: "10px" }} />
          <h3>{card_data.length}</h3><br />
          <p>tours</p>{" "}
        </div>
        <div className="booking-numbers">
          <FaRegCalendarAlt style={{ marginRight: "10px" }} />
          <h3>100</h3>
          booking
        </div>
        <div className="user-numbers">
          <AiOutlineUsergroupDelete style={{ marginRight: "10px" }} />
          <h3>{user_data.length}</h3>
          users
        </div>
        <div className="contacts-number">
          {" "}
          <FaEnvelope style={{ marginRight: "10px" }} />
          <h3>100</h3>
          Messages
        </div>
      </div>
      <div className="dash-chats">
        <div className="lineChart">
          <div className="lineChart-heading">
            <label htmlFor="">Rate</label>
            <button>Filter</button>
          </div>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="circle-chart">
          <div className="lineChart-heading">
            <label htmlFor="">Income HighLight </label>
            <button>Filter</button>
          </div>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "row",
              gap: "100px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pie
              data={pieData}
              options={options}
              style={{ width: "20%" }}
            ></Pie>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
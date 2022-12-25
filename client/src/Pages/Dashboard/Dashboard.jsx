import React from "react";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTask ,Logout ,RemoveAllTask} from "../../store/authSlice";
import "./Dashboard.css";
const Dashboard = () => {
  const { user } = useSelector((state) => state.userData.data);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [limit,setLimit] = useState(false);

  

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  

  const addTask = () => {
    if(user.Tasks.length === 5){
      setLimit(true);
      setTask("")
      return;
    }
    dispatch(AddTask(user._id, task));
    setTask("")
  }

  const LogoutUser = ()=>{
    dispatch(Logout());
  }

  const clearAll  = ()=>{
     dispatch(RemoveAllTask(user._id));
     setLimit(false);
  }

  const date = new Date();

  return (
    <div className="Dashboard">
      <div className="container">
        <div className="contentHolder">
          <button  className="clearAll" onClick={clearAll}>Clear Tasks</button>
          <p className="hello">Hello</p>
          <p className="name">{user.username}</p>
          <p className="wish">Good to see you here !</p>
          <h2 className="date">
            Tasks for {date.getDate()} {monthNames[date.getMonth()]},{" "}
            {date.getFullYear()} :
          </h2>
          <div className="tasks">
            <ul>
              {user.Tasks.map((task) => {
                return (
                  <>
                    <li>{task}</li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
          {limit && <h4 style={{color:"red" , alignSelf:"center"}}>Daily Limit exceed !</h4>} 
          <div className="input">
            <input
              type="text"
              placeholder="eg. need to finish my assigment..."
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
          </div>
          <button className="add" onClick={addTask} value="">
            Add New Task
          </button>
          <button className="logout" onClick={LogoutUser}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

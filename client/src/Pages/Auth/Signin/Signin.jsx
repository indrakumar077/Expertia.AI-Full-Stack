import React from "react";
import { useState } from "react";
import "./Signin.css";
import { useDispatch } from "react-redux";
import { loginFetch } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const singinTo = () => {
    dispatch(loginFetch(user));
  };

  return (
    <div className="Auth">
      <div className="login">
        <div className="heading">
          <h4>Welcome !</h4>
          <p>Sign in to Expertia.AI</p>
        </div>

        <div className="form">
          <div className="head">
            <p className="text">Username</p>
          </div>

          <div className="inp">
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="head">
            <p className="text">Password</p>
          </div>

          <div className="inp">
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="checkbox">
          <div style={{ display: "flex" }}>
            <input type="checkbox" name="" id="" />
            <p>Remember me</p>
          </div>

          <p style={{ textDecoration: "none", color: "black" }}>
            Forgot Password ?
          </p>
        </div>

        <div className="btn">
          <button onClick={singinTo}>Login</button>
        </div>

        <div className="goto">
          <p>Dont have account ?</p>
          <h5 onClick={() => navigate("/signup")}>Register</h5>
        </div>
      </div>

      <div className="logo">
        <img
          src="WhatsApp_Image_2022-12-24_at_10.16.09-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Signin;

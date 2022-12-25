import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupFetch } from "../../../store/authSlice";
import "./Signup.css";
const Signup = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signupTo = () => {
    if (user.password === user.confirmpassword) {
      dispatch(signupFetch(user));
    }
  };

  return (
    <div className="Auth">
      <div className="Singup">
        <div className="heading">
          <h4>Welcome !</h4>
          <p>Signup in to Expertia.AI</p>
        </div>

        <div className="form">
          <div className="head">
            <p className="text">Email</p>
          </div>
          <div className="inp">
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="head">
            <p className="text">Username</p>
          </div>
          <div className="inp">
            <input
              type="text"
              placeholder="Enter your username"
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
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="head">
            <p className="text">Confirm password</p>
          </div>
          <div className="inp">
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmpassword"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="btn">
          <button onClick={signupTo}>Singup</button>
        </div>

        <div className="goto">
          <p>have account ?</p>
          <h5 onClick={() => navigate("/signin")}>Login</h5>
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

export default Signup;

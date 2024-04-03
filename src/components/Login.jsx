import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const data = JSON.parse(localStorage.getItem("users")) || [];
  console.log(data);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
    const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLogin = data.find(
      (ele) =>
        ele.email === loginData.email && ele.password === loginData.password
      );
      if (!isLogin) {
         return alert("Invalid Credentials");  
      }
      alert("Logged In Successfully");
      navigate('/users')
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-head">Login</h2>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email Address *"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password *"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <div className="btn-grup">
          <button className="btn">LOGIN</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

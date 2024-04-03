import React, {useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [userInput, setUserInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  const { firstname, lastname, email, phonenumber, password } = userInput;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    localStorage.setItem("users", JSON.stringify([...usersData, userInput]));
    alert("Registered Successfully");
    navigate("/login");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-head">Register</h2>
        <div className="user-name form-group">
          <input
            type="text"
            name="firstname"
            className="form-control"
            placeholder="Firstname *"
            value={firstname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            className="form-control"
            placeholder="Lastname *"
            value={lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email Address *"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="phonenumber"
            className="form-control"
            placeholder="Phonenumber *"
            value={phonenumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password *"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="btn-grup">
          <button className="btn">REGISTER</button>
        </div>
      </form>
    </div>
  );
}

export default Register;

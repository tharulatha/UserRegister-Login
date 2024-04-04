import React from "react";
import { useNavigate } from "react-router-dom";

function UserTable() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const navigate = useNavigate();
  const handleLogout = () => {
    alert("Logout Successfully");
    navigate('/login');
  }
  return (
    <div className="list-container" >
      <div className="btn-group">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      <div>
        <h2 className="head">Users List</h2>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Phonenumber</th>
          </tr>
        </thead>
        <tbody>
          {users.map((list, i) => {
            return (
              <tr key={i}>
                <td>{list.firstname}</td>
                <td>{list.lastname}</td>
                <td>{list.email}</td>
                <td>{list.phonenumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default UserTable;

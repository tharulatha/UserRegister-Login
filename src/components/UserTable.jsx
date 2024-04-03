import React from "react";

function UserTable() {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  return (
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
  );
}

export default UserTable;

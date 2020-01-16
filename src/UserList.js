import React from "react";
import "./App.css";
import data from "./data.js";

const { users } = data;

function UserList() {
  return (
    <div className="UserList">
      <h1>User List</h1>
      <ul>
        {data.users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default UserList;

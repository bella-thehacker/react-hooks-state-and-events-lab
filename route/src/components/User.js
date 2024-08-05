import React from "react";

function User({ user }) {
  return (
    <div>
      <h1 className="Name"> Name: {user.name}</h1>
      <h3 className="Email">Email: {user.email}</h3>
    </div>
  );
}

export default User;

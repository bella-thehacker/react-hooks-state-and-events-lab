import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
  });

  console.log(formData);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((user) => console.log(user))

    
  };


  return (
    <div className="form-wrapper">
      <div>
        <h1>Post User</h1>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleOnChange}
          ></input>
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={formData.username}
            onChange={handleOnChange}
          ></input>
        </div>

        <div>
          <input id="input-button" type="submit"></input>
        </div>
      </form>
    </div>
  );
}

export default Form;

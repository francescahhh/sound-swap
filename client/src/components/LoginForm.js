import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupFormLoginForm.css";

const LoginForm = ({ setCurrentUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log(user);
        setCurrentUser(user);
        setFormData({
          username: "",
          password: "",
        });
      });
  }

  return (
    <div className="user-form">
      <h1>Please Log In</h1>
      <p>Start swapping sounds!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />

      <Link to="/signup" replace>
        Don't have an account? Sign Up!
      </Link>
    </div>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupFormLoginForm.css";

const SignupForm = () => {
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

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log(user);
        setFormData({
          username: "",
          password: "",
        });
      });
  }

  return (
    <div className="user-form">
      <h1>Create a SoundSwap Account</h1>
      <p>SoundSwap allows users to curate playlists to share with friends—no matter their preferred streaming service!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username-signup-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <br />
      </form>
      <Link to="/" replace>
        Have an account already? Log in!
      </Link>
    </div>
  );
};

export default SignupForm;

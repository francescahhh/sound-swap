import React from "react";

const UserDisplay = ({ setCurrentUser }) => {
  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    console.log("logged out");
    setCurrentUser(null);
  };

  return (
    <div>
      <p>Display Username Here</p>
      <button className="button" id="user-logout-button" onClick={handleLogout}>
        User Logout
      </button>
    </div>
  );
};
export default UserDisplay;

//handle user login via separate window

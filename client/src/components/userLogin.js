import React from 'react';

const UserLoginButton = () => {
 return (
  <button className="button" id="user-login-button" onClick={UserLoginButton}>User Login</button>
 )
};
  export default UserLoginButton;

//This would probably be better suited as a form--need to find a way to conitionally render the form if the user is not logged in and then display the username and a logout button when the user is logged in. 
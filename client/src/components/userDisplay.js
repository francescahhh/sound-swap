import React from 'react';

const UserDisplay = () => {
 return (
   <div>
  <p>Display Username Here</p>
  <button className="button" id="user-logout-button" onClick={UserDisplay}>User Logout</button>
  </div>
 )
};
  export default UserDisplay;

//handle user login via separate window
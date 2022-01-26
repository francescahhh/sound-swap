import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoggedIn from "./components/LoggedIn";
import LoggedOut from "./components/LoggedOut";
import Navbar from "./components/NavBar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  console.log(currentUser);
  console.log(currentUser);
  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

  if (!authenticated) {
    return <div></div>;
  }
  return (
    <div>
      <Navbar />

      <Router>
        {currentUser ? (
          <LoggedIn setCurrentUser={setCurrentUser} currentUser={currentUser} />
        ) : (
          <LoggedOut setCurrentUser={setCurrentUser} />
        )}
      </Router>
    </div>
  );
}

export default App;

// import "./App.css";
// import { useState, useEffect } from "react";
// import Header from "./components/header";
// import SearchBar from "./components/searchBar";
// import NewPlaylistButton from "./components/newPlaylistButton";
// import PlaylistContainer from "./components/playlistContainer";
// import UserDisplay from "./components/userDisplay";
// // import LoginForm from "./components/loginInfo/loginform";
// // import SignupForm from "./components/loginInfo/signup";

// function App() {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [authenticated, setAuthenticated] = useState(false);
//   console.log(currentUser);
//   useEffect(() => {
//     fetch("/me", {
//       credentials: "include",
//     }).then((res) => {
//       if (res.ok) {
//         res.json().then((user) => {
//           setCurrentUser(user);
//           setAuthenticated(true);
//         });
//       } else {
//         setAuthenticated(true);
//       }
//     });
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header />
//       </header>
//       <div>
//         <NewPlaylistButton />
//         <UserDisplay />
//         <SearchBar />
//         <PlaylistContainer />
//         {/* <LoginForm />
//         <SignupForm /> */}
//       </div>
//     </div>
//   );
// }

// export default App;

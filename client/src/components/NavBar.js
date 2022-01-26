import { React, useState } from "react";
import "./NavBar.css";
import { IconContext } from "react-icons/lib";
import { FaTools, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { SiAddthis } from "react-icons/si";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: "#3D5A80", size: 40 }}>
      <div className="navbar">
        <div className="navbar-container container">
          <div className="navbar-logo" onClick={closeMobileMenu}>
            <MdOutlineLibraryMusic />
            SoundSwap
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div className="nav-links" onClick={closeMobileMenu}>
                Playlist
                <div className="nav-plus">
                  <SiAddthis size={20} />
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-links" onClick={closeMobileMenu}>
                Profile
              </div>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;

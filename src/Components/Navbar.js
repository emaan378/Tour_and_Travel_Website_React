import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./Menuitems";

function Navbar() {
    const [clicked, setClicked] = useState(false); 
    
    const handleClick=()=>{
        setClicked(!clicked);
    }

    return (
        <nav className="navbaritems">
            <h1 className="navbar-logo">Packngo</h1>

            {/* ✅ Hamburger menu icon */}
            <div className="menu-icons"
                onClick={handleClick} // ✅ click pe tog gle
            >
                <i  className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {
                    MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
                <button>Sign Up</button>
            </ul>
        </nav>
    )
}

export default Navbar;
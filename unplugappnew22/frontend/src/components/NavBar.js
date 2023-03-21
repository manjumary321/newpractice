import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import accurate from '../images/accurateonline.png';
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from 'react-icons/ai';

function NavBar() {
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const navigate = useNavigate();
    const handleContact =(e)=>{
          navigate('/Contact');
    }
    const handleCuslogin =(e)=>{
          navigate('/Customlogin');
    }
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-container-col1">
                        <NavLink exact to="/" className="nav-logo">
                            {/* CodeBucks */}
                            <img src={accurate} style={{ height: 100, width: 100 }} />
                            {/* <i className="fas fa-code"></i> */}
                        </NavLink>
                        <div className="Headerbar_col1_col2" >
                            <h1>ACCURATE ONLINE</h1>
                            <span>ERP SOFTWARE</span>
                        </div>
                    </div>

                    <div className={click ? "nav-menu active" : "nav-menu"}>
                        {/* <div className="nav-menu-col1"> */}
                            <div className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Home
                                </NavLink>
                            </div>
                            <div className="nav-item">
                                <NavLink
                                    exact
                                    to="/about"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    ABOUT US
                                </NavLink>
                            </div>
                            <div className="nav-item">
                                <NavLink
                                    exact
                                    to="/accurateerp"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    ACCURATE ERP
                                </NavLink>
                            </div>
                            <div className="nav-item">
                                <NavLink
                                    exact
                                    to="/softwarecar"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    RENT-A-CAR SOFTWARE
                                </NavLink>
                            </div>
                            <div className="nav-item">
                                <NavLink
                                    exact
                                    to="/networking"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    NETWORKING SERVICES
                                </NavLink>
                            </div>
                            <div className="nav-item">
                                <NavLink
                                    exact
                                    to="/linux"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    LINUX SOLUTIONS
                                </NavLink>
                            </div>
                        {/* </div> */}
                        <div className="nav-menu-col2">
                            <button onClick={(e) => {handleContact(e.target.value)}}>Contact Us</button>
                            <button onClick={(e) => {handleCuslogin(e.target.value)}}>Customer Login</button>
                            {/* <button></button> */}
                        </div>
                    </div>

                    {/* <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div> */}
                    <div className="nav-icon" onClick={handleClick}>
                        {click ?
                            <AiOutlineClose color="grey" size="20px" /> :
                            <GiHamburgerMenu color="grey" size="20" />
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;

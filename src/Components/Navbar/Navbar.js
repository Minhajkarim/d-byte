import {React, useState} from "react";
import "./Navbar.css"

import { Squeeze as Hamburger } from 'hamburger-react'

import Logo from './Logo.png'
import Link from '@material-ui/core/Link'




const Navbar = (props) => {
    const [classes, setClasses] = useState('menu-container');

    return (
        <div className="body">
            <div className="nav-small">
                <div className={classes}>
                    <Hamburger size="28" color="#EBA243" onToggle={() => setClasses(classes === "menu-container" ? "menu-container change" : "menu-container")}/>
                    <div className="navigation">
                        <div className="dropdown">
                           <Link href="#">Home</Link>
                            <a href="#Services">Services</a>
                            <a href="#team">Our Team</a>
                            <a href="#contact">Contact Us</a>
                        </div>
                    </div>
                </div>
                <a href="/" className="logo">
                    <img className="logo-icon" src={Logo} alt=""/>
                    <div className="logo-text">
                        <span className="small">Design Bytes</span>
                        <span className="big">International</span>
                    </div>
                </a>

            </div>



            <div className="nav-big">
                <a href="/" className="logo">
                    <img className="logo-icon" src={Logo} alt=""/>
                    <div className="logo-text">
                        <span className="small">Design Bytes</span>
                        <span className="big">International</span>
                    </div>
                </a>

                <div className="navigation">
                    <Link href="#">Home</Link>
                    <Link href="#Services">Services</Link>
                    <a href="#team">Our Team</a>
                    <a href="#contact">Contact</a>
                </div>

            </div>
        </div>
    )
}
export default Navbar;
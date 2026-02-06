import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {

    const [toggle, setToggle] = useState(true);

    return(
        <>
            <header className="full_grid">
            <Link to="/"><img id="logo" className="col-span-1" src="../images/logo.svg" alt="logo" /></Link>
            <nav id="main_nav">
                <ul>
                    <li className="selected"><Link to="/" >Home</Link></li>
                    <li><Link to="/furniture">Furniture</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <svg id="menu" onClick={() => setToggle(!toggle)} xmlns="http://www.w3.org/2000/svg"
                width="0.522222in" height="0.2in"
                viewBox="0 0 47 18">
                <path id="Imported Path #2"
                fill="none" stroke="#F4F4F9" strokeWidth="2"
                d="M 0.00,0.93
                C 0.00,0.93 47.00,0.93 47.00,0.93M 0.00,9.01
                C 0.00,9.01 47.00,9.01 47.00,9.01M 0.00,17.08
                C 0.00,17.08 47.00,17.08 47.00,17.08" />
            </svg>
        </header>   
            { !toggle ? <MobileMenu /> : '' }
        </>
    )
}
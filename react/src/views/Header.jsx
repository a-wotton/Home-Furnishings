export default function Header() {
    return(
        <>
            <header className="full_grid">
            <a href="index.html"><img id="logo" className="col-span-1" src="../images/logo.svg" alt="logo" /></a>
            <nav id="main_nav">
                <ul>
                    <li className="selected"><a href="index.html">Home</a></li>
                    <li><a href="furniture.html">Furniture</a></li>
                    <li><a href="about.html">About</a></li>
                </ul>
            </nav>
            <svg id="menu" xmlns="http://www.w3.org/2000/svg"
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
            <nav className="full_grid">
                <ul id="mobile_menu" className="toggled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Furniture</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}
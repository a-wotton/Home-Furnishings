import { Link } from "react-router-dom"
export default function Footer() {
    return(
        <>
        <footer className="full_grid">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/furniture">Furniture</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </footer>
        </>
    )
}
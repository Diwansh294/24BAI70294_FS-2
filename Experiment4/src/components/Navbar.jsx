import {Link} from "react-router-dom"

function Navbar(){
    return (
        <>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
        </>
    )
}

export default Navbar;
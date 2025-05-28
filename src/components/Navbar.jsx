import CartWidget from "./CartWidget"
import { RiCandleLine } from "react-icons/ri";
import { PiNotebookDuotone } from "react-icons/pi";
import { PiTeaBag } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return(
        <nav className="navbar">
            <div className="navbarLogoCart-Container">
                <NavLink to={'/'}>
                    <img className="logo" src="../SlowLivingLogo.png" alt="" />
                </NavLink>
                <p className="navbarTitle">The Slow Living Way</p>
                <NavLink to={'/cart'}>
                    <CartWidget />
                </NavLink>
            </div>
            <div className="navbarLinks-Container">
                <NavLink className="navLink" to={"/category/Aromatherapy and Well-being"}><RiCandleLine /> Aromatherapy and Well-being</NavLink>
                <NavLink className="navLink" to={"/category/Journaling and Creativity"}><PiNotebookDuotone /> Journaling and Creativity</NavLink>
                <NavLink className="navLink" to={"/category/Teas and Infusers"}><PiTeaBag /> Teas and Infusers</NavLink>
            </div>
        </nav>
    )   

}

export default Navbar
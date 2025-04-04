import CartWidget from "./CartWidget"
import { RiCandleLine } from "react-icons/ri";
import { PiNotebookDuotone } from "react-icons/pi";
import { PiTeaBag } from "react-icons/pi";

const Navbar = () => {

    return(
        <nav className="navbar">
            <div className="navbarLogoCart-Container">
                <a href="#">
                    <img className="logo" src="../SlowLivingLogo.png" alt="" />
                </a>
                <CartWidget />
            </div>
            <div className="navbarLinks-Container">
                <a className="navLink" href=""><RiCandleLine /> Aromatherapy and Well-being</a>
                <a className="navLink" href=""><PiNotebookDuotone /> Journaling and Creativity</a>
                <a className="navLink" href=""><PiTeaBag /> Teas and Infusers</a>
            </div>
        </nav>
    )

}

export default Navbar
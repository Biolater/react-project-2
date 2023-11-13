import navbarImg from "../images/navbarLogo.png";
import "./Header.css"

const Header = () => {
    return (
        <header className="main__header">
            <div className="container">
                <nav className="navbar">
                    <div className="navbar__logo">
                        <img src={navbarImg} alt="" />
                    </div>
                </nav>
            </div>
        </header>
    )
};



export default Header;
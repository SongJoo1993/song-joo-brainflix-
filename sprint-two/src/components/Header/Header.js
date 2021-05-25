import { Link } from 'react-router-dom';
import './Header.scss';
import userImage from "../../assets/Images/Mohan-muruge.jpg";
import logo from "../../assets/Logo/Logo-brainflix.svg";


function Header() {
    return (
        <header className="header">
            <nav className="header__navigation">
                <div className="header__list">
                    <Link to="/" className="header__logo-box">
                        <img src={logo} alt="Logo" className="header__logo"></img>
                    </Link>
                    <input className="header__search-bar" placeholder="        Search"></input>
                    <section className="header__video-upload">
                        <Link to="/uploadPage" className="header__upload-box">
                            <button className="header__upload-button">+ UPLOAD</button>
                        </Link>
                        <img src={userImage} alt="User" className="header__user-image"></img>
                    </section>
                </div>
            </nav>
        </header>
    )
}

export default Header;
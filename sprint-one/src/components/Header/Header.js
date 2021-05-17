import './Header.scss';
import userImage from "../../assets/Images/Mohan-muruge.jpg";
import logo from "../../assets/Logo/Logo-brainflix.svg";


function Header() {
    return (
        <header className="header">
            <nav className="header__navigation">
                <div className="header__list">
                    <img src={logo} alt="Logo" className="header__logo"></img>
                    <input className="header__search-bar" placeholder="&#128269; Search"></input>
                    <section className="header__video-upload">
                        <button className="header__upload-box">+ UPLOAD</button>
                        <img src={userImage} alt="User" className="header__user-image"></img>
                    </section>
                </div>
            </nav>
        </header>
    )
}

export default Header;
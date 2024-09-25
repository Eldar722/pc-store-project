import headerbutton from '../assets/image/menu-btn.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header class="header">
            <div class="container">
                <Link to="/categories" class="btn-category">
                    <img src={headerbutton} alt="Menu button" />
                </Link>
                <span class="name-of-store">PC STORE</span>
            </div>
        </header>
    );
}

export default Header;
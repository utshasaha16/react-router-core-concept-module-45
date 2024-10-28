import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/Users">Users</Link>
                <Link to="/posts">Posts</Link>
            </nav>
        </div>
    );
};

export default Header;
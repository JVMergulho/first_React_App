import { Link } from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1> Big Dive's Personal Blog </h1>
            <div id="links">
                <Link to="/">🏠Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
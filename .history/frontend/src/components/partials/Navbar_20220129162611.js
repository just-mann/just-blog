import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <div className='navbar'>
            <a href='/' className="my-logo">
                JustCode
            </a>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}
 
export default Navbar;
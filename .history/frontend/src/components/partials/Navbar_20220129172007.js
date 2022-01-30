import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <div className='navbar'>
            <a href='/' className="my-logo">
                JustCode
            </a>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    );
}
 
export default Navbar;
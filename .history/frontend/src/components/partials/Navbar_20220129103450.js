import './navbar.css';

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <a href='/' className="my-logo">
                <h2>JustCode</h2>
            </a>
            <div className="links">
                <a href="/">Home</a>
                <a href="/blogs">Blogs</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
}
 
export default Navbar;
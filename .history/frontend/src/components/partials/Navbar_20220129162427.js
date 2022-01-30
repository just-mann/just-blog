import 


const Navbar = () => {
    return ( 
        <div className='navbar'>
            <a href='/' className="my-logo">
                JustCode
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
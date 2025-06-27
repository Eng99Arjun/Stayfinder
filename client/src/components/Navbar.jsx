import React from 'react';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';



const Navbar = () => {

    const {navigate, user, setShowUserLogin, getBookingCount} = useAppContext();

    const logout = async () => {
    try {
        const { data } = await axios.get('/api/user/logout')
        if(data.success){
            toast.success(data.success);
            setUser(null);
            navigate('/');
        }
        else{
            toast.error(data.message);
        }
    } catch (error) {
        toast.error(error.message);
    }
}

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Listings', path: '/' },
        { name: 'Contact', path: '/' },
        { name: 'About', path: '/' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 bg-primary w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-primary-dull backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <span className={`text-4xl ${isScrolled ? "text-primary": "text-white"}`}>StayFinder</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-primary" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-primary" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-white px-3 rounded-full">
                    <input onChange={(e) => setSearchQuery(e.target.value)} className="py-1.5 w-full  outline-none placeholder-gray-200 text-white" type="text" placeholder="Search Listings" />
                     <img src='./src/assets/search_icon.svg' alt="search" className='w-4 h-4' />
                </div>

                    <div onClick={() =>navigate('/booking') } className="relative cursor-pointer">
                    <img src='/src/assets/N.png' alt="cart" className='w-6 opacity-80' />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getBookingCount()}</button>

                </div>

                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">

                {!user ? (<button onClick={() => {
                        setShowUserLogin(true);
                    }} className="bg-primary text-white border-2 border-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                        Login
                    </button>): ( 
                    <div className='relative group '>
                        <img src='./src/assets/profile_icon.svg' className='w-10' alt="" />
                        <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                            <li onClick={() => navigate("my-bookings") } className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Bookings</li>
                            <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>LogOut</li>
                        </ul>
                    </div>
                     )}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-primary text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-white transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    
                    {!user ? (<button className="bg-primary text-white px-8 py-2.5 rounded-full transition-all duration-500 border border-white">
                        Login
                    </button>) : (
                    <button onClick={logout} className="cursor-pointer px-8 py-2.5 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full border border-white text-sm">
                    Logout
                    </button>   
                    )}
                </div>
            </nav>
        </>
    );
}


export default Navbar;
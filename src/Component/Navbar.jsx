import React,{ useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    };
    return (
        <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
            <div>
                <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
            </div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
        </div>
    )
}

export default Navbar;
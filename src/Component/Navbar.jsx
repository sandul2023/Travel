import React,{ useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    };
    return (
        <></>
    )
}

export default Navbar;
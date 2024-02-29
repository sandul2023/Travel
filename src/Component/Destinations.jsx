import React from "react";
import Sigiriya from '../assets/Sigiriya.jpeg';
import Waterfall from '../assets/Waterfall.jpg';
import Ambuluwawa from '../assets/Ambuluwawa.jpeg';
import Arch from '../assets/9Arch.jpg';
import KeyWest from '../assets/keywest.jpg';

const  Destinations = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <h1> Populer Places</h1>
            <p className='py-4'>To Visit In Sri Lanka</p>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Sigiriya} alt="/"/>
                <img className='w-full h-full object-cover' src={Waterfall} alt="/"/>
                <img className='w-full h-full object-cover' src={Ambuluwawa} alt="/"/>
                <img className='w-full h-full object-cover' src={Arch} alt="/"/>
                <img className='w-full h-full object-cover' src={KeyWest} alt="/"/>
            </div>
        </div>
    )
}

export default Destinations
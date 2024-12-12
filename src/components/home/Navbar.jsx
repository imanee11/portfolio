import React from 'react';
import image from '../../constants/image';

const Navbar = () => {
    return (
        <>
        <nav className='bg-[#0c0e0e]'>
            {/* logo part */}
            <div className=''>
                <img src={image.logo} alt="" className='w-[5vw]'/>

            </div>
            <div></div>
            <div></div>

        </nav>
            
        </>


    );
};

export default Navbar;
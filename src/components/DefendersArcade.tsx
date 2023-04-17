import React from 'react'
import Image from "next/image";

import Navbar from './Navbar'
import arcade from '../../public/arcade.png'
function DefendersArcade() {
    return (
        <div className='h-screen bg-black relative'>
            <Navbar />
            <div className='h-[91%] lg:h-[85%]  2xl:h-[86%] flex justify-center items-end ' >
                <div className=' h-auto relative flex justify-center'>
                <Image
                    src={arcade}
                    alt="blyr-logo"
                    height={300}
                    width={700}
                />
               <div className='w-[83%] h-20 sm:h-28 absolute top-3 flex justify-center items-center text-white text-3xl sm:text-5xl font-bugfast'>
                Defenders Arcade
               </div>
               </div>
            </div>
        </div>
    )
}

export default DefendersArcade
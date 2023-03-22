import React from 'react'
import Image from "next/image";

import Navbar from './Navbar'
import arcade from '../../public/arcade.png'
function DefendersArcade() {
    return (
        <div className='h-screen bg-black relative'>
            <Navbar />
            <div className='h-5/6 flex justify-center items-end' >
                <Image
                    src={arcade}
                    alt="blyr-logo"
                    height={300}
                    width={700}
                />
            </div>
        </div>
    )
}

export default DefendersArcade
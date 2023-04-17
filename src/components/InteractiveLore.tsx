import React from 'react'
import Navbar from './Navbar'
import Image from "next/image";

import InteractiveLoreBg from '../../public/InteractiveLoreBg.png'
import retroScifiPc from '../../public/retro-scifi-pc.png';
export default function InteractiveLore() {
  return (
    <div className='h-screen w-full '
      style={{
        background: `url(${InteractiveLoreBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <Navbar />
      <div className='h-[90%] lg:h-[84%] 2xl:h-[86%] flex justify-center items-end' >
        <Image
          className='h-2/4 w-full sm:w-3/4 sm:h-3/4 lg:w-3/5 xl:h-5/6  2xl:w-3/6 relative'
          src={retroScifiPc}
          alt="blyr-logo"
          height={200}
          width={200}
        />
        <div className='text-xl ml-16 sm:bottom-80 sm:mb-5 lg:ml-28 sm:ml-20 xl:bottom-96 2xl:mb-14 xl:mb-0 xl:ml-24 sm:text-2xl  2xl:ml-32 lg:text-3xl 2xl:text-4xl text-white  bottom-60 absolute'>Plese insert a disk</div>
      </div>
    </div>
  )
}

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
      <div className='h-5/6 flex justify-center items-end relative' >

        <Image
          className='h-2/4 w-full sm:w-3/4 sm:h-3/4 lg:w-3/5 xl:h-5/6  2xl:w-3/6'
          src={retroScifiPc}
          alt="blyr-logo"
          height={200}
          width={200}
        />
      </div>
    </div>
  )
}

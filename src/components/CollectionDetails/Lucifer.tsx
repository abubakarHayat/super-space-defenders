import React, { useState } from 'react'
import Image from "next/image";
import bg from "../../../public/Rectangle12.png";

function Lucifer() {
  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <div className=" w-12/12 h-full flex justify-center items-start mt-14 2xl:mt-9">
        <div className='w-4/5 h-[78%] md:h-[75%] lg:h-[70%] mb-12 flex justify-end z-30 '>

          <div className='lg:w-[70%] lg:2/4 xl:w-[60%] bg-black bg-opacity-30 h-full overflow-y-scroll  scroll-bar flex flex-col justify-between'>
            <div className='mb-5 md:mb-2 2xl:mb-7 md:h-[95%] lg:h-auto 2xl:h-[95%] flex flex-col justify-between'>
              <div>           
                <h1 className='font-bugfast text-2xl  sm:text-2xl xl:text-4xl 2xl:text-5xl  3xl:text-12xl text-white mt-2 mb-2  '>PROJECT LUCIFER</h1>
                <Image
                  className='w-5/5'
                  src="/page-title-bar.png"
                  alt="col-icon"
                  height={1000}
                  width={1000}
                />
                <p className='w-full mt-2 text-lg  md:text-xl lg:mt-6'> <span className='font-bold'>Project Lucfer </span> is comprised of 6,666 Cloned Individuals. They share the same universe of Super Space Defenders, facing the same challenges and opportunities for new adventures.</p>
                <ol className='list-[square] ml-10 text-white text-lg   md:text-xl '>
                  <li className='mt-3 xl:mt-4 font-light'>Lucifers share most of the Super Space Defenders benefits.</li>
                  <li  className='mt-3 xl:mt-4 font-light'>Just like SSD, youll have access to exclusive community-focused events such as NFT Drops, Lore Building Activities, and more!.</li>
                  <li className='mt-3 xl:mt-4 font-light'>Access to the <span className='font-bold'> &ldquo; Defenders Arcade &rdquo; </span></li>
                  <li className='mt-3 xl:mt-4 font-light'>Increasing your Multiplier during major Airdrops/Launches if owning a Capsule or Defender..</li>
                  <li className='mt-3 xl:mt-4 font-light'>Admission to participate in our upcoming <span className='font-bold'> &ldquo; Crafting &rdquo; & &ldquo; Economy Systems &rdquo; </span></li>
                  <li className='mt-3 xl:mt-4 font-light'>Exclusive holder only bonuses in upcoming product campaign.</li>
                </ol>
              </div>
 
              <div className="flex justify-center items-center 2xl:mt-16 mt-7 md:mt-4 lg md:mb-9 lg:mb-4 lg:mt-5 2xl:mb-0 2xl:mt-7 :mt-4  ">
                <div className='w-full flex flex-col justify-around items-center md:flex-row 2xl:w-[85%]'>
                <Image
                  src="/opensea-logo-white-01 1.png"
                  className='mt-2 md:mt-0'
                  alt="blyr-logo"
                  height={65}
                  width={65}
                />
                <div className="cap-1 w-60 h-10  md:h-12 mt-5 md:mt-0 xl:h-14 xl:w-60 bg-red-800 capsule flex items-center justify-center lg:mt-0 font-light">
                  <button className=" text-white w-56 text-xl">
                    View Gallery
                  </button>
                </div>
                <div className="cap-1 w-60 h-10 md:h-12  xl:h-14 mt-5 md:mt-0 xl:w-60 bg-red-800 capsule flex items-center justify-center lg:mt-0 text-lg  2xl:text-2xl font-light">
                  <button className=" text-white w-56 text-xl">
                    MINT SPACE DEFENDER
                  </button>
                </div>
                </div>
              </div>

            <p className='flex justify-center w-full text-xs md:text-sm 2xl:text-lg font-semibold mt-4'>1035 COLLECTIBLES | 680 OWNERS | 26% UNIQUE OWNERS | 500 ETH TOTAL VOLUME</p>
            </div>
          </div>
        </div>

      </div>

      <div className='md:w-4/6  lg:w-auto absolute top-10 h-[100%] lg:ml-[2%] xl:ml-[10%] z-0 2xl:ml-[17%] '>
        <Image
          className='h-[98%] z-0 2xl:h-[90%]'
          src="/Scye_Concept Art_No BG 1 boy.png"
          alt="col-icon"
          height={700}
          width={500}
        />
      </div>
      <div
        className="char-list flex  w-full overflow-x-scroll absolute bottom-0 h-[15%] md:h-[20%] lg:h-[23%] xl:h-[25%] scroll-bar"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        {[...Array(1000)].map((_, i) => {
          return (
            <Image
            key={i}
              className="object-cover mt-5 w-full"
              src={`/Boy${(i%9)+2}.png`}
              alt="pfp"
              height={150}
              width={1000}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Lucifer
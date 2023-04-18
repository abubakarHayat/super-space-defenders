import React, { useState } from 'react'
import Image from "next/image";
import bg from "../../../public/Rectangle12.png";

function CollectionDetail() {
  const [modalValue, setModalValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDecrease = () => {
    if (modalValue > 0) {
      setModalValue(modalValue - 1)
    }
  }
  const handleIncrease = () => {
    setModalValue(modalValue + 1)
  }
  const handleModalState = () => {
   setModalOpen(!modalOpen);
  }
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
                  <h1 className='font-bugfast text-2xl  sm:text-2xl xl:text-4xl 2xl:text-5xl  3xl:text-12xl text-white mt-2 mb-2  '>SUPER SPACE DEFENDERS</h1>
              <Image
                className='w-5/5'
                src="/gallery-pfp-details-bar-01 1.png"
                alt="col-icon"
                height={1000}
                width={1000}
              />
              <p className='w-full mt-2 text-lg  md:text-xl lg:mt-6'>
                The Super Space Defenders is comprised of 4,444 hand-drawn 2D avatars inspired by the 80s & 90s anime art style. This collection has been meticulously crafted and organized to represent a wide variety of aesthetics. Each Defender possesses a unique combination of traits and rarities such as origin, political affinity, hairstyles, etc., creating an original character for every holder. The Super Space Defenders come with exclusive holder rewards including but not limited to:
              </p>
              <ol className='list-[square] ml-10 text-white text-lg   md:text-xl '>
                <li className='mt-3 xl:mt-4 font-light'>Entry to exclusive community-focused events such as NFT Drops, Lore Building Activities, and more!</li>
                <li className='mt-3 xl:mt-4 font-light'>Access to the Defenders Arcade.</li>
                <li className='mt-3 xl:mt-4 font-light'>Admission to participate in our upcoming Crafting System.</li>
                <li className='mt-3 xl:mt-4 font-light'>Ability to vote on future Web2 and Web3 proposals made by the core team and community regarding the development and growth of the Super Space Defenders.</li>
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

      <div className='md:w-4/6 absolute top-10 h-[100%] lg:ml-[2%] xl:ml-[15%] z-0 2xl:ml-[20%]'>
        <Image
          className='h-max z-0 '
          src="/Scye_Concept Art_No BG 1.png"
          alt="col-icon"
          height={700}
          width={500}
        />
      </div>
      <div
        className="char-list flex  w-full overflow-x-scroll absolute bottom-0 scroll-bar"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        {[...Array(9)].map((_, i) => {
          return (
            <button onClick={handleModalState}  key={i}>
            <Image
             
              className="object-cover mt-5"
              src={`/PFPs/ssd-pfp-0${(i + 1)}.jpg`}
              alt="pfp"
              height={220}
              width={220}
            />
           </button>
          );
        })}
      </div>

    { modalOpen &&  <div className="flex w-full h-full justify-center z-30 relative">
        <Image
          src="/Vector 7.png "
          alt=''
          className='backdrop-blur w-[90%] h-[40%] md:h-[43%] fixed top-[150px] bg-black opacity-90 sm:w-3/4 md:w-[60%] lg:w-2/4 xl:w-[40%] 2xl:w-[30%]'
          height={1000}
          width={1000}
        />


        <div className="modal-content flex justify-start items-center flex-col overflow-hidden h-[40%] md:h-[43%] w-[90%] fixed top-[150px]  z-20 sm:w-3/4 md:w-[60%] lg:w-2/4 xl:w-[40%] 2xl:w-[30%]">
        <button className='absolute right-2 top-3 rotate-[60deg] sm:top-6 sm:right-1 font-bugfast text-white' onClick={handleModalState} >Close</button>
          <h1 className='font-bugfast text-2xl mt-10 min-w-max '>Mint Super Space DEfender</h1>
          <div className='h-[65%] w-[80%]  flex justify-center items-start mt-5'>
            <div className='w-2/4 h-full flex justify-center items-center'>
              <Image
                src="/modalPic.png"
                alt=''
                className='h-full  w-[92%] rounded-lg'
                height={1000}
                width={1000}
              />
            </div>
            <div className='w-2/4 h-full flex flex-col items-center justify-between '>
              <div className='h-3/4 overflow-auto scroll-bar'>
                <p className='text-sm'>Mint your Super Space Defender and join either the Elites, Rebels, or Citizens.</p>
                <p className='mt-1 text-sm mt-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className=' w-full flex justify-between flex-col'>
                <h6 className='text-white mt-2 mb-1 text-sm font-semibold '>2,914 / 4,444 AVAILABLE</h6>
                <div className=' flex justify-center w-full h-[50%]'>
                  <div className=' w-1/3  flex justify-between'>
                    <div className='w-[60%] bg-white flex justify-center items-center text-lg'>{modalValue}</div>
                    <div className='w-[37%] flex flex-col justify-between'>
                      <button className='h-[47%] bg-white' onClick={handleIncrease}>+</button>
                      <button className='h-[47%] bg-white' onClick={handleDecrease}>-</button>
                    </div>
                  </div>
                  <div className='h-full w-2/3 flex items-center justify-center items-end relative' >
                    <Image
                      className="w-[90%] h-full"
                      src="/Vector 1.png"
                      alt="pfp"
                      height={100}
                      width={100}
                    />
                    <p className='absolute text-white text-2xl '>MINT</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>} 
  
    </div>
  )
}

export default CollectionDetail
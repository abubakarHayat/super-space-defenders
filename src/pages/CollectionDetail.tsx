import React from 'react'
import Image from "next/image";
import bg from "../../public/ssd-collection-bg-01.jpg";
import character from "../../public/Scye_Concept.png";
function CollectionDetail() {
  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-12/12 h-4/5 flex justify-center items-center">
        <div className='w-4/5 h-4/5 mb-12 flex '>
          <div className='w-0  md:w-2/6 lg:w-2/4 flex justify-center items-end lg:items-start'>
            <Image
              className='h-max'
              src={character}
              alt="col-icon"
              height={700}
              width={500}
            />
          </div>
          <div className='md:w-4/6 lg:2/4 bg-black bg-opacity-70 h-full overflow-y-scroll  scrollBar  '>
            <h1 className='font-bugfast text-2xl  sm:text-2xl xl:text-4xl 2xl:text-5xl  3xl:text-12xl text-white mt-2 mb-2  '>SUPER SPACE DEFENDERS</h1>
            <Image
              className='w-5/5'
              src="/page-title-bar.png"
              alt="col-icon"
              height={1000}
              width={1000}
            />
            <p className='w-full mt-2 text-lg  md:text-xl lg:mt-6'>
              The Super Space Defenders is comprised of 4,444 hand-drawn 2D avatars inspired by the 80s & 90s anime art style. This collection has been meticulously crafted and organized to represent a wide variety of aesthetics. Each Defender possesses a unique combination of traits and rarities such as origin, political affinity, hairstyles, etc., creating an original character for every holder. The Super Space Defenders come with exclusive holder rewards including but not limited to:
            </p>
            <ol className='list-[square] ml-10 text-white text-lg   md:text-xl '>
              <li>Entry to exclusive community-focused events such as NFT Drops, Lore Building Activities, and more!</li>
              <li>Access to the Defenders Arcade.</li>
              <li>Admission to participate in our upcoming Crafting System.</li>
              <li>Ability to vote on future Web2 and Web3 proposals made by the core team and community regarding the development and growth of the Super Space Defenders.</li>
            </ol>
            <div className="group-2 mt-10 mb-12 flex flex-col justify-center items-center space-x-8 lg:flex-row">
              <Image
                src="/opensea-logo-blue-01.png"
                alt="blyr-logo"
                height={65}
                width={65}
              />
              <div className="cap-1 w-60 h-8  mt-3  xl:h-10 xl:w-60 bg-red-800 capsule flex items-center justify-center lg:mt-0">
                <button className=" text-white w-56 text-xl">
                  View Gallery
                </button>
              </div>
              <div className="cap-1 w-60 h-8 xl:h-10 mt-3 xl:w-60 bg-red-800 capsule flex items-center justify-center lg:mt-0 text-lg  2xl:text-2xl">
                <button className=" text-white w-56 text-xl">
                  MINT SPACE DEFENDER
                </button>
              </div>
            </div>
            <p className='flex justify-center w-full text-lg  md:text-xl '>1035 COLLECTIBLES | 680 OWNERS | 26% UNIQUE OWNERS | 500 ETH TOTAL VOLUME</p>
          </div>
        </div>

      </div>
      <div
        className="char-list flex  w-full overflow-x-scroll absolute bottom-0"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        {[...Array(9)].map((_, i) => {
          return (
            <Image
              key={i}
              className="object-cover mt-5"
              src={`/PFPs/ssd-pfp-0${i + 1}.jpg`}
              alt="pfp"
              height={220}
              width={220}
            />
          );
        })}
      </div>
    </div>
  )
}

export default CollectionDetail
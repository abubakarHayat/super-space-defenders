import Navbar from '@/components/Navbar'
import Image from "next/image";
import React from 'react'
import holder from '../../public/holder-profile-main-pfp.png'
function Inventory() {
  return (
    <div className='bg-black h-screen w-full 2'>
      <Navbar />


      <div className='h-1/5 flex justify-center m-auto mt-10 items-center  w-5/6 relative overflow-hidden'>
        <Image
          src={holder}
          className='absolute top-0 left-0 z-10 w-auto h-full'
          alt="col-icon"
          height={100}
          width={100}
        />
        <div className='h-full w-full z-0'>
          <div className="holderProfileInventory  border-2 border-transparent flex justify-center h-full w-full overflow-hidden bg-black relative z-10   before:absolute  before:content-['']  before:border-r-2   border ">
            {/* <div className='h-full w-full flex justify-end items-end'>
              <div className='h-full border border-2 w-3/6'>
                 <div className='h-2/5'>

                 </div>
                 <div>

                 </div>
              </div>
              <div className='h-3/5 border border-2 w-1/6 h-4/6 flex flex-col justify-center items-end mr-4' >
               <div className='h-1/3 w-1/6 bg-white mt-2'></div>
               <div className='h-1/3 w-1/6 bg-white mt-2'></div>

               <div className='h-1/3 w-1/6 bg-white mt-2 mb-2'></div>

              </div>
            </div> */}
          </div>
        </div>

      </div>
      <div className=' w-5/6 flex  m-auto flex-wrap  mt-3 justify-center items-center text-white text-sm md:text-lg  sm:m-auto md:justify-start lg:ml-60  md:ml-56 xl:ml-60 2xl:ml-80' >
        <h6 className='mr-2'>OVERVIEW</h6>
        <h6 className='mr-2' >INVENTORY</h6>
        <h6 className='mr-2' >INVENTORY</h6>
        <h6 className='mr-1' >ACCOUNT</h6>
      </div>
      <div className='h-3/5 flex justify-center mt-5 lg:h-3/6'>
        <div className="flex justify-center w-5/6 h-full ">
          <div className="holderProfileInventoryDetail flex justify-center h-full w-full overflow-hidden bg-black relative z-10 before:absolute after:absolute before:content-[''] after:content-[''] before:border-r-2  after:border-r-2 border border-transparent">

            <div className="leftSide">
              <Image
                className="modalImg"
                src="/modalPic.png"
                alt="col-icon"
                height={100}
                width={100}
              />
            </div>
            <div className="rightSide">
              <div className="ProfieInfo">
                <div className="ProfieInfo-picture">
                  <div className="logo">
                    <Image
                      className="Profie-picture"
                      src="/logo.png"
                      alt="col-icon"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>
                <div className="ProfieInfo-content flex flex-col justify-center overflow-hidden">
                  <h1 className="text-xs sm:text-sm w-fit md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-bugfast ">SPACE DEFENDER NO. 1234</h1>
                  <div className="ProfieInfo-Inner-content"> <h1 className="text-xs sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bugfast ">NO. </h1>  <p className="text-xs leading-5 font-light w-fit sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"> 1234 |  &zwnj; </p> <h1 className="text-xs sm:text-sm   md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bugfast ">OWNER:</h1> <p className="text-xs leading-5 font-light sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">VerbalTachi</p></div>
                </div>
                <div className="ProfieInfo-picture profile">
                  <div className="Image">
                    <Image
                      className="Profie-picture"
                      src="/aurora-collection-icon-01.png"
                      alt="col-icon"
                      height={20}
                      width={20}
                    />
                  </div>

                </div>

              </div>
              <div className="ClosetItems scrollBar">
                {[...Array(10)].map((_, i) => {
                  return (
                    <div className="closet-item " key={i}>
                      <div className="closet-item-content flex flex-col w-full h-full justify-center pl-3 xl:pl-0">
                        <h1 className="text-sm py-0 my-0 leading-4 font-bugfast ">BACKGROUND</h1>
                        <p className="text-sm font-thin py-0 my-0 leading-4">Dark Matter</p>
                      </div>
                    </div>
                  );
                })}

              </div>
              <div className="BackStory">
                <h1 className="BackStory-head font-bugfast ">BackStory</h1>
                <p className="BackStory-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla veniam fugit ex beatae officiis ad ratione eligendi atque. Consectetur quia accusamus provident rem sunt maiores quaerat odit inventore natus culpa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory
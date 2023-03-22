import React from 'react'
import Navbar from '../Navbar'
import Image from "next/image";
import holder from "../../../public/holder-profile-main-pfp.png";
import achivements from '../../../public/holder-profile-achievements.png'

function index() {
  return (
    <div className='bg-black h-screen w-full' >
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

          </div>
        </div>

      </div>
      <div className=' w-5/6 flex  m-auto flex-wrap  mt-3 justify-center items-center text-white text-sm md:text-lg  sm:m-auto md:justify-start lg:ml-60  md:ml-56 xl:ml-60 2xl:ml-80' >
        <h6 className='mr-2'>OVERVIEW</h6>
        <h6 className='mr-2' >INVENTORY</h6>
        <h6 className='mr-2' >INVENTORY</h6>
        <h6 className='mr-1' >ACCOUNT</h6>
      </div>
      <div className='h-1/5 flex justify-center mt-5 '>
        <div className="flex justify-center w-5/6 h-full ">
          <div className="holderProfileInventoryDetail flex justify-center h-full w-full overflow-hidden bg-black relative z-10 before:absolute after:absolute before:content-[''] after:content-[''] before:border-r-2  after:border-r-2 border border-transparent">
            <div className='flex h-full flex-col w-3/6 items-center justify-evenly sm:w-4/5'>
              <h1 className='font-bugfast text-xl'>ACHIVEMENTS</h1>
              <div className='flex justify-evenly items-center overflow-x-auto scrollBar'>
                <Image
                  className='ml-2 mr-2 '
                  src={achivements.src}
                  alt="achivements-pic"
                  height={200}
                  width={200}
                />
                <Image
                  className='ml-2 mr-2'
                  src={achivements.src}
                  alt="achivements-pic"
                  height={200}
                  width={200}
                />
                <Image
                  className='ml-2 mr-2'
                  src={achivements.src}
                  alt="achivements-pic"
                  height={200}
                  width={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-1/3 flex justify-center mt-3 lg:mt-2 '>
        <div className="flex justify-center w-5/6 h-full ">
          <div className="holderProfileInventoryDetail flex  justify-center  h-full w-full overflow-hidden bg-black relative z-10 before:absolute after:absolute before:content-[''] after:content-[''] before:border-r-2  after:border-r-2 border border-transparent">
            <div className='flex flex-col h-full w-4/5  items-center overflow-auto  scrollBar'>
              <h1 className='mt-4 mb-3 font-bugfast text-xl '>BACKSTORY</h1>
              <p className='w-4/6 sm:w-full'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quas aut libero atque tenetur nostrum. Perferendis harum voluptatibus asperiores sunt dignissimos molestias facere. Nemo quis fuga earum cumque enim, qui perferendis sint eligendi quia quasi sequi necessitatibus explicabo porro deleniti architecto assumenda hic, rerum quae ratione, ut magni dolore! Excepturi eius consequuntur, animi quis totam id optio dolorem beatae necessitatibus fugit expedita sapiente possimus incidunt natus temporibus ab sint adipisci nisi corporis. Porro autem modi necessitatibus itaque, consectetur eveniet praesentium delectus et molestias, explicabo voluptatum, ex vero. Repudiandae molestiae similique sunt commodi aspernatur error sapiente facilis? Quis dolorum cumque a!</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
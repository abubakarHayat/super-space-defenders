import Navbar from '@/components/Navbar'
import Image from "next/image";
import React from 'react'
import holder from '../../../public/holder-profile-main-pfp.png'
import TopSectionDiv from "../../../public/Vector 8.png";
import Divider from '../../../public/page-title-bar-01 2.png'

function Inventory() {
  return (
    <div className='bg-black h-screen w-full overflow-x-hidden pb-5'>
      <Navbar />


      <div className='h-1/4 flex justify-center m-auto mt-10 items-end w-5/6 relative overflow-hidden lg:h-1/3 xl:h-2/5 -mt-9 '>
        <Image
          src={holder}
          className='w-auto h-3/4'
          alt="col-icon"
          height={100}
          width={100}
        />
        <Image
          src={TopSectionDiv.src}
          alt=""
          className='w-7/12 h-3/4 sm:w-3/4 md:w-full'
          height={100}
          width={100}
        />
        <div className='absolute  w-8/12 h-3/4 right-0 lg:w-4/6 xl:w-8/12 flex items-end justify-end  md:mr-0'>
          <div className='w-10/12  h-full flex flex-col justify-center md:w-11/12 items-start' >
            <div className='h-5/6 w-11/12 flex flex-col justify-between'>
              <div>

                <div className='flex justify-between items-end'>
                  <h1 className='font-bugfast text-3xl xl:text-4xl min-w-max'>SCYE ANURIAN</h1>
                  <h3 className='font-bugfast text-sm text-white min-w-max' >LVL 24</h3>
                </div>

                <Image
                  src={Divider.src}
                  alt=""
                  height={1000}
                  width={1000}
                />

                <div className='flex justify-between'>
                  <p className='min-w-max'>MASTER PILOT</p>
                  <p>0xc42...20cE2</p>
                </div>

              </div>
              <div className='flex justify-between'>
                <div className='flex items-center justify-start w-9/12 sm:w-9/12 md:w-8/12'>
                  <Image
                    src='/aurora-collection-icon-01.png'
                    className='ml-2 lg:ml-6'
                    alt="home-icon-02"
                    height={50}
                    width={50}
                  />
                  <h1 className='ml-2  font-bold' >5</h1>
                  <Image
                    src='/aurora-collection-icon-01.png'
                    className='ml-2 lg:ml-6'
                    alt="home-icon-02"
                    height={50}
                    width={50}
                  />
                  <h1 className='ml-2 font-bold'>5</h1>
                  <Image
                    className='ml-2 lg:ml-6'
                    src='/aurora-collection-icon-01.png'
                    alt="home-icon-02"
                    height={50}
                    width={50}
                  />
                  <h1 className='ml-2 font-bold' >5</h1>
                </div>

                <Image
                  src="/faction-icon-01 2.png"
                  alt="home-icon-02"
                  height={30}
                  width={50}
                />
              </div>
            </div>
          </div>
          <div className='w-1/12 h-5/6 mr-2 flex flex-col justify-end items-end md:mr-3 xl:mr-4'>
            <div className='h-1/5 w-full bg-white mb-2 sm:w-10/12 md:w-3/4 lg:w-8/12 xl:w-3/5 2xl:w-3/6'></div>
            <div className='h-1/5 w-full bg-white mb-2 sm:w-10/12 md:w-3/4 lg:w-8/12 xl:w-3/5 2xl:w-3/6'></div>
            <div className='h-1/5 w-full bg-white mb-2 sm:w-10/12 md:w-3/4 lg:w-8/12 xl:w-3/5 2xl:w-3/6'></div>
          </div>
        </div>


      </div>

      <div className=' w-5/6 flex  m-auto flex-wrap justify-center items-center text-white text-sm md:text-lg   mt-4 md:justify-start lg:ml-60  md:ml-60 lg:ml-80 xl:ml-96 ' >
        <h6 className='mr-2 ml-24 md:ml-0 2xl:ml-10'>OVERVIEW</h6>
        <h6 className='mr-2' >INVENTORY</h6>
        <h6 className='mr-2' >INVENTORY</h6>
        <h6 className='mr-1' >ACCOUNT</h6>
      </div>
      <div className='h-3/5 flex justify-center  relative lg:h-[70%] xl:h-3/4 2xl:h-4/5 mt-24 sm:mt-36'>
        <Image
          src='/Vector7.png'
          className='w-5/6 h-full'
          alt="home-icon-02"
          height={500}
          width={500}
        />


        <div className='absolute top-0  h-full w-5/6 flex justify-center items-center '>
          <div className='h-3/4 relative'>
            <Image
              src='/Vector7.png'
              className='w-full h-full'
              alt="home-icon-02"
              height={500}
              width={500}
            />

            <div className="flex justify-center w-full h-full absolute top-0">

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
                  src="/faction-icon-01 2.png"
                  alt="home-icon-02"
                  height={30}
                  width={50}
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
                          <h1 className="text-xs py-0 my-0 leading-4 font-bugfast ">BACKGROUND</h1>
                          <p className="text-xs font-thin py-0 my-0 leading-4">Dark Matter</p>
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


    </div>
  )
}

export default Inventory
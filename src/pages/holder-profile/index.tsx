import React from 'react'
import Navbar from '../../components/Navbar'
import Image from "next/image";

function index() {
  return (
    <div className='bg-black h-screen w-full overflow-x-hidden pb-9' >
      <Navbar />
      <div className='h-1/4 sm:h-[27%] md:h-[34%] lg:h-[40%] xl:h-2/5 flex justify-center m-auto mt-10 items-end w-5/6 relative'>
        <Image
          src="/holder-profile-main-pfp-image-01.png"
          className='w-[30%] h-full -mr-3 md:-mr-4'
          alt="col-icon"
          height={1000}
          width={1000}
        />
        <div className=' h-full w-full relative lg:-ml-2 xl:-ml-5 2xl:-ml-7'>
          <Image
            src="/Vector 8.png"
            alt=""
            className='w-full h-full'
            height={1000}
            width={1000}
          />
          <div className='absolute botom-0 left-0 w-full flex  mt-2 flex-wrap  text-white text-xs sm:text-lg' >
            <h6 className='mr-2 '>OVERVIEW</h6>
            <h6 className='mr-2' >INVENTORY</h6>
            <h6 className='mr-2' >INVENTORY</h6>
            <h6 className='mr-1' >ACCOUNT</h6>
          </div>collection-detail/lucifer 
        </div>
        <div className='absolute  w-8/12 h-full right-0 lg:w-4/6 xl:w-8/12 flex items-end justify-end  md:mr-0'>
          <div className='w-10/12  h-full flex flex-col justify-center md:w-11/12 items-start' >
            <div className='h-5/6 w-11/12 flex flex-col justify-between'>
              <div>
                <div className='flex justify-between items-end'>
                  <h1 className='font-bugfast text-3xl xl:text-4xl min-w-max'>SCYE ANURIAN</h1>
                  <h3 className='font-bugfast text-sm text-white min-w-max' >LVL 24</h3>
                </div>
                <Image
                  src="/page-title-bar-01 2.png"
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

      <div className='h-1/4 flex justify-center mt-24 sm:mt-32  md:mt-36 lg:mt-44  xl:mt-54 lg:mt-22 md:h-[30%]  xl:h-[37%] lg:h-[33%]'>
        <div className="w-5/6 h-full relative m-auto">
          <Image
            src='/Vector7.png'
            className='w-full h-full'
            alt="home-icon-02"
            height={500}
            width={500}
          />
          <div className='w-full absolute h-full top-0'>
            <div className='flex  h-full  m-auto flex-col w-[90%] items-center justify-start lg:w-[80%]  xl:w-[75%] mt-3  md:mt-4'>
              <h1 className='font-bugfast text-xl md:text-2xl mb-4'>ACHIVEMENTS</h1>
              <div className='w-full h-[72%] md:h-[75%] '>
                <ul className="achivements-hex-grid ml-4 ">
                  {[...Array(20)].map((_, i) => {
                    return (
                      <li className="achivement-hex" key={i}>
                        <div className="achivements-hex-in">
                          <a className="achivement-hex-link" href="#">
                            <img src="/badge-01 2.png" alt="" className="achivement-image" />

                          </a>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='h-1/4 flex justify-center mt-5 lg:mt-1 sm:h-1/3 xl:h-[40%] lg:h-[35%] 2xl:mt-7'>
        <div className="relative w-5/6 h-full" >
          <Image
            src='/vector7.png'
            className='w-full h-full'
            alt="home-icon-02"
            height={500}
            width={500}
          />
          <div className='w-full absolute h-full top-0 flex justify-center'>
            <div className='flex flex-col h-full w-4/5  items-center overflow-auto  scroll-bar'>
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
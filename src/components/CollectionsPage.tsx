import React, { useState } from 'react';
import Image from "next/image";
import Navbar from "./Navbar";
import bg2 from "../../public/PFPs/ssd-pfp-03.jpg";
import Tile from "./Tile";
import bg from "../../public/space-bg-01.jpg";
import collectionPic from '../../public/pfp-gallery-hex.png';
import { FaTimes } from 'react-icons/fa';

function CollectionsPage() {
  const style = { color: "white", fontSize: "4em" }

  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  }
  const handleToggleSideTab = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className='CollectionPg'>
      <div
        className="h-fit w-full"
        style={{
          background: `url(${bg.src})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >

        <Navbar />
        <div className="main-collection flex flex-col items-center mt-20">
          <h1 className="font-bugfast xl:text-6xl text-white">
            COLLECTIONS GALLERY
          </h1>
          {/*
         <div className="gallery-wrapper bg-white h-60v w-50v">
          <div className="gallery bg-zinc-300"></div>
        </div> */}
          {/* <div className="wrapper h-60v w-90v">
          <div className="char-ip h-10 w-20 border-white border-2">
            <input className="border-emerald-200 border-2 h-full w-full" />
          </div>
        </div> */}
          <div className="gallery h-80v w-11/12 lg:w-90v border-white border-2 my-2 flex flex-col items-center">
            <div className="sub-nav px-3 md:px-10 m-10 w-full text-white grid grid-cols-3 gap-5">
              <div className="input-container w-full mr-10 col-span-3 xl:col-span-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 search-icon absolute top-2 left-4 lg:top-4 lg:left-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>

                <input
                  className="h-10 lg:h-14 w-full pl-14 rounded-full bg-transparent border-white border-2"
                  placeholder="Search here..."
                />
              </div>
              <div className="info-tabs flex space-x-10 md:space-x-5 md:justify-around col-span-3 lg:col-span-2 xl:col-span-1">
                <div>
                  <p className="font-bugfast text-md lg:text-xl 2xl:text-2xl">
                    1,533
                  </p>
                  <p className="font-light text-sm">total items</p>
                </div>
                <div>
                  <p className="font-bugfast text-md lg:text-xl 2xl:text-2xl">
                    0.029 ETH
                  </p>
                  <p className="font-light text-sm">floor price</p>
                </div>
                <div>
                  <p className="font-bugfast text-md lg:text-xl 2xl:text-2xl">
                    393
                  </p>
                  <p className="font-light text-sm">owners</p>
                </div>
                <div>
                  <p className="font-bugfast text-md lg:text-xl 2xl:text-2xl">
                    26%
                  </p>
                  <p className="font-light text-sm">unique owners</p>
                </div>
              </div>

              <div className="collection-icons flex justify-center space-x-5 px-10 col-span-3 lg:col-span-1 xl:col-span-1 xl:justify-end">
                <Image
                  src="/aurora-collection-icon-01.png"
                  alt="col-icon"
                  height={75}
                  width={75}
                />
                <Image
                  src="/aurora-collection-icon-01.png"
                  alt="col-icon"
                  height={75}
                  width={75}
                />
                <Image
                  src="/aurora-collection-icon-01.png"
                  alt="col-icon"
                  height={75}
                  width={75}
                />
              </div>
            </div>
            <div className="collection-gallery overflow-auto">
              {openModal && <>
                <div className="modal">
                  <div className='crossBtn flex justify-center items-center'>
                    <FaTimes style={style} onClick={() => setOpenModal(false)} />
                  </div>
                  <div className="modal-content">
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
                          <h1 className="text-xs sm:text-sm w-fit md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">SPACE DEFENDER NO. 1234</h1>
                          <div className="ProfieInfo-Inner-content"> <h1 className="text-xs sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">NO. </h1>  <p className="text-xs leading-5 font-light w-fit sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"> 1234 |  &zwnj; </p> <h1 className="text-xs sm:text-sm   md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">OWNER:</h1> <p className="text-xs leading-5 font-light sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">VerbalTachi</p></div>
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
                            <div className="closet-item" key={i}>
                              <div className="closet-item-content flex flex-col w-full h-full justify-center pl-3 xl:pl-0">
                                <h1 className="text-sm py-0 my-0 leading-4">BACKGROUND</h1>
                                <p className="text-sm font-thin py-0 my-0 leading-4">Dark Matter</p>
                              </div>
                            </div>
                          );
                        })}

                      </div>
                      <div className="BackStory">
                        <h1 className="BackStory-head">BackStory</h1>
                        <p className="BackStory-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla veniam fugit ex beatae officiis ad ratione eligendi atque. Consectetur quia accusamus provident rem sunt maiores quaerat odit inventore natus culpa.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              }
              <div className="sideTab z-10">
                {openMenu && <>
                  <div className="sideTabContent">
                    <div className="Tabcontent">
                      {[...Array(17)].map((_, i) => {
                        return (
                          <div className="content-item my-2" key={i}>
                            <h1 className='ttext-sm md:text-xl lg:text-2xl'>Background</h1>
                            <div className="rightContent">
                              <p>33</p>
                              <Image
                                className='dropSign'
                                src="/inv.png"
                                alt="col-icon"
                                height={30}
                                width={30}
                              />
                            </div>
                          </div>
                        );
                      })}

                    </div>
                  </div>
                  <div className="black"></div>
                </>}
                <button onClick={handleToggleSideTab} >

                  <div className="sideTabContent2">
                    <h1 className="filter">Filter</h1>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='HexagonCollectionGallery scrollBar'>
        {[...Array(90)].map((_, i) => {
          return (
            <div className="tile" key={i} onClick={handleClick}> 
              <div className="hexagon">
                <img src={collectionPic.src}  className="CollectionPageImg"/>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default CollectionsPage;

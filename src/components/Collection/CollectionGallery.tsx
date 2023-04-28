import { useState, useEffect } from "react";
import Image from "next/image";
import Moralis from "moralis";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "../Navbar";
import collectionPicFrame from "../../../public/pfp-gallery-hex-boundary.png";

type nftData = {
  amount: string;
  block_number_minted: string;
  last_metadata_sync: string;
  last_uri_sync: string;
  metadata: string;
  minter_address: string;
  name: string;
  possible_spam: boolean;
  symbol: string;
  token_address: string;
  token_hash: string;
  token_id: string;
  token_uri: string;
  updated_at: null;
};
const UNREVEALED_TRAITS = [
  { trait_type: "Faction", value: "Unrevealed" },
  { trait_type: "Family", value: "Unrevealed" },
  { trait_type: "Origin", value: "Unrevealed" },
  { trait_type: "Background", value: "Unrevealed" },
  { trait_type: "Equipment", value: "Unrevealed" },
  { trait_type: "Hair", value: "Unrevealed" },
  { trait_type: "Hair Color", value: "Unrevealed" },
  { trait_type: "Eye Color", value: "Unrevealed" },
  { trait_type: "Eyes", value: "Unrevealed" },
  { trait_type: "Eyewear", value: "Unrevealed" },
  { trait_type: "Body Marks", value: "Unrevealed" },
  { trait_type: "Earrings", value: "Unrevealed" },
  { trait_type: "Communicator", value: "Unrevealed" },
  { trait_type: "Mouth", value: "Unrevealed" },
  { trait_type: "Clothes", value: "Unrevealed" },
];
function CollectionsPage() {
  const [message, setMessage] = useState("");

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState<any | null>(null);
  const [pageCount, setPageCount] = useState(0);

  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  const [currentOpenedNft, setCurrentOpenedNft] = useState<any | null>(null);
  const handleClick = (i: number) => {
    setCurrentOpenedNft(currentItems[i]);
    setOpenModal(true);
  };
  const handleToggleSideTab = () => {
    setOpenMenu(!openMenu);
  };

  const itemsPerPage: number = 10;

  const [nfts, setNfts] = useState<any | null>(null);

  useEffect(() => {
    const getNfts = async () => {
      try {
        if (nfts === null) {
          toast("Loading NFTs collection!");
        }
        await Moralis.start({
          apiKey:
            "7hBcGLYwmnCg8e7BL3BTMP4YNkDlGejEvb06djtRSJsno5BmlBfAd9jLOQqPLqqt",
        });
        const response = await Moralis.EvmApi.nft.getContractNFTs({
          chain: "0x1",
          format: "decimal",
          mediaItems: false,
          address: "0x6ea26ecde564df85d4c631e041ff7630296b08b8",
        });

        const data: any = response.raw.result;
        const tempDataToFetch = data;
        console.log(tempDataToFetch);
        let nftData = [];
        for await (const obj of tempDataToFetch) {
          let singleNftData = await fetch(obj.token_uri, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          if (singleNftData.ok) {
            const nft = await singleNftData.json();
            if (nft.attributes.length < 10) {
              nft.attributes = UNREVEALED_TRAITS;
            }
            console.log(nft);
            nftData.push(nft);
          }
        }
        setNfts(nftData);

        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };

    getNfts();
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    if (nfts !== null) {
      console.log("HELLO", nfts);
      toast("Loading NFTs collection!");
      setCurrentItems(nfts.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(nfts.length / itemsPerPage));
    }
    console.log(itemOffset);
    console.log("HELLO22", nfts);
  }, [itemOffset, nfts]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % nfts.length;

    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="collection-pg max-h-fit">
      <ToastContainer />
      <div
        className={`h-2/3 md:h-4/5 w-fit left-0 fixed top-[17%] md:top-[13%] z-20`}
      >
        {openMenu && (
          <>
            <div className="h-full w-full relative">
              <Image
                src="/Filter Bar Shape.png"
                alt=""
                className="w-full h-full "
                height={1000}
                width={1000}
              />
              <button
                onClick={handleToggleSideTab}
                className="absolute top-[43%] right-0  w-[40px] h-[89px]  lg:top-[43.2%] lg:h-[105px]"
              >
                <h1 className="absolute top-[50%] right-0 rotate-90 -mt-[18px] md:-mt-[14px] text-lg md:text-2xl -mr-[9px]">
                  Filter
                </h1>
              </button>
              <div className=" w-[83%] h-[91%] scroll-bar absolute top-7 overflow-auto  pl-3">
                {[...Array(10)].map((_, i) => {
                  return (
                    <div className="content-item my-2" key={i}>
                      <h1 className="text-sm md:text-xl lg:text-2xl text-white">
                        Background
                      </h1>
                      <div className="rightContent flex w-[56px] ">
                        <p className="text-white">33</p>
                        <Image
                          src="/inv.png"
                          className=""
                          alt="col-icon"
                          height={20}
                          width={25}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
        {!openMenu && (
          <div className="h-full w-full relative -left-[89%]">
            <Image
              src="/Filter Bar Shape.png"
              alt=""
              className="w-full h-full "
              height={1000}
              width={1000}
            />
            <button
              onClick={handleToggleSideTab}
              className="absolute top-[43%] right-0  w-[40px] h-[89px]  lg:top-[43.2%] lg:h-[105px]"
            >
              <h1 className="absolute top-[50%] right-0 rotate-90 -mt-[18px] md:-mt-[14px] text-lg md:text-2xl -mr-[9px]">
                Filter
              </h1>
            </button>
          </div>
        )}
      </div>
      <div className="h-fit w-full bg-gallery">
        <Navbar />
        <div className="main-collection flex flex-col items-center mt-20 ">
          <div className="w-11/12 lg:w-90v  flex items-end">
            <h1 className="font-bugfast text-xl md:text-2xl lg:text-4xl xl:text-6xl text-white min-w-max">
              COLLECTIONS GALLERY
            </h1>
            <div className="w-full h-1 md:h-2 lg:h-3 relative">
              <Image alt="title bar" src="/page-title-bar-01 2.png" fill />
            </div>
          </div>
          <div className="gallery h-80v w-11/12 lg:w-90v  my-2 flex flex-col items-center">
            <div className="sub-nav px-3 md:px-10 m-10 w-full text-white grid grid-cols-3 gap-5">
              <div className="input-container w-full mr-10 col-span-3 xl:col-span-1 relative">
                <Image
                  src="/vector2.png"
                  className="h-10 lg:h-14 w-full bg-transparent"
                  alt="col-icon"
                  height={1000}
                  width={1000}
                />
                <button
                  onClick={() => {
                    alert(message);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 search-icon absolute top-2 left-5 lg:top-4 lg:left-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
                <input
                  name="myInput"
                  className=" absolute left-14 top-2 lg:top-4 lg:left-16 bg-inherit   outline-0"
                  placeholder="Search by name, ID, or trait"
                  onChange={handleChange}
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
              {openModal && (
                <>
                  <div className="flex w-full h-full justify-center z-30">
                    <Image
                      src="/vector7.png"
                      alt=""
                      className="backdrop-blur w-[72%] h-[72%] fixed top-[140px] ml-5 bg-black opacity-90 sm:rounded-tl-sm sm:rounded-br-sm rounded-bl-[30px] rounded-tr-[30px] sm:rounded-tr-[39px] md:rounded-tr-[45px] lg:rounded-tr-[57px] xl:rounded-tr-[68px] 2xl:rounded-tr-[84px]   z-20    sm:rounded-bl-[39px] md:rounded-bl-[45px] lg:rounded-bl-[57px] xl:rounded-bl-[68px] 2xl:rounded-bl-[84px]"
                      height={1000}
                      width={1000}
                    />
                    <div className="modal-content flex justify-center overflow-hidden h-[70%] w-4/5 fixed top-[150px] m-auto ml-[20px] z-20 ">
                      <div className="leftSide mr-4 w-[40%] h-full flex justify-center items-center relative">
                        <Image
                          className="modal-img h-[96%] w-[97%] ml-[10px]"
                          src={currentOpenedNft.image}
                          alt="col-icon"
                          height={200}
                          width={200}
                        />
                        <Image
                          className="absolute bottom-5 right-2 "
                          src="/opensea-logo-white-01 1.png"
                          alt="col-icon"
                          height={40}
                          width={40}
                        />
                      </div>
                      <div className="rightSide w-[48%] h-full flex flex-col justify-center items-start relative">
                        <h1
                          className="absolute top-6 cursor-pointer right-[0.51rem] lg:right-[0.50rem] xl:right-[0.60rem] text-xl lg:text-2xl font-bold rotate-[72deg] lg:rotate-[70deg] xl:rotate-[58deg] 2xl:rotate[61deg] 2xl:right-[0.75rem] md:right-[0.70rem] md:top-8 font-bugfast"
                          onClick={() => setOpenModal(false)}
                        >
                          Close
                        </h1>

                        <div className="profie-info ">
                          <div className="profie-info-picture">
                            <div className="logo w-3/5 h-3/5">
                              <Image
                                className="Profie-picture"
                                src="/logo.png"
                                alt="col-icon"
                                height={100}
                                width={100}
                              />
                            </div>
                          </div>
                          <div className="profie-info-content flex flex-col justify-center overflow-hidden">
                            <h1 className="text-xs sm:text-sm w-fit md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-bugfast">
                              {currentOpenedNft.name}
                            </h1>
                            <div className="profie-info-Inner-content">
                              {" "}
                              {/* <h1 className="text-xs sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bugfast">
                                NO.{" "}
                              </h1>{" "}
                              <p className="text-xs leading-5 font-light w-fit sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                                {" "}
                                1234 | &zwnj;{" "}
                              </p>{" "} */}
                              <h1 className="text-xs sm:text-sm   md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bugfast">
                                OWNER:
                              </h1>
                              <p className="text-xs leading-5 font-light sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                                {" "}
                                VerbalTachi
                              </p>
                            </div>
                          </div>
                          <div className="profie-info-picture profile">
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
                        <div className="w-full flex justify-center -mt-[9%] mb-[2%] sm:-mt-[5%] sm:mb-[3%] lg:-mt-[4%] xl:-mt-[3%] 2xl:-mt-[1%]">
                          <Image
                            className="w-[98%] h-[10px]"
                            src="/gallery-pfp-details-bar-01 1.png"
                            alt="col-icon"
                            height={1000}
                            width={1000}
                          />
                        </div>
                        <div className="closet-Items scroll-bar  overflow-y-auto overflow-x-hidden h-[45%] w-full flex flex-wrap items-center justify-start md:relative ">
                          {currentOpenedNft.attributes.map(
                            (el: any, i: number) => {
                              return (
                                <div className="closet-item " key={i}>
                                  <Image
                                    src="/vector4.png"
                                    alt=""
                                    className="h-full w-full"
                                    height={100}
                                    width={100}
                                  />
                                  <div className="closet-item-content flex flex-col w-full h-full justify-center pl-1 md:pl-3 xl:pl-0 absolute top-0 left-3 xl:left-7 2xl:left-8">
                                    <h1 className="text-md py-0 my-0 leading-4 font-bugfast">
                                      {el.trait_type}
                                    </h1>
                                    <p className="text-sm py-0 my-0 leading-4">
                                      {el.value}
                                    </p>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                        <div className="h-[30%] w-[99%] flex justify-center items-start flex-col relative overflow-hidden">
                          <Image
                            src="/vector5.png"
                            alt=""
                            className="h-full w-[99%]"
                            height={1000}
                            width={1000}
                          />
                          <div className="absolute top-4">
                            <h1 className="h-1/5 ml-[2%] font-bugfast">
                              BackStory
                            </h1>
                            <p className="mt-2 h-[60%] ml-[2%] text-sm mr-1">
                              {currentOpenedNft.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[42%] h-fit w-full flex flex-col justify-center bg-gallery items-center">
        <div className="hexagon-collection-gallery h-max pt-10 md:pt-0 overflow-x-hidden  overflow-y-hidden pb-28">
          {currentItems &&
            currentItems.map((el: any, i: number) => {
              return (
                <div
                  className="tile inline-block ml-[13%] w-fit mt-[50px] rotate-[150deg]"
                  key={i}
                  onClick={() => handleClick(i)}
                >
                  <div
                    className="hexagon relative inline-block text-center before:w-[17vmax] after:w-[17vmax] w-[17vmax] before:bg-inherit
                              before:absolute before:left-0 before:content-none  before:h-[14vmax] after:h-[14vmax] h-[14vmax]
                              after:bg-inherit after:absolute after:left-0 after:content-none after:rotate-[60deg] before:rotate-[60deg]"
                  >
                    <img
                      src={el.image}
                      alt=""
                      className="collection-page-img"
                    />
                    <div>
                      <img
                        src={collectionPicFrame.src}
                        alt=""
                        className="absolute top-0 right-0 bottom-0 left-0 w-[114%] z-20 h-[128%] -mt-[11%] -ml-[8%] md:w-max md:z-0 md:h-[116%] rotate-[209deg] md:-mt-[10%] md:ml-[1%]"
                      />
                    </div>
                    <p className="collection-page-number absolute z-50 text-lg xl:text-3xl 2xl:mt-2">
                      {`#${el.name.split("#")[1]}`}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <ReactPaginate
          containerClassName="pagination flex flex-wrap gap-y-4 space-x-2 justify-around w-full sm:w-3/4 lg:w-1/2 self-center items-center mb-5 text-white"
          pageClassName="border-white border-2 rounded-full"
          pageLinkClassName="p-5"
          breakLabel="..."
          nextLabel={
            <span className="border-white border-2 rounded-full p-2">Next</span>
          }
          previousLabel={
            <span className="border-white border-2 rounded-full p-2">
              Previous
            </span>
          }
          disabledClassName="opacity-50"
          activeClassName="bg-white text-black"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default CollectionsPage;

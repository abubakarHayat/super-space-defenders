import Navbar from "@/components/Navbar";
import Image from "next/image";

function Inventory() {
  return (
    <div className="bg-black h-screen w-full overflow-x-hidden pb-5">
      <Navbar />

      <div className="h-1/4 sm:h-[27%] md:h-[34%] lg:h-[40%] xl:h-2/5 flex justify-center m-auto mt-10 items-end w-5/6 relative">
        <Image
          src="/holder-profile-main-pfp-image-01.png"
          className="w-[30%] h-full -mr-3 md:-mr-4"
          alt="col-icon"
          height={1000}
          width={1000}
        />
        <div className=" h-full w-full relative lg:-ml-2 xl:-ml-5 2xl:-ml-7">
          <Image
            src="/vector8.png"
            alt=""
            className="w-full h-full"
            height={1000}
            width={1000}
          />
          <div className="absolute botom-0 left-0 w-full flex  mt-2 flex-wrap  text-white text-xs sm:text-lg">
            <h6 className="mr-2 ">OVERVIEW</h6>
            <h6 className="mr-2">INVENTORY</h6>
            <h6 className="mr-2">INVENTORY</h6>
            <h6 className="mr-1">ACCOUNT</h6>
          </div>
        </div>
        <div className="absolute  w-8/12 h-full right-0 lg:w-4/6 xl:w-8/12 flex items-end justify-end  md:mr-0">
          <div className="w-10/12  h-full flex flex-col justify-center md:w-11/12 items-start">
            <div className="h-5/6 w-11/12 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-end">
                  <h1 className="font-bugfast text-3xl xl:text-4xl min-w-max">
                    SCYE ANURIAN
                  </h1>
                  <h3 className="font-bugfast text-sm text-white min-w-max">
                    LVL 24
                  </h3>
                </div>
                <Image
                  src="/page-title-bar-01 2.png"
                  alt=""
                  height={1000}
                  width={1000}
                />
                <div className="flex justify-between">
                  <p className="min-w-max">MASTER PILOT</p>
                  <p>0xc42...20cE2</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center justify-start w-9/12 sm:w-9/12 md:w-8/12">
                  <Image
                    src="/aurora-collection-icon-01.png"
                    className="ml-2 lg:ml-6"
                    alt="home-icon-02"
                    height={50}
                    width={50}
                  />
                  <h1 className="ml-2  font-bold">5</h1>
                  <Image
                    src="/aurora-collection-icon-01.png"
                    className="ml-2 lg:ml-6"
                    alt="home-icon-02"
                    height={50}
                    width={50}
                  />
                  <h1 className="ml-2 font-bold">5</h1>
                  <Image
                    className="ml-2 lg:ml-6"
                    src="/aurora-collection-icon-01.png"
                    alt="home-icon-02"
                    height={50}
                    width={50}
                  />
                  <h1 className="ml-2 font-bold">5</h1>
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
          <div className="w-1/12 h-5/6 mr-2 flex flex-col justify-end items-end md:mr-3 xl:mr-4">
            <div className="h-1/5 w-full bg-white mb-2 sm:w-10/12 md:w-3/4 lg:w-8/12 xl:w-3/5 2xl:w-3/6"></div>
            <div className="h-1/5 w-full bg-white mb-2 sm:w-10/12 md:w-3/4 lg:w-8/12 xl:w-3/5 2xl:w-3/6"></div>
            <div className="h-1/5 w-full bg-white mb-2 sm:w-10/12 md:w-3/4 lg:w-8/12 xl:w-3/5 2xl:w-3/6"></div>
          </div>
        </div>
      </div>
      <div className="h-3/5 flex justify-center  relative lg:h-[70%] xl:h-3/4 2xl:h-4/5 mt-24 sm:mt-36">
        <Image
          src="/vector7.png"
          className="w-5/6 h-full"
          alt="home-icon-02"
          height={500}
          width={500}
        />

        <div className="absolute top-0  h-full w-5/6 flex justify-center items-center ">
          <div className="h-3/4 relative">
            <Image
              src="/vector7.png"
              className="w-full h-full"
              alt="home-icon-02"
              height={500}
              width={500}
            />

            <div className="flex justify-center w-full h-full absolute top-0 ">
              <div className="leftSide  w-[46%] h-full flex justify-center items-center relative">
                <Image
                  className="modal-img ml-[2px]"
                  src="/gallery-pfp-details-image-01.png"
                  alt="col-icon"
                  height={490}
                  width={490}
                />
                <Image
                  className="absolute bottom-5 right-2 md:right-3 lg:right-6  "
                  src="/opensea-logo-white-01 1.png"
                  alt="col-icon"
                  height={40}
                  width={40}
                />
              </div>
              <div className="rightSide w-[54%] h-full flex flex-col justify-center items-start relative">
                <div className="profie-info ">
                  <div className="profie-info-picture">
                    <div className="logo">
                      <Image
                        className=" h-[80%] w-[80%]"
                        src="/logo.png"
                        alt="col-icon"
                        height={100}
                        width={100}
                      />
                    </div>
                  </div>
                  <div className="profie-info-content flex flex-col justify-center overflow-hidden">
                    <h1 className="text-xs sm:text-sm w-fit md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-bugfast">
                      SPACE DEFENDER NO. 1234
                    </h1>
                    <div className="profie-info-Inner-content">
                      {" "}
                      <h1 className="text-xs sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bugfast">
                        NO.{" "}
                      </h1>{" "}
                      <p className="text-xs leading-5 font-light w-fit sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                        {" "}
                        1234 | &zwnj;{" "}
                      </p>{" "}
                      <h1 className="text-xs sm:text-sm   md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bugfast">
                        OWNER:
                      </h1>{" "}
                      <p className="text-xs leading-5 font-light sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
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
                <div className="closet-Items scroll-bar  overflow-y-auto overflow-x-hidden h-[45%] w-full flex flex-wrap items-center justify-start relative">
                  {[...Array(10)].map((_, i) => {
                    return (
                      <div className="closet-item" key={i}>
                        <Image
                          src="/vector4.png"
                          alt=""
                          className="h-full w-full"
                          height={1000}
                          width={1000}
                        />
                        <div className="closet-item-content flex flex-col w-full h-full justify-center pl-3 xl:pl-0 absolute top-0 left-3 xl:left-7 2xl:left-8">
                          <h1 className="text-sm py-0 my-0 leading-4 font-bugfast">
                            BACKGROUND
                          </h1>
                          <p className="text-sm font-thin py-0 my-0 leading-4">
                            Dark Matter
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="h-[30%] w-full flex justify-center items-start flex-col relative overflow-hidden">
                  <Image
                    src="/vector5.png"
                    alt=""
                    className="h-full w-[98%]"
                    height={1000}
                    width={1000}
                  />
                  <div className="absolute top-4 w-[98%]">
                    <h1 className="h-1/5 ml-[2%] font-bugfast ">BackStory</h1>
                    <p className="mt-2 h-[60%] ml-[2%] text-sm w-[98%]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla veniam fugit ex beatae officiis ad ratione eligendi
                      atque. Consectetur quia accusamus provident rem sun t
                      maiores quaerat odit inventore natus culpa Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Asperiores
                      alias aliquam dolores voluptates minus. Commodi tenetur,
                      ipsa odit esse explicabo placeat modi nisi accusamus! At
                      esse officia, illo, quam est numquam molestiae unde qui
                      pariatur blanditiis ut, incidunt assumenda ab..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;

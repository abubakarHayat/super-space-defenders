import Image from "next/image";
import bg from "../../../public/cyberpunk-bg-01.jpeg";
function Collection() {
  const COLLECTION_ICONS: { src: string }[] = [
    { src: "/aurora-collection-icon-01.png" },
    { src: "/aurora-collection-icon-01.png" },
    // { src: "/ssd-collection-icon-01.png" },
    { src: "/lucifer-collection-icon-01.png" },
  ];
  return (
    <div
      className="collection flex flex-col items-center pt-10 md:pt-10 xl:h-130v mt-30n md:mt-90n relative"
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
      }}
    >
      <Image
        className="hidden lg:block absolute left-40 top-16"
        src="/ssd-char-06.png"
        alt="char"
        height={1000}
        width={550}
        style={{ zIndex: "-99" }}
      />
      <div className="group w-11/12 xl:w-9/12 h-full text-white flex flex-col space-y-5 justify-center items-center xl:items-end xl:self-end xl:pr-36">
        <div className="font-bugfast flex justify-center mb-10">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-right xl:text-head">
            LUCIFER <span className="text-lucifer">PROJECT</span>
          </p>
        </div>
        <div className="w-full xl:w-8/12 flex flex-col space-y-8">
          <div className="capsules grid justify-items-center gap-y-3 xl:flex xl:space-x-5">
            <div className="w-60 h-8 xl:h-10 xl:p-2 bg-black flex items-center justify-center">
              <p>1,111 COLLECTIBLES</p>
            </div>
            <div className="w-60 h-8 xl:h-10 bg-black flex items-center justify-center">
              <p>678 COLLECTORS</p>
            </div>
            <div className="w-60 h-8 xl:h-10 bg-black flex items-center justify-center">
              <p>500 ETH VOLUME</p>
            </div>
          </div>
          <div className="cap-text text-center xl:text-left justify-self-start">
            <p className="text-md md:text-xl xl:text-2xl">
              Minerva Bellatrix, the Commander of the Rebellion, stole a ship
              containing 1,111 Capsules from the evil hands of the Yamamoto
              Family. What they discovered in the capsules changes the fate of
              the Universe forever...{" "}
            </p>
          </div>
        </div>
        <div className="">
          <div className="group-1 grid grid-cols-3">
            {COLLECTION_ICONS.map((el, i) => {
              return (
                <div key={i}>
                  <Image
                    className="icon-gray"
                    src={el.src}
                    alt="collection-icon"
                    height={200}
                    width={200}
                  />
                </div>
              );
            })}
          </div>
          <div className="group-2 my-5 flex justify-end space-x-8 flex-wrap">
            <Image
              src="/opensea-logo-white-01.png"
              alt="blyr-logo"
              height={50}
              width={50}
            />
            {/* " bg-black text-white w-56 text-xl" */}
            <button className="bg-red-500 w-52 btn-con-wallet h-10">
              VIEW GALLERY
            </button>
            <button className="bg-red-500 w-52 btn-con-wallet h-10">
              COLLECTION DETAILS
            </button>
          </div>
        </div>
      </div>
      <div
        className="char-list w-full  flex flex-col"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <div className="flex justify-evenly space-x-5 my-2 overflow-hidden">
          {[...Array(10)].map((_, i) => {
            if (i % 2 === 0) {
              return (
                <p
                  key={i}
                  className="font-bugfast text-xl lg:text-2xl text-white whitespace-nowrap"
                >
                  LUCIFER PROJECT
                </p>
              );
            } else {
              return (
                <p
                  key={i}
                  className="font-bugfast text-xl lg:text-2xl text-lucifer whitespace-nowrap"
                >
                  LUCIFER PROJECT
                </p>
              );
            }
          })}
        </div>
        <div className="char-list flex overflow-x-scroll">
          {[...Array(12)].map((_, i) => {
            if (i > 8) {
              return (
                <Image
                  key={i}
                  className="object-cover"
                  src={`/PFPs/ssd-pfp-${i + 1}.jpg`}
                  alt="pfp"
                  height={220}
                  width={220}
                />
              );
            } else {
              return (
                <Image
                  key={i}
                  className="object-cover"
                  src={`/PFPs/ssd-pfp-0${i + 1}.jpg`}
                  alt="pfp"
                  height={220}
                  width={220}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default Collection;

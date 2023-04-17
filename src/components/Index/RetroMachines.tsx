import Image from "next/image";
import bg from "../../../public/retro-bg-02.png";
function RetroMachines() {
  return (
    <div
      className="retro flex flex-col items-center pt-10 md:pt-10 h-screen md:h-120v xl:h-130v mt-30n md:mt-90n relative"
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
      }}
    >
      <Image
        className="hidden lg:block absolute left-10 top-32 -z-10"
        src="/retro-machine-01.png"
        alt="retro machine"
        height={1000}
        width={800}
      />
      <div className="retro-content w-11/12 xl:w-9/12 h-full text-white flex flex-col space-y-5 justify-center items-center xl:items-end xl:self-end xl:pr-36">
        <div className="font-bugfast flex justify-center mb-10">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-right xl:text-head">
            R.E.T.R.O. MACHINES
          </p>
        </div>
        <div className="w-full xl:w-8/12 flex flex-col space-y-8">
          <div className="cap-text text-center xl:text-left justify-self-start">
            <p className="text-md md:text-xl xl:text-2xl">
              The Aurora Sapiens, a new species produced by Elite replication
              technology, have now colonized the Universe. With your help,
              they&apos;ll be able to find a place in society, experience
              everything that life has to offer, and battle in the name of the
              different factions. Choose your side: Elite, Rebel, or Citizen.
            </p>
          </div>
          <button className="bg-red-500 w-44 btn-con-wallet h-10 self-end">
            LEARN MORE
          </button>
        </div>
        <div className="chars flex space-x-2 items-center justify-center md:justify-start sm:space-x-5">
          <button className="relative h-8 w-6 sm:h-10 sm:w-8 md:h-14 md:w-10 lg:h-16 lg:w-14 xl:h-20 xl:w-16">
            <Image src="/left-polygon.png" alt="left button image" fill />
          </button>
          <div className="relative h-20 w-14 sm:h-28 sm:w-20 md:h-36 md:w-28 lg:h-44 lg:w-36 xl:h-52 xl:w-44">
            <Image src="/home-banner-icon-01.png" alt="home-icon-01" fill />
          </div>
          <div className="relative h-20 w-14 sm:h-28 sm:w-20 md:h-36 md:w-28 lg:h-44 lg:w-36 xl:h-52 xl:w-44">
            <Image src="/home-banner-icon-02.png" alt="home-icon-02" fill />
          </div>
          <div className="relative h-20 w-14 sm:h-28 sm:w-20 md:h-36 md:w-28 lg:h-44 lg:w-36 xl:h-52 xl:w-44">
            <Image src="/home-banner-icon-03.png" alt="home-icon-03" fill />
          </div>
          <div className="relative h-20 w-14 sm:h-28 sm:w-20 md:h-36 md:w-28 lg:h-44 lg:w-36 xl:h-52 xl:w-44">
            <Image src="/home-banner-icon-04.png" alt="home-icon-04" fill />
          </div>

          <button className="relative h-8 w-6 sm:h-10 sm:w-8 md:h-14 md:w-10 lg:h-16 lg:w-14 xl:h-20 xl:w-16">
            <Image src="/right-polygon.png" alt="right button image" fill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RetroMachines;

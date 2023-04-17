import Navbar from "../Navbar";
import Image from "next/image";
import bg from "../../../public/galaxy-bg-01.png";

function HolomapMain() {
  return (
    <div
      className="h-screen w-screen overflow-x-hidden"
      style={{ background: `url(${bg.src})` }}
    >
      <Navbar />
      <div className="holomap-content w-full h-full relative">
        <div className="relative cursor-pointer sun w-[12rem] h-[12rem] xs:w-[17rem] xs:h-[17rem] sm:w-[25rem] sm:h-[25rem] md:w-[30rem] md:h-[30rem] lg:w-[35rem] lg:h-[35rem] xl:w-[40rem] xl:h-[40rem] 2xl:w-[48rem] 2xl:h-[48rem]">
          <Image src="/sun-01.png" alt="sun" fill />
        </div>
        <div className="planet-01 absolute w-[3.5rem] h-[3.5rem] xs:w-[6rem] xs:h-[6rem] sm:w-[8rem] sm:h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem] 2xl:w-[18rem] 2xl:h-[18rem]">
          <Image src="/planet-01.png" alt="planet 1" fill />
        </div>
        <div className="planet-02 absolute w-[3.5rem] h-[3rem] xs:w-[6rem] xs:h-[6rem] sm:w-[8rem] sm:h-[7.25rem] md:w-[10rem] md:h-[8.25rem] lg:w-[12rem] lg:h-[10.25rem] xl:w-[15rem] xl:h-[13.25rem] 2xl:w-[18rem] 2xl:h-[16.25rem]">
          <Image src="/planet-02.png" alt="planet 2" fill />
        </div>
        <div className="planet-03 absolute w-[4.75rem] h-[4.25rem] xs:w-[6rem] xs:h-[6rem] sm:w-[9rem] sm:h-[8.25rem] md:w-[10rem] md:h-[9.25rem] lg:w-[12rem] lg:h-[11.25rem] xl:w-[15rem] xl:h-[14.25rem] 2xl:w-[18rem] 2xl:h-[17.25rem]">
          <Image src="/planet-03.png" alt="planet 3" fill />
        </div>
        <div className="planet-04 absolute w-[5rem] h-[5.5rem] xs:w-[6rem] xs:h-[6.5rem] sm:w-[8rem] sm:h-[8.25rem] md:w-[10rem] md:h-[10.5rem] lg:w-[12rem] lg:h-[12.5rem] xl:w-[15rem] xl:h-[15.5rem] 2xl:w-[18rem] 2xl:h-[18.5rem]">
          <Image src="/planet-04.png" alt="planet 4" fill />
        </div>
        <div className="moon-01 absolute w-[2rem] h-[2.25rem] xs:w-[3rem] xs:h-[3.25rem] sm:w-[3.5rem] sm:h-[3.75rem] md:w-[4rem] md:h-[4.25rem] lg:w-[5rem] lg:h-[5.25rem] xl:w-[6rem] xl:h-[6.25rem] 2xl:w-[7rem] 2xl:h-[7.25rem]">
          <Image src="/moon-01.png" alt="Moon 1" fill />
        </div>
        <div className="moon-02 absolute w-[1.75rem] h-[2.5rem] xs:w-[3rem] xs:h-[3.25rem] sm:w-[3.5rem] sm:h-[4.5rem] md:w-[3rem] md:h-[4.25rem] lg:w-[3.75rem] lg:h-[5.25rem] xl:w-[4.25rem] xl:h-[6.25rem] 2xl:w-[5rem] 2xl:h-[7rem]">
          <Image src="/moon-02.png" alt="Moon 2" fill />
        </div>
        <div className="moon-03 absolute w-[3.75rem] h-[2.5rem] xs:w-[5.25rem] xs:h-[3rem] sm:w-[5.5rem] sm:h-[3.25rem] md:w-[5.75rem] md:h-[3.5rem] lg:w-[6rem] lg:h-[3.75rem] xl:w-[6.25rem] xl:h-[4rem] 2xl:w-[7.25rem] 2xl:h-[5rem]">
          <Image src="/moon-03.png" alt="Moon 3" fill />
        </div>
        <div className="moon-04 absolute w-[4rem] h-[4.25rem] xs:w-[5.25rem] xs:h-[5rem] sm:w-[5.25rem] sm:h-[5.75rem] md:w-[6.5rem] md:h-[6.75rem] lg:w-[6.75rem] lg:h-[7rem] xl:w-[7rem] xl:h-[7.25rem] 2xl:w-[7.25rem] 2xl:h-[7.75rem]">
          <Image src="/moon-04.png" alt="Moon 4" fill />
        </div>
        <div className="moon-05 absolute w-[2.75rem] h-[2.5rem] sm:w-[5rem] sm:h-[4rem] md:w-[5.25rem] md:h-[4.25rem] lg:w-[5.5rem] lg:h-[4.5rem] xl:w-[6rem] xl:h-[5rem] 2xl:w-[7rem] 2xl:h-[6rem]">
          <Image src="/moon-05.png" alt="Moon 5" fill />
        </div>
        <div className="spacestation-01 absolute w-[6rem] h-[3rem] sm:w-[10rem] sm:h-[5rem] md:w-[11.5rem] md:h-[5.75rem] lg:w-[10rem] lg:h-[5rem] xl:w-[12rem] xl:h-[6rem] 2xl:w-[14rem] 2xl:h-[7rem]">
          <Image src="/spacestation-01.png" alt="Spacestation 1" fill />
        </div>
        <div className="galaxy-01 absolute w-[6.25rem] h-[6rem] sm:w-[8.25rem] sm:h-[8rem] md:w-[10.25rem] md:h-[10rem] lg:w-[11.25rem] lg:h-[11rem] xl:w-[12.25rem] xl:h-[12rem] 2xl:w-[15.25rem] 2xl:h-[15rem]">
          <Image src="/galaxy-01.png" alt="Galaxy 1" fill />
        </div>
      </div>
    </div>
  );
}

export default HolomapMain;

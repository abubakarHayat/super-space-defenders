import Image from "next/image";
import bg from "../../public/carousel-banner-bg-01.jpg";
import Navbar from "./Navbar";
function Carousel() {
  return (
    <div className="carousel-bg">
      <div
        className="carousel h-full md:h-120v xl:h-130v w-full mix-blend-overlay"
        style={{
          background: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className="grid h-5/6 con">
          <div className="main-section flex flex-col space-y-10 p-10 lg:p-0 lg:ml-40 place-content-center">
            <div className="content grid grid-cols-1 gap-y-4 lg:w-40v">
              <Image
                src="/ssd-logo-01.png"
                alt="ssd-logo-main"
                height={450}
                width={600}
              />
              <p className="text-white sm:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                quasi rem laborum beatae quod magni quis optio impedit placeat
                in ipsam iusto veritatis praesentium ex necessitatibus enim
                accusantium corrupti dolores! 3
              </p>
              <button className="bg-red-500 w-44 btn-con-wallet h-10">
              LEARN MORE
            </button>
            </div>
            <div className="chars flex space-x-3 flex-wrap justify-center sm:justify-start sm:space-x-10">
              <Image
                src="/home-banner-icon-01.png"
                alt="home-icon-01"
                height={175}
                width={175}
              />
              <Image
                src="/home-banner-icon-02.png"
                alt="home-icon-02"
                height={175}
                width={175}
              />
              <Image
                src="/home-banner-icon-03.png"
                alt="home-icon-03"
                height={175}
                width={175}
              />
              <Image
                src="/home-banner-icon-04.png"
                alt="home-icon-04"
                height={175}
                width={175}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

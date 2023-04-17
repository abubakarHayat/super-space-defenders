import Image from "next/image";
import bg from "../../../public/ssd-bg-03.png";
import Navbar from "../Navbar";
function Carousel() {
  return (
    <div
      className="carousel h-screen w-full mix-blend-overlay"
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="grid h-5/6 con">
        <div className="main-section flex justify-center items-center">
          <Image
            src="/ssd-logo-01.png"
            alt="ssd-logo-main"
            height={450}
            width={600}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;

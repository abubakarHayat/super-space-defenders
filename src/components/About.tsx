import bg from "../../public/space-bg-01.jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";

function About() {
  return (
    <div
      style={{
        background: `url(${bg.src})`,
      }}
    >
      <Navbar />
      <div className="w-5/6 m-auto flex ">
        <div className="w-full flex justify-center items-center">
          <Image
            className="h-4/5 w-4/5"
            src="/Rectangle 23.png"
            alt="col-icon"
            height={100}
            width={100}
          />
        </div>
        <div className="w-full flex justify-center flex-col ">
          <div className="overflow-y-auto w-4/5  h-28 sm:h-4/5 scroll-bar">
            <h1 className="font-bugfast sm:text-lg xl:text-6xl text-white">
              Soldiers <br /> Rise <br /> Togather
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              pellentesque efficitur quam vel mattis. Nulla placerat, justo sed
              tempor pellentesque, nulla quam porttitor magna, vitae egestas
              purus leo id elit. Fusce ut massa gravida, lobortis justo a,
              pulvinar risus. In nec viverra dui, eu dignissim nulla.
            </p>
          </div>
        </div>
      </div>
      <div className="w-5/6 m-auto  my-3 lg:my-10">
        <h1 className="font-bugfast text-xl xl:text-6xl text-white my-1">
          The Team
        </h1>
        <Image
          className="w-3/5"
          src="/gallery-pfp-details-bar-white.png"
          alt="col-icon"
          height={1000}
          width={1000}
        />
      </div>
      <div className="w-5/6 m-auto flex ">
        <div className="flex w-full justify-center items-center flex-wrap  ">
          {[...Array(9)].map((_, i) => {
            return (
              <Image
                key={i}
                className="map-grid  hover:border-gray-400 border-transparent border-2"
                src="/Rectangle 23.png"
                alt="col-icon"
                height={100}
                width={100}
              />
            );
          })}
        </div>
        <div className="w-full flex justify-center items-center ">
          <Image
            className="h-4/5 w-4/5"
            src="/Rectangle 23.png"
            alt="col-icon"
            height={1000}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
}

export default About;

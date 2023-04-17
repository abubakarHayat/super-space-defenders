import Image from "next/image";
import Navbar from "../Navbar";
import bg from "../../../public/planet-details-bg-02.png";
import titleBar from "../../../public/page-title-bar-01.png";
function PlanetDetails() {
  return (
    <div
      className="w-screen h-screen overflow-x-hidden"
      style={{ background: `url(${bg.src})`, backgroundSize: "cover" }}
    >
      <Navbar />
      <div className="flex justify-center lg:justify-end mt-10 relative z-20">
        <Image
          className="absolute left-20 -z-10"
          src="/retro-machine-01.png"
          alt="retro machine"
          height={1000}
          width={900}
        />
        <div className="w-11/12 xl:w-9/12 h-full text-white flex flex-col space-y-5 justify-center items-center xl:items-end xl:self-end xl:pr-36">
          <div className="flex flex-col justify-center mb-10 items-end">
            <h2 className="text-xl">
              JUPITER MOON
              <span className="font-bugfast ml-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-right xl:text-head">
                EUROPA
              </span>
            </h2>
            <Image
              src="/page-title-bar-01.png"
              alt="title bar"
              width={810}
              height={30}
            />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <button className="btn-con-wallet col-span-3 lg:col-span-1 w-52 h-10 bg-red-600">
              OVERVIEW
            </button>
            <button className="btn-con-wallet col-span-3 lg:col-span-1 w-52 h-10 bg-red-600">
              ELITES
            </button>
            <button className="btn-con-wallet col-span-3 lg:col-span-1 w-52 h-10 bg-white text-red-600">
              R.E.T.R.O. MACHINES
            </button>
          </div>

          <div className="w-full lg:w-8/12 flex flex-col items-center xl:items-end space-y-8">
            <h2 className="font-bugfast text-5xl">R.E.T.R.O Machines</h2>

            <div className="cap-text text-center lg:text-left justify-self-start">
              <p className="text-md sm:text-lg md:text-xl xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. At
                lectus urna duis convallis convallis tellus id interdum velit. A
                arcu cursus vitae congue. Nulla pellentesque dignissim enim sit
                amet venenatis urna. Quisque id diam vel quam elementum pulvinar
                etiam. Amet aliquam id diam maecenas ultricies.
              </p>
              <br />
              <p className="text-md sm:text-lg md:text-xl xl:text-2xl">
                Malesuada fames ac turpis egestas maecenas. Odio aenean sed
                adipiscing diam. Cursus turpis massa tincidunt dui ut ornare
                lectus. Aliquam faucibus purus in massa tempor nec feugiat nisl.
                Nibh ipsum consequat nisl vel pretium lectus quam. Enim nulla
                aliquet porttitor lacus.
              </p>
              <br />
              <p className="text-md sm:text-lg md:text-xl xl:text-2xl">
                {" "}
                Id donec ultrices tincidunt arcu non sodales. Dignissim cras
                tincidunt lobortis feugiat. In massa tempor nec feugiat nisl
                pretium. Ut enim blandit volutpat maecenas volutpat blandit.
                Nisl suscipit adipiscing bibendum est ultricies integer quis.
                Sit amet mauris commodo quis imperdiet massa tincidunt nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanetDetails;

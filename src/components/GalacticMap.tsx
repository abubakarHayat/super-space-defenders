import bg from "../../public/holomap-bg-01.jpg";
function GalacticMap() {
  return (
    <div
      className="gal-map h-screen md:h-70v lg:h-screen flex flex-col items-end justify-end"
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="gal-map-content lg:mr-32 mb-32 flex flex-col items-center space-y-3 xl:items-end">
        <div className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-right xl:text-head">
          <p className="text-red-600 font-bugfast text-center">
            GALACTIC <span className="text-white">HOLOMAP</span>
          </p>
        </div>
        <div className="w-3/4 lg:w-2/4 mt-5">
          <p className="text-md md:text-xl xl:text-2xl text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ad
            autem odio ex maiores molestiae eaque ab quisquam, ipsam fugiat
            omnis magnam asperiores non mollitia libero suscipit eos esse!
            Ratione?
          </p>
        </div>
        <div className="cap-1 w-60 h-8 xl:h-10 mt-4 xl:w-60 bg-red-800 capsule flex items-center justify-center md:mt-0">
          <button className=" text-white w-64 h-16 text-xl text-center">
            EXPLORE HOLOMAP{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
export default GalacticMap;

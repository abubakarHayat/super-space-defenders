import bg from "../../../public/retro-arcade-gaming-bg-01.gif";
function Arcade() {
  return (
    <div
      className="gal-map h-screen md:h-70v lg:h-screen flex flex-col items-end justify-center"
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="gal-map-content xl:mr-32 mb-32 flex flex-col items-center space-y-3 xl:items-end">
        <div>
          <p className="text-white font-bugfast text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-right xl:text-head">
            DEFENDER&apos;S <span className="text-arcade">ARCADE</span>
          </p>
        </div>
        <div className="w-3/4 lg:w-2/4 mt-5">
          <p className="text-center xl:text-left text-md md:text-xl xl:text-2xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            venenatis arcu et lacinia pretium. Etiam magna purus, varius et elit
            eu, imperdiet varius ligula. Sed id elit lobortis, dapibus neque eu,
            tincidunt nulla.
          </p>
        </div>
        <button className="bg-red-500 w-64 btn-con-wallet h-14 text-white text-center text-xl">
          EXPLORE HOLOMAP{" "}
        </button>
      </div>
    </div>
  );
}
export default Arcade;

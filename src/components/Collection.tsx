import Image from "next/image";
import character from "../../public/Scye_Concept.png";

const COLLECTION_ICONS: { src: string }[] = [
    { src: "/aurora-collection-icon-01.png" },
    { src: "/aurora-collection-icon-01.png" },
    // { src: "/ssd-collection-icon-01.png" },
    { src: "/lucifer-collection-icon-01.png" },
];
export default function Collection() {
    return (
        <div className="collection bg-fixed bg-contain overflow-auto  bg-f flex flex-col scroll-bar">
            <div>
                <div className="h-40"></div>
                <div className="flex justify-evenly">
                    <div className='w-0  md:w-2/6 lg:w-2/4 flex justify-center items-end lg:items-start'>
                        <Image
                            className='h-max '
                            src={character}
                            alt="col-icon"
                            height={700}
                            width={500}
                        />
                    </div>
                    <div className=" group w-11/12 xl:w-10/12 h-full text-white flex flex-col space-y-5 justify-center items-center xl:items-end xl:self-end xl:pr-20 ">
                        <div className="font-bugfast flex justify-center mb-10">
                            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-right xl:text-head">
                                AURORA <span className="text-green-500">CAPSULES</span>
                            </p>
                        </div>
                        <div className="w-full xl:w-8/12 flex flex-col space-y-8">
                            <div className="capsules grid justify-items-center gap-y-3 xl:flex xl:space-x-5">
                                <button className="text-white bg-black w-64 h-10 text-lg text-center">
                                    4,444 COLLECTIBLES
                                </button>
                                <button className="text-white bg-black w-64 h-10 text-lg text-center">
                                    678 COLLECTORS
                                </button>
                                <button className="text-white bg-black w-64 h-10 text-lg text-center">
                                    500 ETH VOLUME
                                </button>

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
                        <div className="group-2 mt-10 mb-12 flex flex-col justify-center items-center space-x-8 md:flex-row">
                            <Image
                                src="/opensea-logo-blue-01.png"
                                alt="blyr-logo"
                                height={65}
                                width={65}
                            />
                            <div className="cap-1 w-60 h-8  mt-4  xl:h-10 xl:w-60 bg-red-800 capsule flex items-center justify-center md:mt-0">
                                <button className=" text-white w-56 text-xl">
                                    VIEW Gallery
                                </button>
                            </div>
                            <div className="cap-1 w-60 h-8 xl:h-10 mt-4 xl:w-60 bg-red-800 capsule flex items-center justify-center md:mt-0">
                                <button className=" text-white w-56 text-xl">
                                    COLLECTION DETAILS
                                </button>
                            </div>
                        </div>
                        <div className="mt-10 mb-10">
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

                        </div>
                    </div>
                </div>
                <div className="h-96"></div>
                <div className="h-96"></div>
                <div
                    className="char-list pt-1 flex mt-5 w-full overflow-x-scroll md:pb-3 md:pt-0"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                >
                    {[...Array(100)].map((_, i) => {
                        return (

                            <h1 className="font-bugfast text-lg sm:text-4xl xl:text-3xl even:text-blue-900 odd:text-red-900 mt-3  mx-3" key={i} > SuperSpaceDefenders </h1>

                        );
                    })}
                </div>
                <div
                    className="char-list flex  w-full overflow-x-scroll"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                >
                    {[...Array(1000)].map((_, i) => {
                        return (
                            <Image
                                key={i}
                                className="object-cover"
                                src={`/PFPs/ssd-pfp-0${i % 9 + 1}.jpg`}
                                alt="pfp"
                                height={220}
                                width={220}
                            />
                        );
                    })}
                </div>
            </div>

        </div>

    );
}
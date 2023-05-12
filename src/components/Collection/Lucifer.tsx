import { useState } from "react";
import Image from "next/image";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import { parseEther, formatBytes32String } from "ethers/lib/utils.js";
import luciferAbi from "../../abi/lucifer-abi.json";

import { toast } from "react-toastify";
import Navbar from "../Navbar";
import bg from "../../../public/Rectangle12.png";

const LUCIFER_VAL: number = 0.05;

function CollectionLucifer() {
  const [mintValue, setMintValue] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [totalValue, setTotalValue] = useState(LUCIFER_VAL);
  const { config } = usePrepareContractWrite({
    address: "0x3f5492798A65bb05F9Da37516BDb17540681A3B1",
    abi: luciferAbi,
    functionName: "mintToken",
    args: [mintValue, [formatBytes32String("")]],
    overrides: {
      value: parseEther(totalValue.toString()),
    },
    onSuccess(data) {
      toast.success("Success!");
      console.log("Success", data);
    },
    onError(error) {
      toast.error("Error in Minting!");
      console.log("Error", error);
    },
    onSettled(data, error) {
      console.log("Settled", { data, error });
    },
  });
  const { writeAsync } = useContractWrite(config);

  const handleMint = async () => {
    try {
      const tx = await writeAsync?.();
      let reciept = tx?.wait();
      console.log("Receipt: ", reciept);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecrease = () => {
    if (mintValue > 1) {
      setMintValue((prevState: number) => {
        let t_val = Math.round(LUCIFER_VAL * (prevState - 1) * 1e12) / 1e12;
        setTotalValue(t_val);
        return prevState - 1;
      });
    }
  };
  const handleIncrease = () => {
    if (mintValue < 5) {
      setMintValue((prevState: number) => {
        let t_val = Math.round(LUCIFER_VAL * (prevState + 1) * 1e12) / 1e12;
        setTotalValue(t_val);
        return prevState + 1;
      });
    }
  };
  const handleModalState = () => {
    console.log("TotalVal: ", totalValue);
    console.log();
    setModalOpen(!modalOpen);
  };
  return (
    <div
      className="w-full relative overflow-y-hidden"
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <Navbar />

      <Image
        className="hidden lg:block absolute 2xl:left-64 xl:left-40 lg:left-16"
        src="/ssd-char-06.png"
        alt="sdd character"
        height={1000}
        width={500}
      />

      <div className="main-content flex flex-col mt-10 text-white">
        <div className="content-text z-20 self-center flex flex-col mx-6 lg:self-end lg:w-5/12 lg:mr-36">
          <div className="heading mb-10">
            <h1 className="font-bugfast text-2xl md:text-4xl xl:text-5xl">
              {" "}
              SUPER SPACE DEFENDERS
            </h1>
            <div className="relative w-full h-3">
              <Image
                src="/gallery-pfp-details-bar-white.png"
                alt="details bar"
                fill
              />
            </div>
          </div>
          <div className="text-lg">
            <strong>Project Lucifer</strong> is comprised of 6,666 Cloned
            Individuals. They share the same universe of Super Space Defenders,
            facing the same challenges and opportunities for new adventures.
            <ul className="mt-5" style={{ listStyle: "square" }}>
              <li className="mt-5">
                Lucifers share most of the Super Space Defenders benefits.
              </li>
              <li className="mt-5">
                Just like SSD, you&apos;ll have access to exclusive
                community-focused events such as NFT Drops, Lore Building
                Activities, and more!{" "}
              </li>
              <li className="mt-5">
                Access to <strong>Defender&apos;s Arcade</strong>
              </li>
              <li className="mt-5">
                Increasing your Multiplier during major Airdrops/Launches if
                owning a Capsule or Defender.
              </li>
              <li className="mt-5">
                Admission to participate in our upcoming{" "}
                <strong>&ldquo;Crafting&rdquo;</strong> &{" "}
                <strong>&ldquo;Economy&rdquo;</strong>
                Systems.
              </li>
              <li className="mt-5">
                Exclusive holder only bonuses in upcoming product campaign.
              </li>
            </ul>
          </div>
          <div className="btn-section self-center mt-5 flex flex-col gap-y-2 md:flex-row w-full md:w-2/3 lg:w-full justify-around items-center">
            <div className="relative h-10 w-10 xl:h-16 xl:w-16">
              <Image src="/opensea-logo-white-01.png" alt="opensea logo" fill />
            </div>
            <button className="bg-[#FF0000] px-5 w-52 btn-con-wallet h-10 lg:h-10 xl:h-14">
              VIEW GALLERY
            </button>
            <button
              className="bg-[#FF0000] px-5 w-52 btn-con-wallet h-10 lg:h-10 xl:h-14"
              onClick={handleModalState}
            >
              MINT SPACE DEFENDER
            </button>
          </div>
          <div className="mt-5 font-bold text-center">
            1,530 COLLECTIBLES | 680 OWNERS | 26% UNIQUE OWNERS | 500 ETH TOTAL
            VOLUME
          </div>
        </div>
      </div>
      <div className="char-list flex overflow-x-scroll mt-10 w-full relative">
        {[...Array(9)].map((_, i) => {
          return (
            <Image
              key={i}
              className="object-cover"
              src={`/lucifer-collection/lucifer-pfp-0${i + 1}.png`}
              alt="pfp"
              height={220}
              width={220}
            />
          );
        })}
      </div>

      {/* ----------------------- modal ------------------------- */}
      {modalOpen && (
        <div className="flex justify-center z-30 relative">
          <Image
            src="/vector3.png"
            alt=""
            className="w-[90%] h-[40%] md:h-[43%] fixed top-[150px] bg-trasparent opacity-90 sm:w-3/4 md:w-[60%] lg:w-2/4 xl:w-[40%] 2xl:w-[30%]"
            height={1000}
            width={1000}
          />

          <div className="modal-content flex justify-start items-center flex-col overflow-hidden h-[40%] md:h-[43%] w-[90%] fixed top-[150px]  z-20 sm:w-3/4 md:w-[60%] lg:w-2/4 xl:w-[40%] 2xl:w-[30%]">
            <button
              className="absolute right-2 top-3 rotate-[60deg] sm:top-6 sm:right-1 font-bugfast text-white"
              onClick={handleModalState}
            >
              Close
            </button>
            <h1 className="font-bugfast text-md md:text-2xl mt-10">
              Mint Lucifer
            </h1>
            <div className="h-[65%] w-[80%]  flex justify-center items-start mt-5">
              <div className="w-2/4 h-full flex justify-center items-center">
                <Image
                  src="/lucifer-collection/lucifer-pfp-01.png"
                  alt=""
                  className="h-full w-[92%] rounded-lg"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className="w-2/4 h-full flex flex-col items-center justify-between ">
                <div className="h-3/4 overflow-auto scroll-bar">
                  <p className="text-sm">
                    Mint your Lucifers and join either the Elites, Rebels, or
                    Citizens.
                  </p>
                </div>
                <div className=" w-full flex justify-between flex-col">
                  <h6 className="text-white mt-2 mb-1 text-sm font-semibold ">
                    2,914 / 4,444 AVAILABLE
                  </h6>
                  <div className=" flex justify-center w-full h-[50%]">
                    <div className=" w-1/3  flex justify-between">
                      <div className="w-[60%] bg-white flex justify-center items-center text-lg">
                        {mintValue}
                      </div>
                      <div className="w-[37%] flex flex-col justify-between">
                        <button
                          className="h-[47%] bg-white"
                          onClick={handleIncrease}
                        >
                          +
                        </button>
                        <button
                          className="h-[47%] bg-white"
                          onClick={handleDecrease}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div
                      className="h-full w-2/3 flex items-center justify-center relative cursor-pointer"
                      onClick={handleMint}
                    >
                      <Image
                        className="w-[90%] h-full"
                        src="/vector1.png"
                        alt="pfp"
                        height={100}
                        width={100}
                      />
                      <p className="absolute text-white text-2xl">MINT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CollectionLucifer;

import { useState } from "react";
import Image from "next/image";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import ssdAbi from "../../abi/ssd-abi.json";

import Navbar from "../Navbar";
import bg from "../../../public/Rectangle12.png";
import { toast } from "react-toastify";
import { parseEther } from "ethers/lib/utils.js";

const SSD_VAL: number = 0.07;

function CollectionDetail() {
  const [totalValue, setTotalValue] = useState<number>(SSD_VAL);
  const [mintValue, setMintValue] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { config } = usePrepareContractWrite({
    address: "0x6ea26EcDe564df85d4C631e041Ff7630296B08b8",
    abi: ssdAbi,
    functionName: "mintToken",
    args: [mintValue],
    overrides: {
      value: parseEther(totalValue.toString()),
    },
    onSuccess(data) {
      toast.success("Success!");
      console.log("Success", data);
    },
    onError(error) {
      toast.error(error.message);
      console.log("Error", error);
    },
    onSettled(data, error) {
      console.log("Settled", { data, error });
    },
  });
  const { writeAsync, data } = useContractWrite(config);

  const { isLoading, isError, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleMint = async () => {
    try {
      const tx = await writeAsync?.();
      if (isLoading) {
        toast("Transaction in process..");
      } else if (isError) {
        toast.error("Error in minting!");
      } else if (isSuccess) {
        toast.success("Minted!");
        console.log(data);
      }
      let reciept = tx?.wait();
      console.log("Receipt: ", reciept);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDecrease = () => {
    if (mintValue > 1) {
      setMintValue((prevState: number) => {
        let t_val = Math.round(SSD_VAL * (prevState - 1) * 1e12) / 1e12;
        setTotalValue(t_val);
        return prevState - 1;
      });
    }
  };
  const handleIncrease = () => {
    if (mintValue < 5) {
      setMintValue((prevState: number) => {
        let t_val = Math.round(SSD_VAL * (prevState + 1) * 1e12) / 1e12;
        setTotalValue(t_val);
        return prevState + 1;
      });
    }
  };
  const handleModalState = () => {
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
        src="/ssd-char-03.png"
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
            The Super Space Defenders collection is comprised of 4,444
            hand-drawn 2D avatars inspired by the &lsquo;80s & &lsquo;90s anime
            art style. This collection has been meticulously crafted and
            organized to represent a wide variety of aesthetics. Each Defender
            possesses a unique combination of traits and rarities such as
            origin, political affinity, hairstyles, etc., creating an original
            character for every holder. The Super Space Defenders come with
            exclusive holder rewards including but not limited to:
            <ul className="mt-5" style={{ listStyle: "square" }}>
              <li className="mt-5">
                Entry to exclusive community-focused events such as NFT Drops,
                Lore Building Activities, and more!
              </li>
              <li className="mt-5">
                Access to the &ldquo;Defenders Arcade&rdquo;.
              </li>
              <li className="mt-5">
                Admission to participate in our upcoming &ldquo;Crafting &
                Economy&rdquo; Systems.
              </li>
              <li className="mt-5">
                Participate in the creative and production process in all SSD
                development.
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
      <div className="char-list flex overflow-x-scroll mt-10 relative">
        {[...Array(12)].map((_, i) => {
          if (i > 8) {
            return (
              <Image
                key={i}
                className="object-cover"
                src={`/ssd-collection/ssd-pfp-${i + 1}.jpg`}
                alt="pfp"
                height={220}
                width={220}
              />
            );
          }
          return (
            <Image
              key={i}
              className="object-cover"
              src={`/ssd-collection/ssd-pfp-0${i + 1}.jpg`}
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
              Mint Super Space Defender
            </h1>
            <div className="h-[65%] w-[80%]  flex justify-center items-start mt-5">
              <div className="w-2/4 h-full flex justify-center items-center">
                <Image
                  src="/modalPic.png"
                  alt=""
                  className="h-full  w-[92%] rounded-lg"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className="w-2/4 h-full flex flex-col items-center justify-between ">
                <div className="h-3/4 overflow-auto scroll-bar">
                  <p className="text-sm">
                    Mint your Super Space Defender and join either the Elites,
                    Rebels, or Citizens.
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
                      <p className="absolute text-white text-2xl ">MINT</p>
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

export default CollectionDetail;

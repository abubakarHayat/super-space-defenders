import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useConnect, useDisconnect, useAccount } from "wagmi";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { address, connector, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const [isOpen, setIsOpen] = useState(false);
  const [conText, setConText] = useState("CONNECT WALLET");

  const connectWallet = async () => {
    try {
      console.log("isLoading: ", isLoading);
      console.log("connector:", connector);
      console.log("connectors: ", connectors);
      console.log("pendingConnector: ", pendingConnector);
      // if (isLoading && connector && connector.id === pendingConnector?.id) {
      //   console.log("PC: ", pendingConnector);
      //   toast.error("Connecting");
      //   return;
      // }
      if (connectors[0].ready) {
        if (isConnected) {
          disconnect();
          setConText("CONNECT WALLET");
          toast.success("Wallet disconnected!");
        } else {
          connect({ connector: connectors[0] });

          if (isLoading) {
            toast.warn("Connecting wallet!");
          } else {
            setConText("DISCONNECT WALLET");
            toast.success("Wallet connected!");
          }
        }
      } else {
        toast.error("Wallet not found!");
      }
    } catch (error) {
      console.log("H", error);
    }
  };
  return (
    <>
      <ToastContainer />
      <nav className="hidden lg:flex w-5/6 mx-auto h-32 justify-between items-center">
        <div>
          <Image
            src="/ssd-logo-01.png"
            alt="ssd-logo"
            height={150}
            width={250}
          />
        </div>
        <div>
          <ul className="flex lg:space-x-3 xl:space-x-5 w-full text-white items-center lg:text-sm 2xl:text-xl">
            <li className="cursor-pointer hover:border-white hover:border-b-2">
              <Link href="/">
                <span>HOME</span>
              </Link>
            </li>
            <li className="cursor-pointer hover:border-white hover:border-b-2">
              <Link href="collection">
                <span>COLLECTIONS</span>
              </Link>
            </li>
            <li className="cursor-pointer hover:border-white hover:border-b-2">
              <Link href="holomap">
                <span>HOLOMAP</span>
              </Link>
            </li>
            <li className="cursor-pointer hover:border-white hover:border-b-2">
              <Link href="lore">
                <span>LORE</span>
              </Link>
            </li>
            <li className="cursor-pointer hover:border-white hover:border-b-2">
              <Link href="defenders-arcade">
                <span>ARCADE</span>
              </Link>
            </li>
            <li className="cursor-pointer hover:border-white hover:border-b-2">
              <Link href="about">
                <span>ABOUT</span>
              </Link>
            </li>
            <li className="text-xl lg:text-sm xl:text-xl text-white">
              <button
                className="bg-red-500 px-5 xl:w-50 btn-con-wallet h-14 lg:h-10 xl:h-14 disabled:bg-slate-600"
                onClick={connectWallet}
                disabled={isLoading}
              >
                {conText}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="grid lg:hidden grid-cols-2 justify-items-stretch w-full">
        <Image
          src="/ssd-logo-01.png"
          alt="ssd-logo"
          height={120}
          width={200}
          className="justify-self-start"
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white mr-2 justify-self-end"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
        <ul
          className={`text-md justify-items-center text-white w-full col-span-2 ${
            isOpen ? "grid" : "hidden"
          }`}
        >
          <li className="hover:bg-red-200 rounded-md p-2">
            <Link href="/">
              <span>HOME</span>
            </Link>
          </li>
          <li className="hover:bg-red-200 rounded-md p-2">
            <Link href="collection">
              <span>COLLECTIONS</span>
            </Link>
          </li>
          <li className="hover:bg-red-200 rounded-md p-2">
            <Link href="holomap">
              <span>HOLOMAP</span>
            </Link>
          </li>
          <li className="hover:bg-red-200 rounded-md p-2">
            <Link href="lore">
              <span>LORE</span>
            </Link>
          </li>
          <li className="hover:bg-red-200 rounded-md p-2">
            <Link href="defenders-arcade">
              <span>ARCADE</span>
            </Link>
          </li>
          <li className="hover:bg-red-200 rounded-md p-2">
            <Link href="about">
              <span>ABOUT</span>
            </Link>
          </li>
          <li className="text-md text-white">
            <button
              className="bg-red-500 w-44 btn-con-wallet h-10 disabled:bg-slate-600"
              onClick={connectWallet}
              disabled={isLoading}
            >
              {conText}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

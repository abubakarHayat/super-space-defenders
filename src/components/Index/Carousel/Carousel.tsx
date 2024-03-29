import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import bg from "../../../../public/cyberpunk-bg-01.jpeg";
function Carousel() {
  const COLLECTION_ICONS: { src: string }[] = [
    { src: "/aurora-collection-icon-01.png" },
    { src: "/ssd-collection-icon-01.png" },
    { src: "/lucifer-collection-icon-01.png" },
  ];

  const CAROUSEL_ITEMS = {
    ssd: {
      acronym: "ssd",
      name: "SUPER SPACE DEFENDERS",
      head1: "SPACE",
      head2: "DEFENDER",
      color: "text-defender",
      src: "/ssd-char-03.png",
      text: `The Super Space Defenders collection is comprised of 4,444 hand-drawn 2D avatars inspired by the '80s & '90s anime art style.
      This collection has been meticulously crafted and organized to represent a wide variety of aesthetics.
      Each Defender possesses a unique combination of traits and rarities such as origin,
      political affinity, hairstyles, etc., creating an original character for every holder.
      `,
      collection: [
        "/ssd-collection/ssd-pfp-01.jpg",
        "/ssd-collection/ssd-pfp-02.jpg",
        "/ssd-collection/ssd-pfp-03.jpg",
        "/ssd-collection/ssd-pfp-04.jpg",
        "/ssd-collection/ssd-pfp-05.jpg",
        "/ssd-collection/ssd-pfp-06.jpg",
        "/ssd-collection/ssd-pfp-07.jpg",
        "/ssd-collection/ssd-pfp-08.jpg",
        "/ssd-collection/ssd-pfp-09.jpg",
        "/ssd-collection/ssd-pfp-10.jpg",
        "/ssd-collection/ssd-pfp-11.jpg",
        "/ssd-collection/ssd-pfp-12.jpg",
      ],
    },
    lucifer: {
      acronym: "lucifer",
      name: "LUCIFER PROJECT",
      head1: "LUCIFER",
      head2: "PROJECT",
      color: "text-lucifer",
      src: "/ssd-char-06.png",
      text: `Project Lucifer is comprised of 6,666 Cloned Individuals.
      They share the same universe of Super Space Defenders, facing the same challenges and
      opportunities for new adventures.
      Lucifers share most of the Super Space Defenders benefits.`,
      collection: [
        "/lucifer-collection/lucifer-pfp-01.png",
        "/lucifer-collection/lucifer-pfp-02.png",
        "/lucifer-collection/lucifer-pfp-03.png",
        "/lucifer-collection/lucifer-pfp-04.png",
        "/lucifer-collection/lucifer-pfp-05.png",
        "/lucifer-collection/lucifer-pfp-06.png",
        "/lucifer-collection/lucifer-pfp-07.png",
        "/lucifer-collection/lucifer-pfp-08.png",
        "/lucifer-collection/lucifer-pfp-09.png",
      ],
    },
  };

  const [active, setActive] = useState<Number>(0);

  const [mainChar, setMainChar] = useState(CAROUSEL_ITEMS.lucifer.src);
  const [acronym, setAcronym] = useState(CAROUSEL_ITEMS.lucifer.acronym);
  const [mainText, setMainText] = useState(CAROUSEL_ITEMS.lucifer.text);
  const [mainHead1, setMainHead1] = useState(CAROUSEL_ITEMS.lucifer.head1);
  const [mainHead2, setMainHead2] = useState(CAROUSEL_ITEMS.lucifer.head2);
  const [headColor, setHeadColor] = useState(CAROUSEL_ITEMS.lucifer.color);
  const [carouselGallery, setCarouselGallery] = useState(
    CAROUSEL_ITEMS.lucifer.collection
  );

  const ssdHandler = (i: Number) => {
    setActive(i);
    setAcronym(CAROUSEL_ITEMS.ssd.acronym);
    setMainChar(CAROUSEL_ITEMS.ssd.src);
    setMainText(CAROUSEL_ITEMS.ssd.text);
    setCarouselGallery(CAROUSEL_ITEMS.ssd.collection);
    setMainHead1(CAROUSEL_ITEMS.ssd.head1);
    setMainHead2(CAROUSEL_ITEMS.ssd.head2);
    setHeadColor(CAROUSEL_ITEMS.ssd.color);
  };

  const luciferHandler = (i: Number) => {
    setActive(i);
    setAcronym(CAROUSEL_ITEMS.lucifer.acronym);
    setMainChar(CAROUSEL_ITEMS.lucifer.src);
    setMainText(CAROUSEL_ITEMS.lucifer.text);
    setCarouselGallery(CAROUSEL_ITEMS.lucifer.collection);
    setMainHead1(CAROUSEL_ITEMS.lucifer.head1);
    setMainHead2(CAROUSEL_ITEMS.lucifer.head2);
    setHeadColor(CAROUSEL_ITEMS.lucifer.color);
  };
  return (
    <div
      className="collection flex flex-col items-center pt-10 md:pt-10 xl:h-130v mt-30n md:mt-90n relative"
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
      }}
    >
      <Image
        className="hidden lg:block absolute left-40 top-16"
        src={mainChar}
        alt="char"
        height={1000}
        width={550}
        style={{ zIndex: "-99" }}
      />
      <div className="group w-11/12 xl:w-9/12 h-full text-white flex flex-col space-y-5 justify-center items-center xl:items-end xl:self-end xl:pr-36">
        <div className="font-bugfast flex justify-center mb-10">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-right xl:text-head">
            {mainHead1} <span className={headColor}>{mainHead2}</span>
          </p>
        </div>
        <div className="w-full xl:w-8/12 flex flex-col space-y-8">
          <div className="capsules grid justify-items-center gap-y-3 xl:flex xl:space-x-5">
            <div className="w-60 h-8 xl:h-10 xl:p-2 bg-black flex items-center justify-center">
              <p>1,111 COLLECTIBLES</p>
            </div>
            <div className="w-60 h-8 xl:h-10 bg-black flex items-center justify-center">
              <p>678 COLLECTORS</p>
            </div>
            <div className="w-60 h-8 xl:h-10 bg-black flex items-center justify-center">
              <p>500 ETH VOLUME</p>
            </div>
          </div>
          <div className="cap-text text-center xl:text-left justify-self-start">
            <p className="text-md md:text-xl xl:text-2xl">{mainText}</p>
          </div>
        </div>
        <div className="">
          <div className="group-1 grid grid-cols-3">
            {COLLECTION_ICONS.map((el, i) => {
              if (i === 1) {
                return (
                  <div
                    key={i}
                    className="flex justify-center"
                    onClick={() => ssdHandler(i)}
                  >
                    <Image
                      className={active === i ? "" : "icon-gray"}
                      src={el.src}
                      alt="collection-icon"
                      height={150}
                      width={123}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={i} onClick={() => luciferHandler(i)}>
                    <Image
                      className={active === i ? "" : "icon-gray"}
                      src={el.src}
                      alt="collection-icon"
                      height={150}
                      width={150}
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className="group-2 my-5 flex justify-end space-x-8 flex-wrap">
            <Image
              src="/opensea-logo-white-01.png"
              alt="blyr-logo"
              height={50}
              width={50}
            />
            <button className="bg-red-500 w-52 btn-con-wallet h-10">
              VIEW GALLERY
            </button>
            <Link href={`/collection/${acronym}`}>
              <button className="bg-red-500 w-52 btn-con-wallet h-10">
                COLLECTION DETAILS
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="char-list w-full  flex flex-col"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <div className="flex justify-evenly space-x-5 my-2 overflow-hidden">
          {[...Array(10)].map((_, i) => {
            if (i % 2 === 0) {
              return (
                <p
                  key={i}
                  className="font-bugfast text-xl lg:text-2xl text-white whitespace-nowrap"
                >
                  {mainHead1} {mainHead2}
                </p>
              );
            } else {
              return (
                <p
                  key={i}
                  className={`font-bugfast text-xl lg:text-2xl ${headColor} whitespace-nowrap`}
                >
                  {mainHead1} {mainHead2}
                </p>
              );
            }
          })}
        </div>
        <div className="char-list flex overflow-x-scroll">
          {carouselGallery.map((el, i) => {
            return (
              <Image
                key={i}
                className="object-cover"
                src={el}
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
export default Carousel;

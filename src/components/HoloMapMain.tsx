import bg from "../../public/space-bg-01.jpg"
import Image from "next/image";
import Navbar from "./Navbar";
function HoloMapMain() {
    return (
        <div
            className="py-12 h-screen w-full overflow-hidden" 
            style={{
                background: `url(${bg.src})`
            }}>
            <Navbar/>
            <Image
                className="w-11/12 lg:w-10/12 h-full  m-auto"
                src="/Solar System.png"
                alt="col-icon"
                height={1000}
                width={1000}
            />

        </div>
    )
}

export default HoloMapMain
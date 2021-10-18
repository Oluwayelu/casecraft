import Navbar from "../Navbar";
import Image from "next/image";
import Button from "../Button";

export default function Hero() {
  return (
    <div className=" sm:h-screen flex flex-col justify-between">
      <Navbar />
      <main className="mx-5 sm:mx-40 h-96 sm:h-screen  flex flex-col-reverse sm:flex-row jusitfy-between items-center text-[#2F2651]">
        <div className="sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-medium  mb-2">
            <span className=" text-[#9672FB] ">Design</span>
            <br />
            Cases <br /> for your <br /> gadgets
          </h1>

          <Button>Download app</Button>
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/hero.svg"
            layout="fill"
            alt="casecraft mobile"
            objectPosition="right"
            className="object-contain filter"
          />
        </div>
      </main>
      <div />
    </div>
  );
}

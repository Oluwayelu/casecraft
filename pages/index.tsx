/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F9] font-title z-0">
      <Head>
        <title>CaseCraft Nigeria</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Hero />
      <div className="mx-5 sm:mx-40 my-10 flex flex-col items-center text-center">
        <h1 className="text-xl sm:text-4xl font-semibold">We're Casecraft</h1>
        <p className=" text-lg sm:text-xl text-left sm:text-center font-light">
          We bring your imaginations to life by giving you the power & ability
          to create amazing, outstanding, breathtaking & spectacular cases for
          your gadgets
        </p>
        <Button>How it works</Button>
      </div>
      <div
        className="h-80 sm:min-h-screen bg-center bg-contain sm:bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/phones.svg')",
        }}
      />
      <div className="mx-5 sm:mx-40 my-10 flex flex-col items-start text-left">
        <h3 className="text-lg sm:text-xl text-[#7A7490] font-medium italic">
          A tool that makes you
        </h3>
        <h1 className="text-xl sm:text-4xl text-[#9672FB] font-semibold ">
          A Superhero
        </h1>
        <p className=" text-lg sm:text-xl text-left text-[#7A7490] font-light">
          Stand upright, wear your cape and put on some tight <br /> superman
          pants.
        </p>
        <div className="relative h-60 sm:h-screen w-full self-end">
          <Image
            src="/images/phones-tool.svg"
            alt="phone tools"
            layout="fill"
          />
        </div>
      </div>
      <div className="mx-5 sm:mx-40 my-10 flex flex-col items-start text-left">
        <h3 className="text-lg sm:text-xl text-[#7A7490] font-medium italic">
          Get full access to
        </h3>
        <h1 className="text-xl sm:text-4xl text-[#9672FB] font-semibold ">
          Photos & Patterns
        </h1>
        <p className=" text-lg sm:text-xl text-left text-[#7A7490] font-light">
          Explore photos, patterns, colors & gradients designed by the <br />{" "}
          best designers or simply use yours
        </p>
        <div className="relative h-60 sm:h-screen w-full">
          <Image
            src="/images/phones-pattern.svg"
            alt="phone tools"
            layout="fill"
          />
        </div>
      </div>
      <div className="mx-10 sm:mx-40 h-screen flex flex-col-reverse sm:flex-row jusitfy-between items-center text-[#2F2651]">
        <div className="sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-medium  mb-2">
            Why CaseCraft?
          </h1>
          <p className="mb-5">
            Your gadgets weep all day as they crave for a makeover or anything
            at all to cover their tender & expensive parts, now you'll not just
            be doing your wallet a favor by protecting them you'll also get to
            make them look good and blend with style
          </p>
          <Button>Download app</Button>
        </div>
        <div className="relative w-full sm:w-1/2 h-full">
          <Image
            src="/images/earpod.svg"
            layout="fill"
            alt="casecraft mobile"
            objectPosition="right"
            className="object-contain filter"
          />
        </div>
      </div>
      <div
        id="tutorials"
        className="h-80 sm:min-h-screen bg-center bg-contain sm:bg-cover bg-no-repeat flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/images/vid_cover.svg')",
        }}
      >
        <div className="relative w-5 h-5 sm:w-10 sm:h-10">
          <Image
            src="/icons/play.svg"
            layout="fill"
            alt="play"
            objectPosition="right"
            className="object-contain filter"
          />
        </div>
        <p className="text-lg sm:text-xl text-white">How CaseCraft works</p>
      </div>
      <div className="h-60 py-5 flex justify-center items-start text-center">
        <div className="h-full inline-flex flex-col justify-between">
          <h1 className="text-2xl sm:text-4xl font-medium  mb-2">
            Get started now
          </h1>
          <div className="inline-flex items-center justify-center ">
            <div className="flex flex-col sm:flex-row ">
              <Button className="my-5 ">
                <div className="flex items-center">
                  <div className="relative w-5 h-5">
                    <Image
                      src="/icons/apple.svg"
                      layout="fill"
                      alt="casecraft mobile"
                      objectPosition="right"
                      className="object-contain filter"
                    />
                  </div>
                  <p className="text-xs font-extralight">
                    Download on the <br />{" "}
                    <span className="-mt-10 text-lg font-medium">
                      App Store
                    </span>{" "}
                  </p>
                </div>
              </Button>
              <Button className="my-5 ">
                <div className="flex items-center">
                  <div className="relative w-5 h-5">
                    <Image
                      src="/icons/play_store.svg"
                      layout="fill"
                      alt="casecraft mobile"
                      objectPosition="right"
                      className="object-contain filter"
                    />
                  </div>
                  <p className="text-xs font-extralight">
                    Download on the <br />{" "}
                    <span className="-mt-10 text-lg font-medium">
                      App Store
                    </span>{" "}
                  </p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-80 sm:min-h-screen bg-center bg-contain sm:bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/app_screens.svg')",
        }}
      />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

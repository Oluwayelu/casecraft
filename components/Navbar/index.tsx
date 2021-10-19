/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`flex flex-col top-0 w-full fixed bg-[#F6F6F9] z-30 ${
        open &&
        "transform w-full overflow-auto ease-in-out transition-all duration-500 z-30 translate-y-0 border rounded-b-3xl bg-white"
      }`}
    >
      <div className="mx-5 sm:mx-40 h-20  flex items-center justify-between italic font-medium">
        <div className="w-20 flex items-center">
          <img src="/logo.svg" alt="logo" />
          <p className="font-semibold text-[#2F2651]">CaseCraft</p>
        </div>
        <div className="flex items-center">
          <Link href="/#tutorials">
            <a className="text-gray-800 mx-3 hidden md:inline-block hover:text-[#9672FB] focus:text-[#9672FB]">
              Tutorials
            </a>
          </Link>
          <Link href="/#download">
            <a className="text-gray-800 mx-3 hidden md:inline-block hover:text-[#9672FB] focus:text-[#9672FB]">
              Download
            </a>
          </Link>
          <Link href="/#features">
            <a className="text-gray-800 mx-3 hidden md:inline-block hover:text-[#9672FB] focus:text-[#9672FB]">
              Features
            </a>
          </Link>
          <Link href="/#faqs">
            <a className="text-gray-800 mx-3 hidden md:inline-block hover:text-[#9672FB] focus:text-[#9672FB]">
              FAQS
            </a>
          </Link>

          {open ? (
            <div
              className="md:hidden w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center"
              onClick={() => setOpen(!open)}
            >
              <Image
                src="/icons/close.svg"
                width={10}
                height={10}
                alt="close"
              />
            </div>
          ) : (
            <div className="md:hidden block" onClick={() => setOpen(!open)}>
              <Image src="/icons/menu.svg" width={50} height={50} alt="menu" />
            </div>
          )}
        </div>
      </div>
      {open && <Dropdown />}
    </div>
  );
}

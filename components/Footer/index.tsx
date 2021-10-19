import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-5 sm:mx-40 pt-10 pb-20 flex flex-col sm:flex-row justify-center items-start">
      <div className="mb-2 sm:mb-0 sm:mr-12 flex flex-col">
        <div className=" w-20 flex items-center">
          <img src="/logo.svg" alt="logo" />
          <p className="font-semibold text-[#2F2651]">CaseCraft</p>
        </div>
        <div className="flex mt-2 sm:mt-5">
          <div className="mr-2 w-5 h-5 relative">
            <Image src="/icons/dribble.svg" layout="fill" alt="dribbble" />
          </div>
          <div className="mx-2 w-5 h-5 relative">
            <Image src="/icons/instagram.svg" layout="fill" alt="dribbble" />
          </div>
          <div className="mx-2 w-5 h-5 relative">
            <Image src="/icons/twitter.svg" layout="fill" alt="dribbble" />
          </div>
        </div>
      </div>
      <div className="my-2 sm:my-0 sm:mx-12 flex flex-col">
        <h3 className="text-lg text-[#2F2651] font-medium italic">CaseCraft</h3>
        <p className="text-sm text-[#A19DAF] font-medium italic">Updates</p>
        <p className="text-sm text-[#A19DAF] font-medium italic">Tutorials</p>
        <p className="text-sm text-[#A19DAF] font-medium italic">Teams</p>
        <p className="text-sm text-[#A19DAF] font-medium italic">Enterprise</p>
        <p className="text-sm text-[#A19DAF] font-medium italic">Blog</p>
      </div>
      <div className="my-2 sm:my-0 sm:mx-12 flex flex-col">
        <h3 className="text-lg text-[#2F2651] font-medium italic">Platform</h3>
        <p className="text-sm text-[#A19DAF] font-medium italic">
          Web (<span className="text-[#9672FB]">join waitlist</span>)
        </p>
        <p className="text-sm text-[#A19DAF] font-medium italic">iOS</p>
        <p className="text-sm text-[#A19DAF] font-medium italic">Android</p>
      </div>
      <div className="mt-2 sm:mt-0 sm:ml-12 flex flex-col">
        <h3 className="text-lg text-[#2F2651] font-medium italic">About</h3>
        <p className="text-sm text-[#A19DAF] font-medium italic">Community</p>
        <p className="text-sm text-[#A19DAF] font-medium italic">Company</p>
        <p className="text-sm text-[#A19DAF] font-medium italic">Careers</p>
        <p className="text-sm text-[#A19DAF] font-medium italic">Security</p>
      </div>
    </footer>
  );
}

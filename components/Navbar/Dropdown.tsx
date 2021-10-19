import Image from "next/image";
import Link from "next/link";

function Dropdown() {
  return (
    // transform top-0 left-0 w-64 bg-gray-500 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30
    <div className="flex justify-center">
      <div className="w-40 mb-5 inline-flex flex-col italic font-medium text-sm">
        <Link href="/#tutorials" passHref>
          <div className="py-3 flex items-start justify-between focus:px-5 hover:text-[#9672FB]">
            <p className="text-gray-800">Tutorials</p>
            <Image src="/icons/arrow.svg" width={50} height={12} alt="arrow" />
          </div>
        </Link>
        <Link href="/#download" passHref>
          <div className="py-3 flex items-start justify-between">
            <p className="text-gray-800">Download</p>
            <Image src="/icons/arrow.svg" width={50} height={12} alt="arrow" />
          </div>
        </Link>

        <Link href="/#features" passHref>
          <div className="py-3 flex items-start justify-between">
            <p className="text-gray-800">Features</p>
            <div className=""></div>
            <Image src="/icons/arrow.svg" width={50} height={12} alt="arrow" />
          </div>
        </Link>

        <Link href="/#faqs" passHref>
          <div className="py-3 flex items-start justify-between">
            <p className="text-gray-800">FAQs</p>
            <Image src="/icons/arrow.svg" width={50} height={12} alt="arrow" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Dropdown;

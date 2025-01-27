import React from 'react';
import Image from 'next/image';

const YourData: React.FC = () => {
  return (
    <div className="w-full max-w-[1920px] min-h-[661px] px-4 md:px-8 lg:px-20 xl:px-32 2xl:px-48 py-10 lg:py-[140px] flex flex-col lg:flex-row justify-between items-center mx-auto">
      <div className="flex-grow-0 lg:flex-shrink-0 lg:w-1/2 flex flex-col justify-start lg:justify-start items-center lg:items-start gap-6 lg:gap-10 text-center lg:text-left">
        <h1 className="text-[#212529] text-3xl md:text-5xl lg:text-7xl font-bold font-['DM Sans']">
          100% your data
        </h1>
        <p className="text-[#212529] text-base md:text-lg lg:text-xl font-normal font-['DM Sans'] leading-[30px]">
          The app is open source and your notes are saved to an open format, so you&apos;ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no one but yourself can access them.
        </p>
        <button className="px-10 py-5 bg-[#4f9cf9] rounded-lg text-white text-base md:text-lg lg:text-xl font-medium font-['DM Sans'] leading-[23px]">
          Read more
        </button>
      </div>
      <div className="relative w-full lg:w-1/2 h-[381px] mt-10 lg:mt-0 flex justify-center items-center">
        <div className="relative w-full h-full">
          <Image
            src="/images/element.png"
            alt="Your Data Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default YourData;

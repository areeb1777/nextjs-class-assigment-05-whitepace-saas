import React from 'react';
import Image from 'next/image';

const Extension: React.FC = () => {
  return (
    <div className="w-full max-w-[1920px] min-h-[656.39px] px-4 md:px-8 lg:px-20 xl:px-32 py-10 bg-[#043873] flex flex-col lg:flex-row justify-between items-center mx-auto">
      <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-6 lg:gap-[60px] flex-grow text-center lg:text-left">
        <h1 className="text-white text-3xl md:text-4xl lg:text-[64px] font-bold font-['DM Sans'] leading-tight lg:leading-none">
          Use as Extension
        </h1>
        <div className="w-full h-[4px] md:h-[8px] bg-yellow-200 my-2"></div> {/* Yellow design element */}
        <p className="text-white text-base md:text-lg lg:text-xl font-normal font-['DM Sans'] leading-6 lg:leading-[30px]">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
        </p>
        <button className="px-6 py-4 bg-[#4f9cf9] rounded-lg flex items-center gap-2.5 text-white text-base md:text-lg lg:text-xl font-medium font-['DM Sans'] leading-6 lg:leading-[23px]">
          Let&apos;s Go
          <span className="text-lg">&rarr;</span>
        </button>
      </div>
      <div className="w-full lg:w-[600px] h-[400px] relative mt-10 lg:mt-0 lg:ml-10">
        <Image
          src="/images/Image-container.png"
          alt="Extension Image"
          fill
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default Extension;

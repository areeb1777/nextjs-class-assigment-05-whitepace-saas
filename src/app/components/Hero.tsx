import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-[1920px] min-h-[656.39px] px-4 md:px-8 lg:px-20 xl:px-32 py-10 bg-[#043873] flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-center mx-auto">
      <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-6 lg:gap-[60px] flex-grow text-center lg:text-left">
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 lg:gap-6">
          <h1 className="text-white text-3xl md:text-4xl lg:text-[64px] font-bold font-['DM Sans'] leading-tight lg:leading-none">
            Get More Done with whitepace
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl font-normal font-['DM Sans'] leading-6 lg:leading-[30px]">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
          </p>
        </div>
        <div className="p-3 md:p-5 bg-[#4f9cf9] rounded-lg flex justify-center items-center gap-2.5">
          <span className="text-white text-base md:text-lg lg:text-xl font-medium font-['DM Sans'] leading-6 lg:leading-[23px]">
            Try Whitepace free
          </span>
        </div>
      </div>
      <div className="w-full md:w-[800px] h-[300px] relative mt-10 lg:mt-0 lg:ml-10">
        <Image
          src="/images/image-container.png" 
          alt="Description of Image"
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

export default Hero;

import React from "react";
import Image from "next/image";

const CustomComponent: React.FC = () => {
  return (
    <div className="w-full h-auto px-8 py-28 bg-[#043873] flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:gap-5 gap-24">
      <div className="w-full lg:w-1/2 h-auto relative flex justify-center lg:justify-start">
        <Image
          src="/images/apps.png"
          alt="Customize Image"
          layout="responsive"
          width={500}
          height={300}
          objectFit="cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-6 text-white">
        <div className="text-center lg:text-left text-3xl lg:text-7xl font-bold font-['DM Sans'] leading-tight">
          Work with Your Favorite Apps Using Whitepace
        </div>
        <div className="text-center lg:text-left text-base lg:text-lg font-normal font-['DM Sans'] leading-[30px]">
          Whitepace teams up with your favorite software. Integrate with over
          1000+ apps with Zapier to have all the tools you need for your project
          success.
        </div>
        <div className="px-6 py-3 lg:px-10 lg:py-5 bg-[#4f9cf9] rounded-lg flex justify-center items-center gap-2.5">
          <div className="text-base lg:text-lg font-medium font-['DM Sans'] leading-[23px]">
            Read more
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;

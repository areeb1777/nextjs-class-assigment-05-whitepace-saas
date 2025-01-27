import React from 'react';
import Image from 'next/image';

const WorkTogether: React.FC = () => {
  return (
    <div className="w-full max-w-[1920px] px-4 md:px-8 lg:px-20 xl:px-32 py-10 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-center mx-auto bg-white">
      <div className="order-2 lg:order-1 w-full lg:w-1/2 flex justify-center items-center lg:justify-start lg:items-start mb-10 lg:mb-0">
        <div className="relative w-[200px] h-[200px] lg:mr-16 lg:w-[500px] lg:h-[500px]">
          <Image
            src="/images/work-togather.png" // Update the path to your image
            alt="Work Together Icon"
            fill
            sizes="(max-width: 768px) 100vw, 
                   (max-width: 1200px) 50vw, 
                   33vw"
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="order-1 lg:order-2 w-full lg:w-1/2 flex flex-col justify-center items-center lg:justify-start lg:items-start text-center lg:text-left gap-6 lg:gap-10">
        <h1 className="text-[#212529] text-3xl md:text-4xl lg:text-5xl font-bold font-['DM Sans'] leading-tight">
          Work together
        </h1>
        <div className="w-full h-[4px] md:h-[8px] bg-yellow-200 my-2"></div> {/* Yellow design element */}
        <p className="text-[#212529] text-base md:text-lg lg:text-xl font-normal font-['DM Sans'] leading-6 lg:leading-[30px]">
          With this setup, share your ideas, collaborate, and brainstorm with others. You can also join sessions to brainstorm ideas live with others.
        </p>
        <button className="px-6 py-4 bg-[#4f9cf9] rounded-lg flex items-center gap-2.5 text-white text-base md:text-lg lg:text-xl font-medium font-['DM Sans'] leading-6 lg:leading-[23px]">
          Try it now
          <span className="text-lg">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default WorkTogether;

import React from 'react';
import Image from 'next/image';

const ProjectManagement: React.FC = () => {
  return (
    <div className="w-full max-w-[1920px] min-h-[448px] px-4 md:px-8 lg:px-20 xl:px-32 py-10 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-center mx-auto">
      <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-6 lg:gap-[60px] flex-grow text-center lg:text-left">
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 lg:gap-6">
          <h1 className="text-[#212529] text-3xl md:text-4xl lg:text-7xl font-bold font-['DM Sans'] leading-tight lg:leading-none">
            Project <br />
            Management
          </h1>
          <div className="w-full md:w-[515.61px] h-[4px] md:h-[8px] bg-yellow-200 my-2"></div>  {/* Yellow design element */}
          <p className="text-[#212529] text-base md:text-lg lg:text-xl font-normal font-['DM Sans'] leading-6 lg:leading-[30px]">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
        </div>
        <div className="px-4 md:px-10 py-3 md:py-5 bg-[#4f9cf9] rounded-lg flex justify-center items-center gap-2.5">
          <span className="text-white text-base md:text-lg lg:text-xl font-medium font-['DM Sans'] leading-6 lg:leading-[23px]">
            Get Started
          </span>
        </div>
      </div>
      <div className="w-full md:w-[800px] lg:w-[1000px] h-[200px] md:h-[400px] relative mt-10 lg:mt-0 lg:ml-10">
        <Image
          src="/images/Image-container.png"
          alt="Description of Image"
          fill
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 33vw"
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProjectManagement;

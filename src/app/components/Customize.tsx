import React from 'react';
import Image from 'next/image';

const Customize: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] min-h-[779.30px] px-8 py-[140px] flex flex-col lg:flex-row justify-between items-center gap-[60px] mx-auto">
      <div className="flex-col justify-start items-start lg:justify-start lg:items-start gap-1 inline-flex">
        <div className="relative w-[300px] h-[300px] lg:w-[670px] lg:h-[499.30px] bg-[#c4defd]">
          <Image
            src="/images/image-container.png" // Update the path to your image
            alt="Customize Image"
            fill
            sizes="(max-width: 768px) 100vw, 
                   (max-width: 1200px) 50vw, 
                   33vw"
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex-grow flex-col justify-center items-center lg:justify-start lg:items-start gap-[60px] text-center lg:text-left inline-flex">
        <div className="flex-col justify-start items-start gap-6">
          <h1 className="text-[#212529] text-3xl md:text-4xl lg:text-[64px] font-bold font-['DM Sans'] leading-tight lg:leading-none">
            Customise it to your needs
          </h1>
          <div className="w-full h-[4px] md:h-[8px] bg-yellow-200 my-2"></div> {/* Yellow design element */}
          <p className="text-[#212529] text-base md:text-lg lg:text-xl font-normal font-['DM Sans'] leading-[30px]">
            Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
        </div>
        <div className="px-4 md:px-10 py-3 md:py-5 bg-[#4f9cf9] rounded-lg flex justify-center items-center gap-2.5">
          <span className="text-white text-base md:text-lg lg:text-xl font-medium font-['DM Sans'] leading-6 lg:leading-[23px]">
            Let’s Go
          </span>
          <span className="text-lg">&rarr;</span>
        </div>
      </div>
    </div>
  );
};

export default Customize;

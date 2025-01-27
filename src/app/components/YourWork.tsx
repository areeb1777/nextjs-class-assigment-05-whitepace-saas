import React from 'react';

const YourWork: React.FC = () => {
  return (
    <div className="w-full max-w-[1920px] min-h-[574px] px-4 md:px-8 lg:px-20 xl:px-32 2xl:px-48 py-10 lg:py-[140px] bg-[#043873] flex flex-col justify-start items-center mx-auto">
      <div className="w-full flex flex-col justify-start items-center gap-[40px] lg:gap-[60px]">
        <div className="flex flex-col justify-start items-center gap-6 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-['DM Sans'] whitespace-nowrap">
            Your work, everywhere you are
          </h1>
          <div className="w-[314px] h-[6px]"></div> {/* Empty space as placeholder */}
          <p className="text-white text-base md:text-lg lg:text-xl font-normal font-['DM Sans'] leading-[30px]">
            Access your notes from your computer, phone, or tablet by synchronizing with various services, including whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
          </p>
        </div>
        <button className="px-8 md:px-10 py-4 md:py-5 bg-[#4f9cf9] rounded-lg flex justify-center items-center gap-2.5 text-white text-base md:text-lg lg:text-xl font-medium font-['DM Sans'] leading-[23px]">
          Try Taskey
        </button>
      </div>
    </div>
  );
};

export default YourWork;

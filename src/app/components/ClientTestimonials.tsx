import React from 'react';
import Image from 'next/image';

const commonStyles = "flex flex-col justify-start items-start gap-8 hover:bg-opacity-90 transition-all duration-300";
const textStyles = "text-center lg:text-left text-base lg:text-lg font-normal font-['DM Sans'] leading-[30px]";
const nameStyles = "text-2xl font-semibold font-['DM Sans'] leading-9";
const titleStyles = "text-base font-normal font-['DM Sans'] leading-tight";

const ClientTestimonials: React.FC = () => {
  return (
    <div className="w-full h-auto px-8 py-28 flex flex-col justify-center items-center gap-16">
      <div className="text-center text-[#212529] text-7xl font-bold font-['DM Sans']">
        What Our Clients Says
        <div className="mx-auto w-1/4 h-1 bg-yellow-200 mt-2"></div>
      </div>
      <div className="flex flex-wrap justify-center lg:flex-nowrap items-center gap-8">
        {[{
          bg: 'bg-white',
          text: 'text-[#212529]',
          border: 'border-[#212529]',
          hover: 'hover:bg-[#4f9cf9]',
          imgSrc: '/images/avater1.png',
          nameColor: 'text-[#212529]',
          titleColor: 'text-[#212529]'
        }, {
          bg: 'bg-white',
          text: 'text-[#212529]',
          border: 'border-[#212529]',
          hover: 'hover:bg-[#4f9cf9]',
          imgSrc: '/images/avater2.png',
          nameColor: 'text-[#043873]',
          titleColor: 'text-[#212529]'
        }, {
          bg: 'bg-white',
          text: 'text-[#212529]',
          border: 'border-[#212529]',
          hover: 'hover:bg-[#4f9cf9]',
          imgSrc: '/images/avater3.png',
          nameColor: 'text-[#043873]',
          titleColor: 'text-[#212529]'
        }].map((style, index) => (
          <div key={index} className={`w-full lg:w-1/3 p-6 ${style.bg} rounded-lg shadow-lg ${commonStyles} ${style.hover}`}>
            <div className={`w-full h-auto pb-10 border-b ${style.border}`}>
              <p className={`${style.text} ${textStyles}`}>
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
            </div>
            <div className="w-full flex justify-start items-center gap-8">
              <Image className="rounded-full" src={style.imgSrc} alt="Client Avatar" width={95} height={95} />
              <div className="flex flex-col justify-start items-start gap-2">
                <p className={`${style.nameColor} ${nameStyles}`}>Oberon Shaw, MCH</p>
                <p className={`${style.titleColor} ${titleStyles}`}>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-3">
        {["bg-[#4f9cf9]", "bg-[#043873]", "bg-[#4f9cf9]"].map((bg, index) => (
          <div key={index} className={`w-3 h-3 ${bg} rounded-full cursor-pointer hover:bg-opacity-90`}></div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TryWhitepace: React.FC = () => {
  return (
    <div className="w-full h-auto px-8 pt-36 pb-8 bg-[#043873] flex flex-col justify-center items-center gap-24">
      <div className="flex flex-col justify-start items-center gap-10">
        <div className="flex flex-col justify-start items-center gap-6">
          <h1 className="text-center text-white text-7xl font-bold font-['DM Sans'] leading-tight">
            Try Whitepace
            <br />
            today
          </h1>
          <p className="text-center text-white text-2xl font-normal font-['DM Sans'] leading-loose">
            Get started for free.
            <br />
            Add your whole team as your needs grow.
          </p>
        </div>
        <Link href="/try" passHref>
          <div className="px-10 py-5 bg-[#4f9cf9] rounded-lg flex justify-center items-center gap-2.5 text-white text-lg font-medium font-['DM Sans'] leading-[23px] hover:bg-[#377ab4] transition-all duration-300">
            Try Taskey free
          </div>
        </Link>
        <Link href="/sales" passHref>
          <div className="text-center text-white text-2xl font-normal font-['DM Sans'] leading-loose">
            On a big team? Contact sales
          </div>
        </Link>
        <div className="flex justify-center items-center gap-10">
          <div className="w-15 h-15 flex justify-center items-center overflow-hidden">
            <Image src="/images/apple-white.png" alt="Apple Logo" width={60} height={60} />
          </div>
          <div className="w-15 h-15 flex justify-center items-center overflow-hidden">
            <Image src="/images/android.png" alt="Android Logo" width={60} height={60} />
          </div>
          <div className="w-15 h-15 flex justify-center items-center overflow-hidden">
            <Image src="/images/windows.png" alt="Windows Logo" width={60} height={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryWhitepace;

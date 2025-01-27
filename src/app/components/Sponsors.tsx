import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Sponsors: React.FC = () => {
  return (
    <div className="w-full h-auto px-8 py-28 flex flex-col justify-center items-center gap-12">
      <div className="w-full text-center text-gray-800 text-7xl font-bold font-inter relative mb-4">
        Our sponsors
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[300px] h-1 bg-yellow-200 mt-2"></div>
      </div>
      <div className="w-84 h-10 relative"></div>
      <div className="w-full flex justify-between items-center flex-wrap gap-4">
        <div className="flex justify-center items-center mb-4 w-full md:w-auto">
          <Link href="https://example.com/sponsor1" passHref>
            <Image src="/images/apple.png" alt="Apple" width={55} height={68} />
          </Link>
        </div>
        <div className="flex justify-center items-center mb-4 w-full md:w-auto">
          <Link href="https://example.com/sponsor2" passHref>
            <Image src="/images/microsoft.png" alt="Microsoft" width={287} height={62} />
          </Link>
        </div>
        <div className="flex justify-center items-center mb-4 w-full md:w-auto">
          <Link href="https://example.com/sponsor3" passHref>
            <Image src="/images/slack.png" alt="Slack" width={280} height={71} />
          </Link>
        </div>
        <div className="flex justify-center items-center mb-4 w-full md:w-auto">
          <Link href="https://example.com/sponsor4" passHref>
            <Image src="/images/google.png" alt="Google" width={211} height={69} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

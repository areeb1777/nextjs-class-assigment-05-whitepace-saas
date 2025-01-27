import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const textBase = "text-white text-base font-normal font-['DM Sans'] leading-tight";
const sectionBase = "flex flex-col justify-start items-start gap-4";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-auto px-8 pt-36 pb-8 bg-[#043873] flex flex-col justify-center items-center gap-24">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
        <div className="flex flex-col justify-start items-start gap-3">
          <div className="relative flex items-center">
            <Image src="/images/Logo.png" alt="Whitepace Logo" width={200} height={150} />
          </div>
          <p className={`${textBase} text-[#f7f7ee]`}>
            whitepace was created for<br />
            the new ways we live and<br />
            work. We make a better<br />
            workspace around the world.
          </p>
        </div>
        <div className={sectionBase}>
          <div className="text-white text-lg font-bold font-['DM Sans']">Product</div>
          <Link href="/overview" passHref>
            <div className="text-white text-base font-normal font-['DM Sans'] leading-tight hover:text-[#ffe492] cursor-pointer">Overview</div>
          </Link>
          <Link href="/pricing" passHref>
            <div className={textBase}>Pricing</div>
          </Link>
          <Link href="/customer-stories" passHref>
            <div className={textBase}>Customer stories</div>
          </Link>
        </div>
        <div className={sectionBase}>
          <div className="text-white text-lg font-bold font-['DM Sans']">Resources</div>
          <Link href="/blog" passHref>
            <div className={textBase}>Blog</div>
          </Link>
          <Link href="/guides" passHref>
            <div className={textBase}>Guides & tutorials</div>
          </Link>
          <Link href="/help" passHref>
            <div className={textBase}>Help center</div>
          </Link>
        </div>
        <div className={sectionBase}>
          <div className="text-white text-lg font-bold font-['DM Sans']">Company</div>
          <Link href="/about" passHref>
            <div className={textBase}>About us</div>
          </Link>
          <Link href="/careers" passHref>
            <div className={textBase}>Careers</div>
          </Link>
          <Link href="/media-kit" passHref>
            <div className={textBase}>Media kit</div>
          </Link>
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="text-white text-2xl font-bold font-['DM Sans']">Try It Today</div>
          <p className={`${textBase} lg:max-w-xs`}>
            Get started for free. Add your whole team as your needs grow.
          </p>
          <Link href="/start" passHref>
            <div className="px-10 py-5 bg-[#4f9cf9] rounded-lg flex justify-center items-center gap-2.5 text-white text-base font-normal font-['DM Sans'] leading-tight hover:bg-[#377ab4] transition-all duration-300 cursor-pointer">
              Start today
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full border-t border-[#2d4e72]"></div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center mt-6">
        <div className="flex flex-wrap justify-start items-center gap-6">
          <div className={textBase}>English</div>
          <div className={textBase}>Terms & privacy</div>
          <div className={textBase}>Security</div>
          <div className={textBase}>Status</div>
          <div className={textBase}>©2021 Whitepace LLC.</div>
        </div>
        <div className="flex justify-center lg:justify-start items-center gap-6 mt-6 lg:mt-0 w-full lg:w-auto">
          <Link href="https://facebook.com" passHref>
            <div className="cursor-pointer hover:opacity-75"><FaFacebookF size={24} color="white" /></div>
          </Link>
          <Link href="https://twitter.com" passHref>
            <div className="cursor-pointer hover:opacity-75"><FaTwitter size={24} color="white" /></div>
          </Link>
          <Link href="https://linkedin.com" passHref>
            <div className="cursor-pointer hover:opacity-75"><FaLinkedinIn size={24} color="white" /></div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

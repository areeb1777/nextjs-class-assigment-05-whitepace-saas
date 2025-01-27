"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-[1920px] h-[92px] sticky px-4 md:px-8 lg:px-20 xl:px-32 py-4 bg-[#043873] flex justify-between items-center mx-auto shadow-md">
      <div className="flex items-center">
        <Image
          src="/images/Logo.png"
          alt="Whitepace Logo"
          width={140}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="hidden lg:flex h-[23px] justify-start items-start gap-8">
        <Link
          href="#"
          className="text-white text-lg font-medium font-['DM Sans'] leading-[23px]"
        >
          Products
        </Link>
        <Link
          href="#"
          className="text-white text-lg font-medium font-['DM Sans'] leading-[23px]"
        >
          Solutions
        </Link>
        <Link
          href="#"
          className="text-white text-lg font-medium font-['DM Sans'] leading-[23px]"
        >
          Resources
        </Link>
        <Link
          href="#"
          className="text-white text-lg font-medium font-['DM Sans'] leading-[23px]"
        >
          Pricing
        </Link>
      </div>
      <div className="hidden lg:flex justify-end items-start gap-6">
        <Link
          href="#"
          className="px-10 py-4 bg-[#ffe492] rounded-lg flex justify-center items-center"
        >
          <div className="text-[#043873] text-lg font-medium font-['DM Sans'] leading-[23px]">
            Login
          </div>
        </Link>
        <Link
          href="#"
          className="px-6 py-4 bg-[#4f9cf9] rounded-lg flex justify-center items-center"
        >
          <div className="text-white text-lg font-medium font-['DM Sans'] leading-[23px]">
            Try Whitepace free
          </div>
        </Link>
      </div>
      <div className="flex lg:hidden items-center">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-[92px] left-0 w-full bg-[#043873] lg:hidden flex flex-col items-center">
          <Link href="#" className="text-white text-lg py-2">
            Products
          </Link>
          <Link href="#" className="text-white text-lg py-2">
            Solutions
          </Link>
          <Link href="#" className="text-white text-lg py-2">
            Resources
          </Link>
          <Link href="#" className="text-white text-lg py-2">
            Pricing
          </Link>
          <div className="flex flex-col items-center gap-4 py-4">
            <Link
              href="#"
              className="px-4 py-2 bg-[#ffe492] rounded-lg text-[#043873] text-lg font-medium font-['DM Sans']"
            >
              Login
            </Link>
            <Link
              href="#"
              className="px-4 py-2 bg-[#4f9cf9] rounded-lg text-white text-lg font-medium font-['DM Sans']"
            >
              Try Whitepace free
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

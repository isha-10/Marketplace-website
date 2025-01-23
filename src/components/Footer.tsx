"use client"
import React from "react";
import Image from "next/image";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="flex flex-col bg-black dark:bg-black items-center">

      <div className="flex flex-col md:flex-row justify-between items-center   bg-black px-6 md:px-[135px] py-[50px] w-full">
        <div className="text-white md:w-[50%] w-full text-center md:text-left">
          <h2 className="text-[20px] md:text-[32px] font-semibold"><span className="text-[#FF9F0D]">St</span>ill Need Our Support ?</h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">Don&#39;t wait, make a smart & logical decision now. It&apos;s easy.</p>
        </div>

        <div className="flex md:mt-0 mt-[20px]">
          <input type="text" placeholder="Enter Your Email" className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2 rounded" spellCheck={false} 
          data-ms-editor={true} />
          <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px] rounded">Subscribe Now</button>
        </div>
      </div>

      <hr className="my-4 border-[#FF9F0D] mx-[20px] md:mx-[135px]" />

      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px] px-6 md:px-[135px] py-6 lg:py-8">
          <div>
            <h2 className="mb-6 text-[24px] font-semibold uppercase text-white">About Us.</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline">
                orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.
                </p>
              </li>
              <li className="flex gap-[16.5px]">
                <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px] rounded-full">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>

                <div className="ml-2">
                  <h2 className="text-[16px] text-[#FFFFFF] font-normal">Opening Hours</h2>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">Mon - Sat (8:00 AM - 6:00 PM)</h3>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">Sunday - Closed</h3>
                </div>
              </li>
            </ul>
          </div>

          <div className="px-5">
            <h2 className="mb-6 text-[24px] font-semibold uppercase text-white">Useful Links</h2>
            <ul className="text-white font-medium">
              {['About', 'News', 'Partner', 'Team', 'Menu', 'Contact'].map((link, index) => (
                <li key={index} className="mb-4">
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-[24px] font-semibold uppercase text-white">Help?</h2>
            <ul className="text-white font-medium">
              {['FAQ', 'Terms & Conditions', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map((link, index) => (
                <li key={index} className="mb-4">
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-[24px] font-semibold uppercase text-white">Recent Post</h2>
            <ul className="text-gray-500 font-medium gap-[14px]">
              {['Is fastfood good for your body?', 'Changes your food habit with organic food', 'Do you like fastfood for your life?'].map((title, index) => (
                <li key={index} className="flex gap-[16.5px] mt-[14px]">
                  <Image src="/footer.png" alt="Food" height={100} width={100} />
                  <div className="ml-2">
                  <h2 className="text-[14px] font-normal text-[#FFFFFF]">{title}</h2>
                    <h2 className="text-[12px] text-gray font-normal">February 28,2022</h2>
                    
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full px-4 py-6 bg-gray-100 dark:bg-[#4F4F4F] md:flex md:items-center md:justify-between">
          <span className="text-sm text-[#FFFFFF] dark:text-gray-300 sm:text-center">
           Copyright © 2022 by Ayeman. All Rights Reserved.
          </span>

          <div className="flex justify-center gap-[14px] mt-4 md:mt-0">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, index) => (
              <div key={index} className="bg-white text-black w-[36px] h-[34px]  hover:bg-orange-500 flex justify-center items-center rounded-full">
                <Icon className="text-[20px]" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
};

export default Footer;
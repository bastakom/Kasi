import { storyblokEditable } from "@storyblok/react";
import LinkBtn from "./LinkBtn";
import Image from "next/image";

export const Hero = ({ blok }: any) => {
  const { bg, subheading, logo, contact, title, home } = blok;

  return (
    <section {...storyblokEditable(blok)}>
      <div className="h-[100vh] py-[5rem] w-full relative" id="hero">
        <Image
          src={bg.filename}
          alt={bg.title}
          layout="fill"
          fill
          objectFit="cover"
          objectPosition="top"
        />
        {/* Subheading text */}
        <div
          className=" absolute top-[5%] md:top-[8%] md:left-[2%] p-[1rem]
         text-white flex  flex-col md:items-start lg:flex-row font-bold gap-[74px]"
        >
          <div className="w-[150px] md:w-[40%] lg:w-[100%] height-[100px]">
            <img src={logo.filename} className=" md:w-[100%]" alt="Logo" />
          </div>

          <div className="flex  flex-col gap-[57.6px]">
            <p className="w-[300px]  p-[0.5rem] text-[32px] md:w-[34.8125rem] md:p-[0rem] md-[0rem] font-normal md:text-[38px] leading-[1.37] ">
              {subheading}
            </p>
            <LinkBtn
              className=" w-[65%] md:w-[32.7%] h-[3.25rem] border-2 ml-[0.5rem] border-white font-medium text-[20px] md:ml-[0rem] flex items-center justify-center"
              link="#contact-form"
              title={title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* 

import { storyblokEditable } from "@storyblok/react";
import LinkBtn from "./LinkBtn";
import Image from "next/image";

export const Hero = ({ blok }: any) => {
  const { bg, subheading, logo, contact, title, home } = blok;

  return (
    <section {...storyblokEditable(blok)}>
      <div className="h-[100vh] py-[5rem] w-full relative">
        <Image
          src={bg.filename}
          alt={bg.title}
          layout="fill"
          fill
          objectFit="cover"
          objectPosition="top"
        />
        
        <div
          className=" absolute top-[5%] md:top-[8%] md:left-[2%] p-[1rem]
         text-white flex  flex-col md:items-start lg:flex-row font-bold gap-[74px]"
        >
          <div className="w-[150px] md:w-[40%] lg:w-[100%] height-[100px]">
            <img src={logo.filename} className=" md:w-[100%]" alt="Logo" />
          </div>

          <div className="flex  flex-col gap-[57.6px] md:w-[100%] md:pt-[3rem] md:items-center lg:items-start">
            <p className="w-[300px]  p-[0.5rem] text-[32px] md:w-[90%] md:text-center md:p-[0rem] md-[0rem] font-normal md:text-[38px] leading-[1.37] ">
              {subheading}
            </p>
            <LinkBtn
              className=" w-[65%] md:w-[30.7%] lg:w-[30.7%] h-[3.25rem] border-2 ml-[0.5rem] border-white font-medium text-[20px] md:ml-[0rem] flex items-center justify-center"
              link="#contact-form"
              title={title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
 */

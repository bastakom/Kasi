import { storyblokEditable } from "@storyblok/react";
import LinkBtn from "./LinkBtn";
import Image from "next/image";

export const Hero = ({ blok }: any) => {
  const { bg, subheading, logo, contact, title, home } = blok;

  return (
    <section {...storyblokEditable(blok)} id="hero">
      <div className="h-[100vh] py-[5rem] w-full relative" id="hero">
        <Image
          src={bg.filename}
          alt={bg.title}
          layout="fill"
          fill
          objectFit="cover"
          objectPosition="top"
        />

        <div
          className=" absolute top-[5%] md:left-[2%] p-[1rem]
         text-white flex  flex-col md:items-start lg:flex-row font-bold gap-[7%]"
        >
          <div className="w-[150px] md:w-[40%] lg:w-[40%] height-[100px]">
            <Image
              src={logo.filename}
              alt={bg.title}
              width={480}
              height={120}
            />
          </div>

          <div className="flex  md:mt-[8rem] items-start lg:pl-[0%] lg:mt-[0rem] md:items-center lg-w[100%] lg:items-start lg:p-[0rem] lg:w-[80%] flex-col gap-[57.6px]">
            <p className=" p-[0.5rem] mt-[4rem] text-[32px] md:ml-[9%] lg:ml-[0%] lg:w-[34.8125rem] md:p-[0rem] md:mt-[0rem] lg:mt-[0rem] lg:text-start md-[0rem] font-normal md:text-[48px] lg:text-[38px] leading-[1.37] ">
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

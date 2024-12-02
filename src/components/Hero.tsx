import { storyblokEditable } from "@storyblok/react";
import LinkBtn from "./LinkBtn";
import Image from "next/image";

export const Hero = ({ blok }: any) => {
  const { bg, subheading, logo, contact, title, home } = blok;

  console.log("i hero", blok);

  return (
    <section {...storyblokEditable(blok)}>
      <div className="h-[80vh] py-[5rem] w-[1920px]  relative">
        <Image src={bg.filename} alt="" layout="fill" object-fit="cover" />
        {/* Subheading text */}
        <div
          className=" absolute top-[7%] left-[4%] 
         text-white flex items-start font-bold gap-[74px]"
        >
          <div className="w-[450px] height-[120px]">
            <img src={logo.filename} className="w-[100%]" alt="Logo" />
          </div>

          <div className="flex flex-col gap-[50.67px]">
            <p className="w-[557px] h-[157px] font-normal text-[38px] leading-[1.37] ">
              {subheading}
            </p>
            <LinkBtn
              className="w-[182px] h-[52px] border-2 border-white font-medium text-[20px] flex items-center justify-center"
              link="#contact-form"
              title={title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

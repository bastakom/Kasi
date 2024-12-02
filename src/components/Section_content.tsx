import { storyblokEditable } from "@storyblok/react";

export const Section = ({ blok, index }: any) => {
  const { heading, image, paragraph } = blok;
  return (
    <section
      id="about"
      className={
        "pb-[2rem] md:justify-normal md:pb-[0rem] md:flex md:flex-row "
      }
      {...storyblokEditable(blok)}
    >
      <div className=" p-[0rem] pl-[2rem] block md:p-[4rem] w-[90%] md:pl-[6rem] md:flex flex-row gap-2 md:w-[75%] ">
        <h2 className="text-[25px] w-[90%] mb-[1rem] mt-[1rem] md:mb-[0rem]  md:mt-[0rem] md:w-[10%] font-medium">
          {heading}
        </h2>
        <div className="md:w-[82%]">
          <p className=" text-[25px] md:text-[38px] font-medium ">
            {paragraph}
          </p>
          <hr className="mt-[40px] border-t-2 border-gray-400"></hr>
        </div>
      </div>
    </section>
  );
};

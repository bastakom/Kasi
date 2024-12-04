import { storyblokEditable } from "@storyblok/react";

export const Section = ({ blok, index }: any) => {
  const { heading, image, paragraph } = blok;
  console.log("ifrån section content", blok);
  return (
    <section
      id="about"
      className={`${
        blok.position ? "sectionContentFirst" : "sectionContentSecond"
      } `}
      {...storyblokEditable(blok)}
    >
      <div className="sectionWrapper p-[1rem] block md:pt-[3rem] lg:p-[4rem] lg:pl-[6rem] md:gap-[20px] lg:gap-[40px] md:flex flex-row gap-2 lg:w-[75%] ">
        <h2 className="text-[25px] mb-[1rem] mt-[1rem] md:mb-[0rem] md:w-[150px] lg:w-[120px] md:mt-[0rem]  font-medium">
          {heading}
        </h2>
        <div className="md:w-[85%]">
          <p className=" text-[25px] md:text-[38px] font-medium ">
            {paragraph}
          </p>
          <hr className="mt-[40px] border-t-2 border-gray-400"></hr>
        </div>
      </div>
    </section>
  );
};

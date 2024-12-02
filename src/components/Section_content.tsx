import { storyblokEditable } from "@storyblok/react";

export const Section = ({ blok, index }: any) => {
  console.log(blok);

  const { heading, image, paragraph } = blok;
  return (
    <section
      id="about"
      className={"pb-[2rem] md:pb-[0rem] md:flex-row flex "}
      {...storyblokEditable(blok)}
    >
      <div className=" p-[0rem] md:p-[4rem]  flex flex-row gap-2 w-[75%] ">
        <h2 className="text-[25px]  w-[10%] font-medium">{heading}</h2>
        <div className="w-[82%]">
          <p className="text-[38px] font-medium ">{paragraph}</p>
          <hr className="mt-[40px] border-t-2 border-gray-400"></hr>
        </div>
      </div>
    </section>
  );
};

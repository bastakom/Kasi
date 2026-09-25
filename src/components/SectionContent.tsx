import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const hasImage = (image: any) =>
  typeof image?.filename === "string" && image.filename.length > 0;

export const Section = ({ blok }: any) => {
  const { heading, paragraph, paragraph_image, paragraph_image_text } = blok;
  const showParagraphImage = hasImage(paragraph_image);

  return (
    <section
      id="about"
      className={blok.position ? "sectionContentFirst" : "sectionContentSecond"}
      {...storyblokEditable(blok)}
    >
      <div
        className={`sectionWrapper p-[1rem] block md:pt-[3rem] lg:p-[4rem] lg:pl-[6rem] lg:pr-[4rem] md:gap-[20px] lg:gap-[40px] lg:flex ${
          showParagraphImage ? "lg:w-full lg:max-w-[1320px]" : "lg:w-[75%]"
        }`}
      >
        {showParagraphImage && (
          <div className="mb-[2rem] lg:mb-0 lg:w-[28%] lg:min-w-[260px] lg:max-w-[360px]">
            <Image
              src={paragraph_image.filename}
              alt={paragraph_image.alt || heading || "Bild"}
              width={720}
              height={900}
              className="w-full h-auto max-h-[620px] object-cover"
            />
            {paragraph_image_text && (
              <p className="mt-[0.75rem] text-[16px] md:text-[18px] font-medium leading-snug text-gray-700">
                {paragraph_image_text}
              </p>
            )}
          </div>
        )}

        <h2 className="text-[20px] md:text-[25px] mb-[2rem] mt-[1rem] md:mb-[0rem] md:w-[150px] lg:w-[120px] md:mt-[0rem] font-medium">
          {heading}
        </h2>

        <div className={showParagraphImage ? "lg:flex-1" : "lg:w-[85%]"}>
          <p className="text-[25px] md:text-[38px] font-medium">{paragraph}</p>
          <hr className="mt-[40px] border-t-2 border-gray-400" />
        </div>
      </div>
    </section>
  );
};

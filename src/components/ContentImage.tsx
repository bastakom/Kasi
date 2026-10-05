import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

const SectionImage = ({ blok }: any) => {
  const { image } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      className="contentImage flex justify-end mb-[1rem]"
    >
      <div className="w-full max-w-[886px] max-h-[578px]">
        <Image
          src={image.filename}
          alt={image.alt || "Bild"}
          width={480}
          height={120}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default SectionImage;

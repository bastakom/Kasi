import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const SectionImage = ({ blok }: any) => {
  const { image } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      className="flex justify-end w-[98%] mb-[1rem]"
    >
      <div className="w-full p-[2rem] max-w-[786px] max-h-[578px] md:p-[3rem]">
        <img
          className="w-full h-auto object-cover"
          src={image.filename}
          alt={image.alt || "Bild"}
        />
      </div>
    </div>
  );
};

export default SectionImage;

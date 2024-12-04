import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const SectionImage = ({ blok }: any) => {
  const { image } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      className="contentImage flex justify-end mb-[1rem]"
    >
      <div className="w-full max-w-[886px] max-h-[578px] md:mt-[2rem]">
        <img
          className="pt-[2rem] w-full h-auto object-cover mb:pt-[0rem]"
          src={image.filename}
          alt={image.alt || "Bild"}
        />
      </div>
    </div>
  );
};

export default SectionImage;

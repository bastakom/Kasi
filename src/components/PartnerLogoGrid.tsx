import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

type StoryblokAsset = {
  filename?: string;
  alt?: string;
  name?: string;
  title?: string;
};

type LogoItem = StoryblokAsset & {
  image?: StoryblokAsset;
  logo?: StoryblokAsset;
  alt_text?: string;
};

const getLogoAsset = (item: LogoItem): StoryblokAsset | null => {
  if (item?.image?.filename) return item.image;
  if (item?.logo?.filename) return item.logo;
  if (item?.filename) return item;
  return null;
};

const getLogoAlt = (item: LogoItem, asset: StoryblokAsset) =>
  item.alt_text || asset.alt || asset.title || asset.name || "Logotyp";

const PartnerLogoGrid = ({ blok }: any) => {
  const logos = Array.isArray(blok.logos)
    ? blok.logos
        .map((item: LogoItem) => {
          const asset = getLogoAsset(item);
          return asset?.filename ? { item, asset } : null;
        })
        .filter(Boolean)
    : [];

  return (
    <section
      {...storyblokEditable(blok)}
      className="px-[1rem] py-[3rem] md:px-[3rem] md:py-[4rem] lg:px-[6rem]"
    >
      <div className="mx-auto max-w-[1180px]">
        {blok.heading && (
          <h2 className="mb-[2rem] text-[25px] md:text-[38px] font-medium">
            {blok.heading}
          </h2>
        )}

        <div className="flex flex-wrap justify-center gap-x-[1.5rem] gap-y-[2rem] md:gap-x-[2.25rem] lg:gap-x-[3rem]">
          {logos.map(({ item, asset }: any, index: number) => (
            <div
              key={item._uid || `${asset.filename}-${index}`}
              className="flex min-h-[92px] basis-[calc((100%_-_1.5rem)/2)] items-center justify-center sm:basis-[calc((100%_-_3rem)/3)] md:basis-[calc((100%_-_6.75rem)/4)] lg:basis-[calc((100%_-_18rem)/7)]"
            >
              <Image
                src={asset.filename}
                alt={getLogoAlt(item, asset)}
                width={220}
                height={120}
                className="h-auto max-h-[72px] w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogoGrid;

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
  link?: {
    url?: string;
    cached_url?: string;
    target?: string;
    linktype?: string;
  };
};

const getLogoAsset = (item: LogoItem): StoryblokAsset | null => {
  if (item?.image?.filename) return item.image;
  if (item?.logo?.filename) return item.logo;
  if (item?.filename) return item;
  return null;
};

const getLogoAlt = (item: LogoItem, asset: StoryblokAsset) =>
  item.alt_text || asset.alt || asset.title || asset.name || "Logotyp";

const getLogoHref = (item: LogoItem) => {
  const link = item?.link;
  if (!link) return "";

  if (link.url) return link.url;
  if (!link.cached_url) return "";

  if (link.linktype === "url") return link.cached_url;
  return link.cached_url.startsWith("/") ? link.cached_url : `/${link.cached_url}`;
};

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
      <div className="w-full">
        {blok.heading && (
          <h2 className="mb-[2rem] text-[25px] md:text-[38px] font-medium">
            {blok.heading}
          </h2>
        )}

        <div className="flex flex-wrap justify-center gap-x-[1.5rem] gap-y-[2.5rem] md:gap-x-[2.5rem] lg:gap-x-[3.5rem]">
          {logos.map(({ item, asset }: any, index: number) => {
            const href = getLogoHref(item);
            const logoImage = (
              <Image
                src={asset.filename}
                alt={getLogoAlt(item, asset)}
                width={280}
                height={150}
                className="h-auto max-h-[92px] w-auto max-w-full object-contain"
              />
            );

            return (
              <div
                key={item._uid || `${asset.filename}-${index}`}
                className="flex min-h-[110px] basis-[calc((100%_-_1.5rem)/2)] items-center justify-center sm:basis-[calc((100%_-_3rem)/3)] md:basis-[calc((100%_-_7.5rem)/4)] lg:basis-[calc((100%_-_21rem)/7)]"
              >
                {href ? (
                  <a
                    href={href}
                    target={item.link?.target || undefined}
                    rel={
                      item.link?.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex h-full w-full items-center justify-center"
                  >
                    {logoImage}
                  </a>
                ) : (
                  logoImage
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogoGrid;

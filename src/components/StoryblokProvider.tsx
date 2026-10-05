"use client";
import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Page from "./Page";
import { Hero } from "./Hero";
import { Section } from "./SectionContent";
import { SectionSmall } from "./SectionContentSmall";
import Services from "./services";
import ServicesSmall from "./servicesSmall";
import SectionImage from "./ContentImage";
import PartnerLogoGrid from "./PartnerLogoGrid";

storyblokInit({
  components: {
    page: Page,
    hero: Hero,
    section_content: Section,
    section_content_small: SectionSmall,
    content_image: SectionImage,
    partner_logo_grid: PartnerLogoGrid,

    tjanster: Services,
    tjanster_small: ServicesSmall,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

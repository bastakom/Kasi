"use client";
import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Page from "./Page";
import { Hero } from "./Hero";
import { Section } from "./SectionContent";
import Services from "./services";
import SectionImage from "./ContentImage";

storyblokInit({
  components: {
    page: Page,
    hero: Hero,
    section_content: Section,
    content_image: SectionImage,

    tjanster: Services,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

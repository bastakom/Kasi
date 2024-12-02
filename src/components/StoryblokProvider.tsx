"use client";
import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Page from "./Page";
import Header from "./Header";
import { Hero } from "./Hero";
import { Section } from "./Section_content";
import Services from "./services";
import SectionImage from "./Content_image";

storyblokInit({
  components: {
    page: Page,
    hero: Hero,
    section_content: Section,
    content_image: SectionImage,
    config: Header,
    tjanster: Services,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

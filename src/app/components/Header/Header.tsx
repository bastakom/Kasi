import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import HeaderSection from "./HeaderSection";
import { FooterSection } from "../Footer/FooterSection";

async function fetchData() {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/config?version=draft&token=${process.env.STORYBLOK_TOKEN}`,
    { cache: "no-store" }
  );

  return res.json();
}

export const Header = async () => {
  const story = await fetchData();
  console.log(story);
  return <HeaderSection props={story} />;
};

export const Footer = async () => {
  const story = await fetchData();
  console.log(story);
  return <FooterSection props={story} />;
};

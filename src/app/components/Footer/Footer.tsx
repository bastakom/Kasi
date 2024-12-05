import { FooterSection } from "./FooterSection";

async function fetchData() {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/config?version=draft&token=${process.env.STORYBLOK_TOKEN}`,
    { cache: "no-store" }
  );

  return res.json();
}

export const Footer = async () => {
  const story = await fetchData();
  return <FooterSection props={story} />;
};

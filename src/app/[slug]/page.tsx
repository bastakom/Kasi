import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

async function fetchData(slug: string) {
  noStore();

  const sbParams = {
    version: "draft" as const,
    cv: Date.now(),
  };

  const client = getStoryblokApi();

  try {
    const data = await client.get(`cdn/stories/${slug}`, sbParams);

    if (!data) {
      notFound();
    }

    return { data };
  } catch (error: any) {
    notFound();
  }
}

const Page = async ({ params }: { params?: { slug?: string } }) => {
  const slugName = params?.slug || "home";
  const story = await fetchData(slugName);

  return <StoryblokStory story={story.data.data.story} />;
};

export default Page;

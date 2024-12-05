import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { redirect } from "next/navigation";

async function fetchData(slug: string) {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/${slug}`, sbParams);

    if (!data) {
      redirect("/not-found");
    }

    return { data };
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/not-found");
    } else {
      redirect("/not-found");
    }
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await fetchData(slugName);
  return <StoryblokStory story={story.data.data.story} />;
};

export default Page;

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection("posts");
  return rss({
    title: "Posts | John Carlo Austria",
    description:
      "John Carlo Austria's Personal Portfolio, A frontend developer based in the Philippines.",
    site: "https://jaycedotbin.me",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
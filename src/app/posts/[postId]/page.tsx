import NavBar from "@/components/NavBar";
import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  /*
    Only fetch requests are deduped
    If you want to dedupe a funciton that is NOT using fetch use React cache()
    */
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  /*
    Only fetch requests are deduped
    If you want to dedupe a funciton that is NOT using fetch use React cache()
    */
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!posts) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post?.title,
  };
}

export default async function Posts({
  params,
}: {
  params: { postId: string };
}) {
  /*
    Only fetch requests are deduped
    If you want to dedupe a funciton that is NOT using fetch use React cache()
    */
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound;
  }

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main>
      <NavBar />
      <div className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        <h1 className="text-3xl mt-4 mb-0">{title}</h1>
        <p className="mt-0">{pubDate}</p>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <p>
            <Link href="/">← Back to home</Link>
          </p>
        </article>
      </div>
    </main>
  );
}

import { getPostBySlug, getPosts } from "@/app/lib/posts";
import { notFound } from "next/navigation";

type blogPostParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => {
    return { slug: post.slug };
  });
}

export default function Page({ params }: blogPostParams) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <h2 className="text-2xl font-bold mb-4 font-serif">{post.title}</h2>
      <p>{post.content}</p>
    </main>
  );
}

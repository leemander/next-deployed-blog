import { getPosts } from "../lib/posts";
import Link from "next/link";

export default function Page() {
  const posts = getPosts();

  return (
    <main>
      <h2 className="text-2xl">This is the blogs page.</h2>
      <p className="my-4">Select a blog post to read: </p>
      <ul className="grid gap-2">
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link className="text-red-500" href={`/blogs/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

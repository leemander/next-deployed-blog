import { getPosts } from "../lib/posts";
import { Faustina } from "next/font/google";
import Link from "next/link";

const faustina = Faustina({ subsets: ["latin"] });

export default function Page() {
  const posts = getPosts();

  return (
    <main>
      <h2
        className={
          "text-3xl font-bold font-serif text-green-700 " + faustina.className
        }
      >
        Lucha Blogs
      </h2>
      <p className="my-4">Select a blog post to read: </p>
      <ul className="grid gap-2">
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link
                className="text-red-600 underline"
                href={`/blogs/${post.slug}`}
              >
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

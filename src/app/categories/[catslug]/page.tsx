import { getCategories, getPostByCategory } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Faustina } from "next/font/google";

const faustina = Faustina({ subsets: ["latin"] });

export default function Page({ params }: { params: { catslug: string } }) {
  const category = getCategories().find(
    (cat) => cat.catslug === params.catslug
  );

  if (!category) notFound();

  const categoryPosts = getPostByCategory(category.catslug);

  return (
    <main>
      <h2
        className={
          "text-3xl font-bold font-serif text-green-700 " + faustina.className
        }
      >
        "{category.name}" blogs
      </h2>
      <ul className="grid gap-2 my-4">
        {categoryPosts.map((post) => {
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

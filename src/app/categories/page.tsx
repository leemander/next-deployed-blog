import { getCategories } from "../lib/posts";
import Link from "next/link";
import { Faustina } from "next/font/google";

const faustina = Faustina({ subsets: ["latin"] });

export default function Page() {
  const categories = getCategories();
  return (
    <main>
      <h2
        className={
          "text-3xl font-bold font-serif text-green-700 " + faustina.className
        }
      >
        Categories
      </h2>
      <ul className="grid gap-2 my-4">
        {categories.map((cat) => {
          return (
            <li key={cat.catslug}>
              <Link
                className="text-red-600 underline"
                href={`/categories/${cat.catslug}`}
              >
                {cat.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

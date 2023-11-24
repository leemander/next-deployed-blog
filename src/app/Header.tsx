import Link from "next/link";
export default function Header() {
  return (
    <header className="font-mono bg-green-500 text-white py-4">
      <div className="container mx-auto flex justify-between px-4 items-center">
        <h1 className="text-2xl ">Lucha Blogs</h1>
        <nav>
          <ul className="flex gap-4 underline font-semibold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

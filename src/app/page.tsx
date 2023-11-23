import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link className="underline text-red-600" href="/blogs">
        To the blogs!
      </Link>
    </main>
  );
}

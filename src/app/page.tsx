import Link from "next/link";
import type { FC } from "react";

const HomePage: FC = () => (
  <main className="mx-auto flex min-h-svh max-w-2xl flex-col items-start justify-center gap-4 bg-white px-6 py-16 text-gray-900 antialiased">
    <h1 className="text-4xl font-bold tracking-tight">Homepage</h1>
    <Link
      className="text-blue-600 underline underline-offset-4 hover:text-blue-800"
      href="/not-found"
    >
      Test 404 page
    </Link>
  </main>
);

export default HomePage;

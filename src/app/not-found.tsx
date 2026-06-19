import type { Metadata } from "next";
import Link from "next/link";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

const NotFoundPage: FC = () => (
  <main className="mx-auto flex min-h-svh max-w-2xl flex-col items-start justify-center gap-4 bg-white px-6 py-16 text-gray-900 antialiased">
    <hgroup className="flex flex-col gap-1">
      <p className="text-sm font-medium text-gray-500">404 Error</p>
      <h1 className="text-4xl font-bold tracking-tight">Page Not Found</h1>
    </hgroup>
    <p className="text-gray-600">
      Sorry, the page you are looking for does not exist or has been moved.
    </p>
    <Link
      className="text-blue-600 underline underline-offset-4 hover:text-blue-800"
      href="/"
    >
      Back to Home
    </Link>
  </main>
);

export default NotFoundPage;

import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

const NotFoundPage: FC = () => (
  <main>
    <h1 className="mt-20 text-center text-4xl font-bold">Not Found</h1>
  </main>
);

export default NotFoundPage;

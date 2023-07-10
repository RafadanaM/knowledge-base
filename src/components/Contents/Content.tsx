import { ReactNode } from "react";

interface IContent {
  title: string;
  children?: ReactNode;
}

export default function Content({ title, children }: IContent) {
  return (
    <>
      <h1 className="ml-2 inline-block py-px align-top text-4xl font-semibold">
        {title}
      </h1>
      <span className="mb-6 mt-3 block h-0.5 bg-secondary" />
      <article className="[&>p]:my-5">{children}</article>
    </>
  );
}

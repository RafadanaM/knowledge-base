import { ReactNode } from "react";

interface IContent {
  title: string;
  children?: ReactNode;
}

export default function Content({ title, children }: IContent) {
  return (
    <>
      <h1 className="inline-block ml-2 text-4xl font-semibold align-top py-px">
        {title}
      </h1>
      <span className="block h-0.5 bg-gray-200 mt-3 mb-6" />
      <article className="[&>p]:my-5">{children}</article>
    </>
  );
}

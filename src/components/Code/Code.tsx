"use client";

import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";

interface ICode {
  title: string;
  code: string;
  language?: string;
}

export default function Code({ title, code, language = "typescript" }: ICode) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
      <pre className={`language-${language}`} tabIndex={0}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </>
  );
}

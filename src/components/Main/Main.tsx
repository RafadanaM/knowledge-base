import { HTMLAttributes } from "react";

export default function Main({
  className = "",
  children,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return (
    <main {...rest} className={`max-w-8xl mx-auto px-6 py-4 ${className}`}>
      {children}
    </main>
  );
}

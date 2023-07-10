import { InputHTMLAttributes } from "react";

export default function Search(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input type="text" className="mt-2 w-full px-2 py-1 shadow-lg" {...props} />
  );
}

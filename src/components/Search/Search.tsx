import { InputHTMLAttributes } from "react";

export default function Search(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input type="text" className="shadow-lg mt-5 px-2 py-1 w-full" {...props} />
  );
}

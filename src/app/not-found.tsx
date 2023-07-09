import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100%-40px)]">
      <span className="text-[12rem] leading-none">
        <span className="text-orange-400">4</span>0
        <span className="text-orange-400">4</span>
      </span>
      <h2 className="text-3xl font-bold">Page Not Found!</h2>
      <Link
        href="/"
        replace={true}
        className="text-lg text-orange-400 font-medium mt-4 hover:text-orange-600"
      >
        Back to Homepage
      </Link>
    </div>
  );
}

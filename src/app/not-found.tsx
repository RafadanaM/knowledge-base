import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100%-40px)] flex-col items-center justify-center">
      <span className="text-[12rem] leading-none">
        <span className="text-primary">4</span>0
        <span className="text-primary">4</span>
      </span>
      <h2 className="text-3xl font-bold">Page Not Found!</h2>
      <Link
        href="/"
        replace={true}
        className="mt-4 text-lg font-medium text-primary"
      >
        Back to Homepage
      </Link>
    </div>
  );
}

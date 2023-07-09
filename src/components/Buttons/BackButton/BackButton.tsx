"use client";

import { useRouter } from "next/navigation";
import IconButton from "../IconButton/IconButton";

export default function BackButton() {
  const router = useRouter();

  return (
    <IconButton
      src="/arrow-left.svg"
      alt="back"
      onClick={() => router.back()}
      className="-ml-2"
    />
  );
}

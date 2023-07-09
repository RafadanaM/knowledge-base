import Image from "next/image";

export interface IIcon {
  src: string;
  alt: string;
}

export default function Icon({ src, alt }: IIcon) {
  return <Image src={src} alt={alt} height={24} width={24} />;
}

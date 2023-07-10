import Link from "next/link";
import Icon, { IIcon } from "../../Icon/Icon";

interface IIconLink extends IIcon {
  href: string;
}

export default function IconLink({ href, alt, src }: IIconLink) {
  return (
    <Link
      href={href}
      className="relative overflow-hidden rounded-full p-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-button before:bg-opacity-0 before:transition-colors hover:before:bg-opacity-20"
    >
      <Icon src={src} alt={alt} />
    </Link>
  );
}

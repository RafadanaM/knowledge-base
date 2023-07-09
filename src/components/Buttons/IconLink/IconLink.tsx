import Link from "next/link";
import Icon, { IIcon } from "../../Icon/Icon";

interface IIconLink extends IIcon {
  href: string;
}

export default function IconLink({ href, alt, src }: IIconLink) {
  return (
    <Link
      href={href}
      className="relative rounded-full overflow-hidden p-2 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-colors before:bg-button before:bg-opacity-0 hover:before:bg-opacity-20"
    >
      <Icon src={src} alt={alt} />
    </Link>
  );
}

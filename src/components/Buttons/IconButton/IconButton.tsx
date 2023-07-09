import { ButtonHTMLAttributes } from "react";
import Icon, { IIcon } from "../../Icon/Icon";

export default function IconButton({
  src,
  alt,
  className = "",
  ...rest
}: IIcon & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={`relative rounded-full overflow-hidden p-2 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-colors before:bg-button before:bg-opacity-0 hover:before:bg-opacity-20 ${className}`}
    >
      <Icon src={src} alt={alt} />
    </button>
  );
}

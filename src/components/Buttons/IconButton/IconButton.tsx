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
      className={`relative overflow-hidden rounded-full p-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-button before:bg-opacity-0 before:transition-colors hover:before:bg-opacity-20 ${className}`}
    >
      <Icon src={src} alt={alt} />
    </button>
  );
}

import { ReactNode, MouseEvent, MouseEventHandler } from "react";

interface IOverlay {
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function Overlay({
  className = "",
  children,
  onClick,
}: IOverlay) {
  return (
    <div
      onClick={onClick}
      className={`fixed top-0 left-0 right-0 bottom-0 z-30 lg:hidden bg-black bg-opacity-30 ${className}`}
    >
      {children}
    </div>
  );
}

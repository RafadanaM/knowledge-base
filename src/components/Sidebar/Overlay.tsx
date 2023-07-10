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
      className={`fixed bottom-0 left-0 right-0 top-0 z-30 bg-black bg-opacity-30 lg:hidden ${className}`}
    >
      {children}
    </div>
  );
}

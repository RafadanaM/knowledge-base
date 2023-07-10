import { useScroll } from "../../hooks/useScroll";
import IconButton from "../Buttons/IconButton/IconButton";

interface INavbar {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Navbar({ isOpen, setIsOpen }: INavbar) {
  const { scrollY, totalScrollHeight } = useScroll();

  function calcWidth(scrollAmount: number) {
    if (totalScrollHeight === 0 && scrollAmount === 0) return 100;
    if (totalScrollHeight === 0 && scrollAmount > 0) return 0;
    return Math.floor((scrollAmount / totalScrollHeight) * 100);
  }

  return (
    <header className="nav sticky top-0 z-20 h-16 border-b border-b-foreground bg-white transition-[margin]">
      <div
        className="absolute -bottom-px left-0 h-0.5 bg-red-400"
        style={{ width: `${calcWidth(scrollY)}%` }}
      />

      <nav className="relative mx-auto flex h-full  w-full max-w-8xl items-center justify-center px-4 py-2">
        <div className="absolute left-4">
          <IconButton
            src="/menu.svg"
            alt="menu"
            onClick={() => setIsOpen(true)}
            className={isOpen ? "hidden" : "justify-self-start"}
          />
        </div>

        <span className="text-2xl font-bold">Knowledge Base</span>
      </nav>
    </header>
  );
}

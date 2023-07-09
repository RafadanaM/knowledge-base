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
    <header
      className={`nav sticky top-0 h-16 bg-white border-b border-b-gray-300 z-20 transition-[margin] ${
        isOpen ? "lg:ml-64" : ""
      }`}
    >
      <div
        className="absolute -bottom-px left-0 h-0.5 bg-red-400"
        style={{ width: `${calcWidth(scrollY)}%` }}
      />

      <nav className="relative flex items-center justify-center h-full max-w-8xl w-full mx-auto py-2 px-4">
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

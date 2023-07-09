import { ChangeEvent, useMemo, useState } from "react";
import IconButton from "../Buttons/IconButton/IconButton";
import { knowledges } from "../../data/data";
import SidebarLink from "./SidebarLink";
import calculateSimilarity from "../../utils/calculateSimilarity";
import Search from "../Search/Search";
import useDebounce from "../../hooks/useDebounce";
import Overlay from "./Overlay";

interface ISidebar {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: ISidebar) {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value.trim());
  }

  const filteredKnowledges = useMemo(() => {
    if (debouncedSearch === "") return knowledges;
    return knowledges.filter(
      (knowledge) =>
        calculateSimilarity(debouncedSearch, knowledge.title) >= 0.75
    );
  }, [debouncedSearch]);

  return (
    <>
      <aside
        className={`sidebar bg-foreground w-64 h-screen flex-shrink-0 px-4 py-2 fixed top-0 left-0 z-40 transition-[margin] lg:shadow-[inset_0_0_8px_rgba(128,128,128,0.3)] ${
          isOpen ? "ml-0" : "-ml-64"
        }`}
      >
        <IconButton
          src="/x.svg"
          alt="close sidebar"
          onClick={() => setIsOpen(false)}
        />

        <Search onChange={handleSearch} />
        <ul className="flex flex-col gap-2 mt-6">
          {filteredKnowledges.map((knowledge) => (
            <SidebarLink key={knowledge.slug} href={knowledge.slug}>
              {knowledge.title}
            </SidebarLink>
          ))}
        </ul>
      </aside>
      {isOpen ? <Overlay onClick={() => setIsOpen(false)} /> : null}
    </>
  );
}

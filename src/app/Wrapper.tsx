"use client";

import { ReactNode, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import BackButton from "../components/Buttons/BackButton/BackButton";

interface IWrapper {
  children: ReactNode;
}

function Wrapper({ children }: IWrapper) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function updateSidebarOpen(value: boolean) {
    setIsSidebarOpen(value);
  }
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={updateSidebarOpen} />
      <Navbar isOpen={isSidebarOpen} setIsOpen={updateSidebarOpen} />
      <div
        className={`content transition-[margin-left] ${
          isSidebarOpen ? "lg:ml-64" : ""
        }`}
      >
        <Main>
          <BackButton />
          {children}
        </Main>
      </div>
    </>
  );
}

export default Wrapper;

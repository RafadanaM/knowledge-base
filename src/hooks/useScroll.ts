import { useEffect, useCallback, useState } from "react";

//   console.log({
//     scrollY: window.scrollY,
//     windowHeight: window.innerHeight,
//     docHeight: document.documentElement.scrollHeight,
//   });

interface UseScrollArgs {
  limitX?: number;
  limitY?: number;
}

export function useScroll(args?: UseScrollArgs) {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [totalScrollHeight, setTotalScrollHeight] = useState(0);

  const updateScroll = useCallback(() => {
    if (args?.limitY && window.scrollY > args?.limitY) return;
    if (args?.limitX && window.scrollX > args?.limitX) return;
    setScrollX(window.scrollX);
    setScrollY(window.scrollY);
    setTotalScrollHeight(
      window.document.documentElement.scrollHeight - window.innerHeight
    );
  }, [args?.limitX, args?.limitY]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    updateScroll();
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [updateScroll]);

  return { scrollX, scrollY, totalScrollHeight };
}

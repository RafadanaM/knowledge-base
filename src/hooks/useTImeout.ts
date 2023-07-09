import { useEffect, useRef } from "react";

function useTimeout(callback: VoidFunction, delayMs: number) {
  const ref = useRef<VoidFunction>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  useEffect(() => {
    const id = setTimeout(() => {
      if (ref.current) {
        ref.current();
      }
    }, delayMs);

    return () => {
      clearTimeout(id);
    };
  }, [delayMs]);
}

export default useTimeout;

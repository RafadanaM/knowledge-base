import { useEffect, useState } from "react";

function useDebounce<T>(inputValue: T, delayMs = 250) {
  const [value, setValue] = useState(inputValue);

  useEffect(() => {
    const id = setTimeout(() => {
      setValue(inputValue);
    }, delayMs);

    return () => {
      clearTimeout(id);
    };
  }, [delayMs, inputValue]);

  return value;
}

export default useDebounce;

export const useDebounceValueCode = `import { useEffect, useState } from "react";

function useDebounceValue<T>(inputValue: T, delayMs = 250) {
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

export default useDebounceValue;`;

export const useDebounceValueExample = `import { useEffect, useState } from "react";

export default function App() {
    const [value, setValue] = useState("");

    // debounceValue updates if value has stopped being updated in 500ms
    const debouncedValue = useDebounceValue(value, 500);

    useEffect(() => {
        // hit an api
      }, [debouncedValue]);
  
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <p>{debouncedValue}</p>
      </div>
    );
  }
`;

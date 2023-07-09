const useTimeoutCode = `import { useEffect, useRef } from "react";

function useTimeout(callback: VoidFunction, delayMs: number) {
    const ref = useRef<VoidFunction>();
  
    // assign newest callback to ref on every callback change
    useEffect(() => {
      ref.current = callback;
    }, [callback]);
  
    useEffect(() => {
      const id = setTimeout(() => {
        if (ref.current) {
          // executes the latest callback 
          ref.current();
        }
      }, delayMs);
  
      return () => {
        clearTimeout(id);
      };
    }, [delayMs]);
  }
  
  export default useTimeout;`;

const goodUseTimeoutExample = `import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    /*
    If the button is pressed 5 times before timeout, the callback function will update
    count state to 51 (50 + 1) instead of 1 (0 + 1).
    */
    useTimeout(() => {
        setCount(count + 1);
    }, 5_000);

    return (
        <div>
            <div>{count}</div>
            {/* increase count state by 10 */}
            <button onClick={() => setCount(prevCount => prevCount + 10)}>Increment By 10</button>
        </div>
    )
}
`;

const normalTimeout = `import { useState, useEffect } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    /*
    If the button is pressed 5 times before timeout, the callback function will update
    count state to 1 (0 + 1) instead of 51 (50 + 1).
    */
    useEffect(() => {
        const id = setTimeout(() => {
            setCount(count + 1)
        }, 5_000);

        return () => clearTimeout(id);
    // react will complain that deps is not exhaustive, but if count is added it will infinite loop 
    }, []);

    return (
        <div>
            <div>{count}</div>
            {/* increase count state by 10 */}
            <button onClick={() => setCount(prevCount => prevCount + 10)}>Increment By 10</button>
        </div>
    )
}
`;

const normalTimeoutFixed = `import { useState, useEffect, useRef } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const ref = useRef<VoidFunction>();

    // store latest version
    useEffect(() => {
        ref.current = () => {
            setCount(count + 1);
        };
      }, [count]);

    
    // setTimeout() calls ref.current instead of updating count directly.
    useEffect(() => {
        const id = setTimeout(() => {
            if (ref.current) {
                ref.current();
            }
        }, 5_000);

        return () => clearTimeout(id);
    // react will not complain.
    }, []);

    return (
        <div>
            <div>{count}</div>
            {/* increase count state by 10 */}
            <button onClick={() => setCount(prevCount => prevCount + 10)}>Increment By 10</button>
        </div>
    )
}
`;

export {
  useTimeoutCode,
  goodUseTimeoutExample,
  normalTimeout,
  normalTimeoutFixed,
};

import React from "react";
import Content from "../../components/Contents/Content";
import { Metadata } from "next";
import Code from "../../components/Code/Code";
import { useDebounceValueCode, useDebounceValueExample } from "./codes";

export const metadata: Metadata = {
  title: "useDebounceValue",
  description: "UseDebounce value hook",
};

export default function Page() {
  return (
    <Content title="useDebounceValue Hook">
      <p>A react hook which allows a value to be debounced</p>
      <Code title="Code" code={useDebounceValueCode} />
      <p>
        The hook works by utilising <code>setTimeout()</code> and{" "}
        <code>useEffect()</code> together. When <code>inputValue</code> is
        provided to the hook, <code>useEffect()</code> will schedule an updated
        to the <code>debouncedValue</code> state by running{" "}
        <code>setTimeout()</code>. However, if <code>inputValue</code> is
        updated again before the timer runs out, <code>useEffect()</code> will
        clear the scheduled update and essentially reset the timer again.
      </p>
      <Code title="Example" code={useDebounceValueExample} />
      <p>
        This hook (or debounce in general) is used to reduce unecessary work
        done by the program. Based on the example above,{" "}
        <code>debouncedValue</code> will only update if the user has stopped
        writing for 500ms. Therfore, if the user types a keyword, the{" "}
        <code>useEffect()</code> code will most likely run again after the user
        has stopped typing, hence the code will make an API call once. However,
        if no debounce is used, <code>useEffect()</code> will run everytime the
        user types, making unecessary API calls which is wasteful.
      </p>

      <p>
        This hook is actually used by this website. Try typing on the searchbar
        located on the left, the sidebar will only filter the item if you
        stopped typing.
      </p>
    </Content>
  );
}

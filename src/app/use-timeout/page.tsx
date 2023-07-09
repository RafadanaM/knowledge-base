import Link from "next/link";
import Code from "../../components/Code/Code";
import Content from "../../components/Contents/Content";
import {
  goodUseTimeoutExample,
  normalTimeout,
  normalTimeoutFixed,
  useTimeoutCode,
} from "./codes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "useTimeout",
  description: "useTimeout Hook",
};

export default function Page() {
  return (
    <Content title="UseTimeout Hook">
      <p>
        A handy React hook which wraps a native <code>setTimeout()</code>. It
        also handles clearing the timeout automatically.
      </p>
      <Code title="Code" code={useTimeoutCode} language="typescript" />

      <Code title="Example" code={goodUseTimeoutExample} language="tsx" />
      <p>
        The interesting part about this hook is the use of <code>useRef()</code>{" "}
        to store the callback function. This allows the hook to
        &quot;remember&quot; the latest version of the callback function through
        out renders. Hence, if the callback function changes,{" "}
        <code>setTimeout()</code> will execute the latest version of the
        callback function.
      </p>
      <Code
        title="Before useTimeout hook"
        code={normalTimeout}
        language="tsx"
      />

      <p>
        Normally, above is how we use <code>setTimeout()</code>. But, if{" "}
        <code>count</code> is updated before the callback function executes, the{" "}
        <code>count</code> variable inside of the callback function will
        actually refer to the initial <code>count</code> which is 0 and the
        final <code>count</code> will be 1 (0 + 1). Furthermore, react will
        probably complain that the dependency array of <code>useEffect()</code>{" "}
        is incomplete as it depends on <code>count</code>. However, if{" "}
        <code>count</code> is added as a dependency, an infinite loop occurs
        since useEffect depends on <code>count</code> and also updates it.
      </p>

      <p>
        The code can simply be fixed by changing{" "}
        <code>setCount(count + 1)</code> to{" "}
        <code>setCount(prevState =&gt; prevState + 1)</code>, but there may be
        other cases where the callback function will cause infinite loop.
      </p>

      <p>
        To fix this issue, <code>useRef()</code> can be utilized to store the
        latest version of the <code>count</code> update function.
      </p>
      <Code title="Fixed Version" code={normalTimeoutFixed} language="tsx" />
      <p>
        Now, the whole timeout mechanism can be separated to its own hook to
        make <code>useTimeout</code> hook.
      </p>

      <p>
        This hook is heavily insipired by{" "}
        <Link
          href="https://overreacted.io/making-setinterval-declarative-with-react-hooks/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          this amazing article.
        </Link>
      </p>
    </Content>
  );
}

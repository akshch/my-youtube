import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDartTheme, setIsDarkTheme] = useState(false);

  console.log("Rendering...");

  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDartTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDarkTheme(!isDartTheme)}
        >
          Toogle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="mt-5 font-bold text-xl">nth prime {prime}</div>
    </div>
  );
};

export default Demo;

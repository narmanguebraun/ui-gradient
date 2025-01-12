import React, { useState, useEffect } from "react";

import AlertNotification from "@/components/AlertNotification";

import generateTailwindCSS from "@/utils/generateTailwindCSS";
import CodeDisplay from "./CodeDisplay";
import useClipboard from "@/hooks/useClipboard";
import Generator from "./Generator";
import Header from "./Header";
import { INITIAL_STATE } from "./GradientText";

export default function GradientBackground() {
  const [color1, setColor1] = useState<string>(INITIAL_STATE.color1);
  const [color2, setColor2] = useState<string>(INITIAL_STATE.color2);
  const [direction, setDirection] = useState<string>(INITIAL_STATE.direction);
  const { alert, copyToClipboard } = useClipboard();
  const [cssCode, setCssCode] = useState<string>("");
  const [tailwindCode, setTailwindCode] = useState<string>("");

  useEffect(() => {
    const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
    document.body.style.background = gradient;
    setCssCode(`background: ${gradient};`);
    setTailwindCode(generateTailwindCSS(direction, color1, color2));
  }, [color1, color2, direction]);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-between">
        <Header />
        <main className="mx-4 max-w-md">
          <CodeDisplay
            code={tailwindCode}
            alert={alert}
            onCopy={() => copyToClipboard(tailwindCode)}
          />
        </main>
        <Generator
          color1={color1}
          color2={color2}
          direction={direction}
          onChangeColor1={setColor1}
          onChangeColor2={setColor2}
          onClickDirection={setDirection}
        />
      </div>
      {alert && <AlertNotification type={alert.type} message={alert.message} />}
    </>
  );
}

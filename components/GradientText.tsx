import React, { useState, useEffect } from "react";

import AlertNotification from "@/components/AlertNotification";
import generateTailwindCSS from "@/utils/generateTailwindCSS";
import TextSample from "@/components/TextSample";
import CodeDisplay from "@/components/CodeDisplay";
import useClipboard from "@/hooks/useClipboard";
import Generator from "./Generator";
import Header from "./Header";

export const INITIAL_STATE = {
  text: "We lose—because we win Gamblers—recollecting which Toss their dice again!",
  color1: "#87a190",
  color2: "#1f1d34",
  direction: "to bottom",
};

export default function GradientText() {
  const [text, setText] = useState<string>(INITIAL_STATE.text);
  const [color1, setColor1] = useState<string>(INITIAL_STATE.color1);
  const [color2, setColor2] = useState<string>(INITIAL_STATE.color2);
  const [direction, setDirection] = useState<string>(INITIAL_STATE.direction);
  const { alert, copyToClipboard } = useClipboard();
  const [tailwindCode, setTailwindCode] = useState<string>("");

  useEffect(() => {
    setTailwindCode(generateTailwindCSS(direction, color1, color2));
  }, [color1, color2, direction]);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-between bg-[#090909]">
        <Header />
        <main className="mx-4 max-w-md">
          <div className="mb-6 flex justify-center">
            <TextSample
              text={text}
              direction={direction}
              color1={color1}
              color2={color2}
            />
          </div>
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

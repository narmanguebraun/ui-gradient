import React, { useState, useEffect } from "react";

import useClipboard from "@/hooks/useClipboard";
import GradientText from "@/components/GradientText";
import TailwindCodeDisplay from "@/components/TailwindCodeDisplay";
import ColorPicker from "@/components/ColorPicker";
import DirectionButton from "@/components/DirectionButton";
import generateTailwindCSS from "@/utils/generateTailwindCSS";
import AlertNotification from "@/components/AlertNotification";

import { DIRECTIONS } from "@/components/Directions";

const INITIAL_TEXT =
  "We lose—because we win Gamblers—recollecting which Toss their dice again!";

const INITIAL_COLOR1 = "#3b3d5e";
const INITIAL_COLOR2 = "#7299ac";
const INITIAL_DIRECTION = "to bottom";

const TextGradientGenerator: React.FC = () => {
  const [text, setText] = useState<string>(INITIAL_TEXT);
  const [color1, setColor1] = useState<string>(INITIAL_COLOR1);
  const [color2, setColor2] = useState<string>(INITIAL_COLOR2);
  const [direction, setDirection] = useState<string>(INITIAL_DIRECTION);
  const { alert, copyToClipboard } = useClipboard();
  const [tailwindCode, setTailwindCode] = useState<string>("");

  useEffect(() => {
    setTailwindCode(generateTailwindCSS(direction, color1, color2));
  }, [color1, color2, direction]);

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-[#121212]">
        <div className="mx-4 max-w-md">
          <div className="mb-12 flex justify-center">
            <GradientText
              text={text}
              direction={direction}
              color1={color1}
              color2={color2}
            />
          </div>

          <TailwindCodeDisplay
            code={tailwindCode}
            alert={alert}
            onCopy={() => copyToClipboard(tailwindCode)}
          />
        </div>
      </div>

      <div className="fixed bottom-6 z-10 flex w-full justify-center">
        <div className="mr-px grid grid-cols-1">
          <ColorPicker color={color1} onChange={setColor1} />
          <ColorPicker color={color2} onChange={setColor2} />
        </div>
        <div className="grid grid-cols-4 gap-1 p-px">
          {DIRECTIONS.map((btn) => (
            <div className="p-px" key={btn.title}>
              <DirectionButton
                title={btn.title}
                icon={btn.icon}
                selected={direction === btn.title}
                onClick={() => setDirection(btn.title)}
              />
            </div>
          ))}
        </div>
      </div>

      {alert && <AlertNotification type={alert.type} message={alert.message} />}
    </>
  );
};

export default TextGradientGenerator;

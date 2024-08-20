import React, { useState, useEffect } from "react";

import useClipboard from "@/hooks/useClipboard";

import TailwindCodeDisplay from "@/components/TailwindCodeDisplay";
import ColorPicker from "@/components/ColorPicker";
import { DIRECTIONS } from "@/components//Directions";
import DirectionButton from "@/components//DirectionButton";
import generateTailwindCSS from "@/utils/generateTailwindCSS";
import AlertNotification from "@/components/AlertNotification";

const INITIAL_BG_COLOR1 = "#000000";
const INITIAL_BG_COLOR2 = "#90a49e";
const INITIAL_BG_DIRECTION = "to bottom";

const BackgroundGradientGenerator: React.FC = () => {
  const [color1, setColor1] = useState<string>(INITIAL_BG_COLOR1);
  const [color2, setColor2] = useState<string>(INITIAL_BG_COLOR2);
  const [direction, setDirection] = useState<string>(INITIAL_BG_DIRECTION);
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
      <div className="flex h-screen w-full items-center justify-center">
        <TailwindCodeDisplay
          code={tailwindCode}
          alert={alert}
          onCopy={() => copyToClipboard(tailwindCode)}
        />
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

export default BackgroundGradientGenerator;

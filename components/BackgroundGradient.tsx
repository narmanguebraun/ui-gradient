import React, { useState, useEffect } from "react";
import {
  ArrowBottomIcon,
  ArrowBottomLeftIcon,
  ArrowBottomRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopIcon,
  ArrowTopLeftIcon,
  ArrowTopRightIcon,
} from "./Icons";

const DIRECTIONS = [
  { title: "to top", icon: <ArrowTopIcon /> },
  { title: "to right top", icon: <ArrowTopRightIcon /> },
  { title: "to right", icon: <ArrowRightIcon /> },
  { title: "to right bottom", icon: <ArrowBottomRightIcon /> },
  { title: "to bottom", icon: <ArrowBottomIcon /> },
  { title: "to left bottom", icon: <ArrowBottomLeftIcon /> },
  { title: "to left", icon: <ArrowLeftIcon /> },
  { title: "to left top", icon: <ArrowTopLeftIcon /> },
];

const generateTailwindCSS = (
  direction: string,
  color1: string,
  color2: string,
) => {
  let directionClass = "";
  switch (direction) {
    case "to right":
      directionClass = "bg-gradient-to-r";
      break;
    case "to left":
      directionClass = "bg-gradient-to-l";
      break;
    case "to top":
      directionClass = "bg-gradient-to-t";
      break;
    case "to bottom":
      directionClass = "bg-gradient-to-b";
      break;
    case "to right top":
      directionClass = "bg-gradient-to-tr";
      break;
    case "to right bottom":
      directionClass = "bg-gradient-to-br";
      break;
    case "to left top":
      directionClass = "bg-gradient-to-tl";
      break;
    case "to left bottom":
      directionClass = "bg-gradient-to-bl";
      break;
    default:
      directionClass = "bg-gradient-to-r";
  }
  return `${directionClass} from-[${color1}] to-[${color2}]`;
};

const BackgroundGradient: React.FC = () => {
  const [color1, setColor1] = useState<string>("#000000");
  const [color2, setColor2] = useState<string>("#90a49e");
  const [direction, setDirection] = useState<string>("to top");
  const [cssCode, setCssCode] = useState<string>("");
  const [tailwindCode, setTailwindCode] = useState<string>("");

  const applyGradient = () => {
    const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
    document.body.style.background = gradient;
    setCssCode(`background: ${gradient};`);
    setTailwindCode(generateTailwindCSS(direction, color1, color2));
  };

  useEffect(() => {
    applyGradient();
  }, [color1, color2, direction]);

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="rounded-full bg-black px-6 py-3">
          <code className="shrink-0 text-xs">{tailwindCode}</code>
        </div>
      </div>

      <div className="fixed bottom-12 z-10 flex w-full justify-center">
        <div className="mr-px grid grid-cols-1">
          <label id="color 1">
            <input
              name="color 1"
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="h-12 w-12 cursor-pointer bg-transparent p-px [&::-moz-color-swatch-wrapper]:p-px [&::-moz-color-swatch]:rounded-full [&::-moz-color-swatch]:border [&::-moz-color-swatch]:border-current [&::-webkit-color-swatch-wrapper]:p-px [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border [&::-webkit-color-swatch]:border-current"
            />
          </label>
          <label id="color 2">
            <input
              name="color 2"
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              className="h-12 w-12 cursor-pointer bg-transparent p-px [&::-moz-color-swatch-wrapper]:p-px [&::-moz-color-swatch]:rounded-full [&::-moz-color-swatch]:border [&::-moz-color-swatch]:border-current [&::-webkit-color-swatch-wrapper]:p-px [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border [&::-webkit-color-swatch]:border-current"
            />
          </label>
        </div>

        <div className="grid grid-cols-4 gap-1 p-px">
          {DIRECTIONS.map((btn) => (
            <div className="p-px" key={btn.title}>
              <button
                title={btn.title}
                onClick={() => setDirection(btn.title)}
                className={`flex h-[44px] w-[44px] items-center justify-center rounded-full border border-current text-current ${
                  direction === btn.title
                    ? "text-rose-500"
                    : "hover:text-rose-500"
                }`}
              >
                {btn.icon}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BackgroundGradient;

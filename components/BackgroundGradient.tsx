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
  CopyIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { AlertIcon, AlertNotification } from "./Alert";

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
  const [direction, setDirection] = useState<string>("to bottom");
  const [cssCode, setCssCode] = useState<string>("");
  const [tailwindCode, setTailwindCode] = useState<string>("");
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "warning" | "info";
    message: string;
  } | null>(null);

  const applyGradient = () => {
    const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
    document.body.style.background = gradient;
    setCssCode(`background: ${gradient};`);
    setTailwindCode(generateTailwindCSS(direction, color1, color2));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setAlert({
          type: "success",
          message: "Copied to Clipboard",
        });
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      },
      (err) => {
        setAlert({ type: "error", message: "Could not copy text" });
        console.error("Could not copy text: ", err);
      },
    );
  };

  useEffect(() => {
    applyGradient();
  }, [color1, color2, direction]);

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <motion.div
          layout
          className="m-auto max-w-sm rounded-lg border border-current"
        >
          <header className="flex w-full items-center justify-between px-4 py-3">
            <h1 className="text-sm">Tailwind CSS Code</h1>
            {alert ? (
              <AlertIcon type={alert.type} />
            ) : (
              <button
                title="Copy Tailwind CSS Code"
                onClick={() => copyToClipboard(tailwindCode)}
                className="text-white hover:text-rose-500"
              >
                <CopyIcon />
              </button>
            )}
          </header>
          <div className="flex shrink-0 grow-0 basis-auto items-center gap-4 overflow-auto rounded-b-lg bg-black p-4">
            <code className="shrink-0 text-xs">{tailwindCode}</code>
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-6 z-10 flex w-full justify-center">
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

      {alert && <AlertNotification type={alert.type} message={alert.message} />}
    </>
  );
};

export default BackgroundGradient;

"use client";

import ColorPicker from "./ColorPicker";
import DirectionButton, { DirectionButtonProps } from "./DirectionButton";
import { DIRECTIONS } from "./Directions";

type GeneratorProps = {
  color1: string;
  color2: string;
  direction: string;
  onChangeColor1: (color: string) => void;
  onChangeColor2: (color: string) => void;
  onClickDirection: (btn: DirectionButtonProps["title"]) => void;
};
export default function Generator({
  color1,
  color2,
  direction,
  onChangeColor1,
  onChangeColor2,
  onClickDirection,
}: GeneratorProps) {
  return (
    <div className="flex w-full justify-center p-6">
      <div className="mr-px grid grid-cols-1">
        <ColorPicker color={color1} onChange={onChangeColor1} />
        <ColorPicker color={color2} onChange={onChangeColor2} />
      </div>
      <div className="grid grid-cols-4 gap-1 p-px">
        {DIRECTIONS.map((btn) => (
          <div className="p-px" key={btn.title}>
            <DirectionButton
              title={btn.title}
              icon={btn.icon}
              selected={direction === btn.title}
              onClick={() => onClickDirection(btn.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { ReactElement } from "react";

export type DirectionButtonProps = {
  title: string;
  icon: ReactElement;
  selected: boolean;
  onClick: () => void;
};

export default function DirectionButton({
  title,
  icon,
  selected,
  onClick,
}: DirectionButtonProps) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={`flex h-[44px] w-[44px] items-center justify-center rounded-full border border-current text-current ${
        selected ? "text-rose-500" : "hover:text-rose-500"
      }`}
    >
      {icon}
    </button>
  );
}

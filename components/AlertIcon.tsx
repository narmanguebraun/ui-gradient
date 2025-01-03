import React from "react";
import { ReactElement } from "react";
import {
  CheckIcon,
  ErrorIcon,
  WarningIcon,
  InfoIcon,
} from "@/components/Icons";

export type AlertType = "success" | "error" | "warning" | "info";

export const alertStyles = {
  success: "text-teal-500 border-teal-500",
  error: "text-red-500",
  warning: "text-yellow-500",
  info: "text-blue-500",
};

export const alertIcons: Record<AlertType, ReactElement> = {
  success: <CheckIcon />,
  error: <ErrorIcon />,
  warning: <WarningIcon />,
  info: <InfoIcon />,
};

type AlertIconProps = {
  type: AlertType;
};

export default function AlertIcon({ type }: AlertIconProps) {
  return (
    <div
      role="alert"
      className={`flex items-center gap-4 text-xs ${alertStyles[type]}`}
    >
      {alertIcons[type]}
    </div>
  );
}

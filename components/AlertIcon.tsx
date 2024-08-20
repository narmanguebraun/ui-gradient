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
  success: "text-teal-500",
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

export interface AlertIconProps {
  type: AlertType;
}

const AlertIcon: React.FC<AlertIconProps> = ({ type }) => {
  return (
    <div
      role="alert"
      className={`flex items-center gap-4 text-xs ${alertStyles[type]}`}
    >
      {alertIcons[type]}
    </div>
  );
};

export default AlertIcon;

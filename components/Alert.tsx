import { motion } from "framer-motion";
import { CheckIcon, ErrorIcon, InfoIcon, WarningIcon } from "./Icons";

interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  message?: string;
}

const alertStyles = {
  success: "text-teal-500",
  error: "text-red-500",
  warning: "text-yellow-500",
  info: "text-blue-500",
};

const alertIcons = {
  success: <CheckIcon />,
  error: <ErrorIcon />,
  warning: <WarningIcon />,
  info: <InfoIcon />,
};

export const AlertIcon: React.FC<AlertProps> = ({ type }) => {
  return (
    <div
      role="alert"
      className={`flex items-center gap-4 text-xs ${alertStyles[type]}`}
    >
      {alertIcons[type]}
    </div>
  );
};

export const AlertNotification: React.FC<AlertProps> = ({ type, message }) => {
  return (
    <div
      role="alert"
      className={`fixed left-0 top-0 z-20 flex w-full items-center gap-2 bg-black px-4 py-3 font-mono text-xs ${alertStyles[type]}`}
    >
      {alertIcons[type]} {message}
    </div>
  );
};

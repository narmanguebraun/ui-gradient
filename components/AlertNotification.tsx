import { alertIcons, alertStyles, AlertType } from "./AlertIcon";

type AlertProps = {
  type: AlertType;
  message: string;
};

export default function AlertNotification({ type, message }: AlertProps) {
  return (
    <div
      role="alert"
      className={`fixed left-0 top-0 z-20 flex w-full items-center gap-2 bg-black p-4 font-mono text-xs ${alertStyles[type]}`}
    >
      {alertIcons[type]} {message}
    </div>
  );
}

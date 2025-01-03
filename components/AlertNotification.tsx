import { alertIcons, alertStyles, AlertType } from "./AlertIcon";

type AlertProps = {
  type: AlertType;
  message: string;
};

export default function AlertNotification({ type, message }: AlertProps) {
  return (
    <div
      role="alert"
      className={`fixed right-2 top-2 z-20 flex items-center gap-2 rounded-lg border bg-black px-4 py-3 font-mono text-xs ${alertStyles[type]}`}
    >
      {alertIcons[type]} {message}
    </div>
  );
}
